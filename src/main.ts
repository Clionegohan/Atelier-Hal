import './style.css'
import { artworks, getRandomizedArtworks } from './data'

const app = document.querySelector<HTMLDivElement>('#app')!

// ギャラリーページの表示
function showGalleryPage(randomize: boolean = false): void {
  document.title = 'Atelier Hal'
  
  const displayArtworks = randomize ? getRandomizedArtworks() : artworks
  
  app.innerHTML = `
    <!-- 暗幕オーバーレイ -->
    <div class="curtain-overlay active" id="curtain-overlay"></div>
    
    <div class="portfolio-logo">
      <svg width="280" height="120" viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
        <!-- ATELIER -->
        <text x="140" y="45" text-anchor="middle" class="logo-text-main">ATELIER</text>
        <!-- HAL -->
        <text x="140" y="85" text-anchor="middle" class="logo-text-sub">HAL</text>
        <!-- 装飾的な線 -->
        <line x1="40" y1="60" x2="110" y2="60" class="logo-line"/>
        <line x1="170" y1="60" x2="240" y2="60" class="logo-line"/>
        <!-- 小さな装飾 -->
        <circle cx="30" cy="60" r="2" class="logo-accent"/>
        <circle cx="250" cy="60" r="2" class="logo-accent"/>
      </svg>
    </div>
    
    <!-- ランダム並び替えボタン -->
    <button class="random-button" id="random-button">ランダム</button>
    
    <main class="gallery-container">
      <div class="gallery-track" id="gallery-track">
        ${displayArtworks.map(artwork => `
          <article class="artwork-item" data-slug="${artwork.slug}">
            <img 
              src="${artwork.image}" 
              alt="${artwork.title}"
              class="artwork-thumbnail"
              loading="lazy"
            />
          </article>
        `).join('')}
      </div>
    </main>
  `
  
  // 作品クリックイベント（暗幕アニメーション付き）
  document.querySelectorAll('.artwork-item').forEach(item => {
    item.addEventListener('click', () => {
      const slug = item.getAttribute('data-slug')
      if (slug) {
        navigateTo(`/artwork/${slug}`)
      }
    })
  })
  
  // 滑らかな横スクロール（加速度付き）
  const galleryContainer = document.querySelector('.gallery-container')
  if (galleryContainer) {
    let isScrolling = false
    let currentScrollLeft = galleryContainer.scrollLeft
    let targetScrollLeft = galleryContainer.scrollLeft
    
    // 加速度関連の変数
    let scrollVelocity = 1.0
    let lastScrollTime = 0
    const accelerationFactor = 1.4  // 加速倍率
    const maxVelocity = 5.0          // 最大速度倍率
    const resetDelay = 200           // リセット時間（ms）
    
    // スムーズスクロールアニメーション
    const smoothScroll = () => {
      if (!isScrolling) return
      
      const diff = targetScrollLeft - currentScrollLeft
      const step = diff * 0.05
      
      if (Math.abs(step) < 0.1) {
        currentScrollLeft = targetScrollLeft
        galleryContainer.scrollLeft = currentScrollLeft
        isScrolling = false
        return
      }
      
      currentScrollLeft += step
      galleryContainer.scrollLeft = currentScrollLeft
      requestAnimationFrame(smoothScroll)
    }
    
    galleryContainer.addEventListener('wheel', (e: Event) => {
      const wheelEvent = e as WheelEvent
      wheelEvent.preventDefault()
      
      // 加速度計算
      const now = Date.now()
      if (now - lastScrollTime < resetDelay) {
        // 連続スクロール：加速度アップ
        scrollVelocity = Math.min(maxVelocity, scrollVelocity * accelerationFactor)
      } else {
        // 時間が空いた：加速度リセット
        scrollVelocity = 1.0
      }
      lastScrollTime = now
      
      // 加速度を適用したスクロール量
      const baseScrollAmount = wheelEvent.deltaY * 1.0
      const scrollAmount = baseScrollAmount * scrollVelocity
      
      targetScrollLeft = Math.max(0, targetScrollLeft + scrollAmount)
      
      // 最大スクロール位置を制限
      const maxScroll = galleryContainer.scrollWidth - galleryContainer.clientWidth
      targetScrollLeft = Math.min(maxScroll, targetScrollLeft)
      
      if (!isScrolling) {
        isScrolling = true
        currentScrollLeft = galleryContainer.scrollLeft
        smoothScroll()
      }
    })
  }
  
  // ランダムボタンのイベントリスナー
  const randomButton = document.getElementById('random-button')
  if (randomButton) {
    randomButton.addEventListener('click', () => {
      showGalleryPage(true)
    })
  }
  
  // ロゴを早めに表示
  setTimeout(() => {
    const logo = document.querySelector('.portfolio-logo')
    if (logo) {
      logo.classList.add('visible')
    }
  }, 10)
  
  // 暗幕をフェードアウト
  setTimeout(() => {
    const curtain = document.getElementById('curtain-overlay')
    if (curtain) {
      curtain.classList.remove('active')
    }
  }, 500)
}

// 作品詳細ページの表示
function showArtworkPage(slug: string): void {
  const artwork = artworks.find(a => a.slug === slug)
  
  if (!artwork) {
    navigateTo('/')
    return
  }
  
  document.title = `${artwork.title} - Atelier Hal`
  
  app.innerHTML = `
    <!-- 暗幕オーバーレイ -->
    <div class="curtain-overlay active" id="curtain-overlay"></div>
    
    <main class="artwork-container">
      <div class="artwork-track">
        <section class="artwork-info-section">
          <header class="artwork-header">
            <h2 class="artwork-title">${artwork.title}</h2>
          </header>
          
          <div class="artwork-description">
            <p>${artwork.description}</p>
          </div>
        </section>
        
        <figure class="artwork-figure">
          <img 
            class="artwork-image" 
            src="${artwork.image}"
            alt="${artwork.title}"
            loading="lazy"
          />
        </figure>
      </div>
    </main>
  `
  
  // 滑らかな横スクロール（作品詳細ページ・加速度付き）
  const artworkContainer = document.querySelector('.artwork-container')
  if (artworkContainer) {
    let isScrolling = false
    let currentScrollLeft = artworkContainer.scrollLeft
    let targetScrollLeft = artworkContainer.scrollLeft
    
    // 加速度関連の変数
    let scrollVelocity = 1.0
    let lastScrollTime = 0
    const accelerationFactor = 1.3  // 詳細ページは少し控えめ
    const maxVelocity = 3.0          // 詳細ページは最大速度も控えめ
    const resetDelay = 200
    
    // スムーズスクロールアニメーション
    const smoothScroll = () => {
      if (!isScrolling) return
      
      const diff = targetScrollLeft - currentScrollLeft
      const step = diff * 0.05
      
      if (Math.abs(step) < 0.1) {
        currentScrollLeft = targetScrollLeft
        artworkContainer.scrollLeft = currentScrollLeft
        isScrolling = false
        return
      }
      
      currentScrollLeft += step
      artworkContainer.scrollLeft = currentScrollLeft
      requestAnimationFrame(smoothScroll)
    }
    
    artworkContainer.addEventListener('wheel', (e: Event) => {
      const wheelEvent = e as WheelEvent
      wheelEvent.preventDefault()
      
      // 加速度計算
      const now = Date.now()
      if (now - lastScrollTime < resetDelay) {
        scrollVelocity = Math.min(maxVelocity, scrollVelocity * accelerationFactor)
      } else {
        scrollVelocity = 1.0
      }
      lastScrollTime = now
      
      // 加速度を適用したスクロール量
      const baseScrollAmount = wheelEvent.deltaY * 0.8
      const scrollAmount = baseScrollAmount * scrollVelocity
      
      targetScrollLeft = Math.max(0, targetScrollLeft + scrollAmount)
      
      const maxScroll = artworkContainer.scrollWidth - artworkContainer.clientWidth
      targetScrollLeft = Math.min(maxScroll, targetScrollLeft)
      
      if (!isScrolling) {
        isScrolling = true
        currentScrollLeft = artworkContainer.scrollLeft
        smoothScroll()
      }
    })
  }
  
  // 暗幕をフェードアウト
  setTimeout(() => {
    const curtain = document.getElementById('curtain-overlay')
    if (curtain) {
      curtain.classList.remove('active')
    }
  }, 500)
}

// ナビゲーション関数（暗幕アニメーション付き）
function navigateTo(path: string): void {
  // ロゴを即座に非表示にする
  const logo = document.querySelector('.portfolio-logo')
  if (logo) {
    logo.classList.remove('visible')
  }
  
  // 暗幕アニメーションを開始
  const curtain = document.getElementById('curtain-overlay')
  if (curtain) {
    curtain.classList.add('active')
    // 0.5秒後にページ遷移
    setTimeout(() => {
      history.pushState(null, '', path)
      handleRoute()
    }, 500)
  } else {
    // 暗幕がない場合は即座に遷移
    history.pushState(null, '', path)
    handleRoute()
  }
}

// ルート処理
function handleRoute(): void {
  const path = window.location.pathname
  
  if (path === '/') {
    showGalleryPage()
  } else if (path.startsWith('/artwork/')) {
    const slug = path.split('/artwork/')[1]
    showArtworkPage(slug)
  } else {
    // 未知のパスはホームにリダイレクト
    navigateTo('/')
  }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  handleRoute()
})

// ブラウザの戻る/進むボタン対応
window.addEventListener('popstate', () => {
  handleRoute()
})
