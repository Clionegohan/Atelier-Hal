import './style.css'
import { artworks } from './data'

const app = document.querySelector<HTMLDivElement>('#app')!

// ギャラリーページの表示
function showGalleryPage(): void {
  document.title = 'Atelier Hal'
  
  app.innerHTML = `
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
    <main class="gallery-container">
      <div class="gallery-track" id="gallery-track">
        ${artworks.map(artwork => `
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
  
  // 作品クリックイベント
  document.querySelectorAll('.artwork-item').forEach(item => {
    item.addEventListener('click', () => {
      const slug = item.getAttribute('data-slug')
      if (slug) {
        navigateTo(`/artwork/${slug}`)
      }
    })
  })
  
  // 縦スクロールを横スクロールに変換
  const galleryContainer = document.querySelector('.gallery-container')
  if (galleryContainer) {
    galleryContainer.addEventListener('wheel', (e: Event) => {
      const wheelEvent = e as WheelEvent
      wheelEvent.preventDefault()
      galleryContainer.scrollLeft += wheelEvent.deltaY
    })
  }
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
  
  // 横スクロールでテキスト → 画像移動
  const artworkContainer = document.querySelector('.artwork-container')
  if (artworkContainer) {
    artworkContainer.addEventListener('wheel', (e: Event) => {
      const wheelEvent = e as WheelEvent
      wheelEvent.preventDefault()
      artworkContainer.scrollLeft += wheelEvent.deltaY
    })
  }
}

// ナビゲーション関数
function navigateTo(path: string): void {
  history.pushState(null, '', path)
  handleRoute()
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