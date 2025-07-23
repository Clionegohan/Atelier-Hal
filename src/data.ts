import { Artwork } from './types';

export const artworks: Artwork[] = [
  // 1. amatuka
  {
    id: 1,
    title: "翼を持つ少女",
    description: "ところが天使は、彼女にとって最悪な冬を切り抜けたばかりか、春の光を浴びて元気を回復したかのように思われた。",
    image: "/Atelier-Hal/assets/artworks/artwork001.png",
    slug: "winged-girl"
  },
  // 2. bokee
  {
    id: 2,
    title: "光の残響",
    description: "ぼんやりと浮かび上がる記憶の断片。現実と夢の狭間で踊る、優しい光の粒子たち。",
    image: "/Atelier-Hal/assets/artworks/artwork002.png",
    slug: "echo-of-light"
  },
  // 3. gira
  {
    id: 3,
    title: "黄金の瞳",
    description: "太陽を宿した少女の眼差し。温かな光の中に秘められた、揺るぎない意志の強さ。",
    image: "/Atelier-Hal/assets/artworks/artwork003.png",
    slug: "golden-eyes"
  },
  // 4. giro
  {
    id: 4,
    title: "静寂の眼差し",
    description: "何も語らず、すべてを見通す瞳。深い静寂の中に宿る、言葉を超えた理解と共感。",
    image: "/Atelier-Hal/assets/artworks/artwork005.png",
    slug: "silent-gaze"
  },
  // 5. bukubuku
  {
    id: 5,
    title: "水中の夢",
    description: "水泡に包まれた幻想的な世界。現実の重力から解放された、軽やかで自由な魂の踊り。",
    image: "/Atelier-Hal/assets/artworks/artwork007.png",
    slug: "underwater-dream"
  },
  // 6. chu
  {
    id: 6,
    title: "初恋の調べ",
    description: "頬を染める初々しい恋心。小さな唇から溢れる、純粋で無垢な愛情の歌声。",
    image: "/Atelier-Hal/assets/artworks/artwork010.png",
    slug: "first-loves-melody"
  },
  // 7. hatena
  {
    id: 7,
    title: "無垢な疑問",
    description: "首をかしげる愛らしい仕草。純真な瞳に映る世界への、尽きることのない好奇心。",
    image: "/Atelier-Hal/assets/artworks/artwork011.png",
    slug: "innocent-question"
  },
  // 8. yurushi
  {
    id: 8,
    title: "慈悲の光",
    description: "すべてを包み込む温かな光。過ちを受け入れ、愛で癒やす慈悲深い心の表れ。",
    image: "/Atelier-Hal/assets/artworks/artwork012.png",
    slug: "light-of-mercy"
  },
  // 9. karasu
  {
    id: 9,
    title: "影の守護者",
    description: "静寂に包まれた黒髪の少女。知恵と孤独を纏い、運命の糸を紡ぐ神秘的な存在。",
    image: "/Atelier-Hal/assets/artworks/artwork014.png",
    slug: "shadow-guardian"
  },
  // 10. kiro
  {
    id: 10,
    title: "帰路",
    description: "日暮れの道を歩む少女の後ろ姿。故郷への想いを胸に、静かに歩み続ける旅路の終わり。",
    image: "/Atelier-Hal/assets/artworks/artwork015.png",
    slug: "homeward-path"
  },
  // 11. beniko
  {
    id: 11,
    title: "紅子",
    description: "鮮やかな紅色に染まった少女の横顔。情熱的な瞳に宿る、燃えるような想いの深さ。",
    image: "/Atelier-Hal/assets/artworks/artwork016.png",
    slug: "crimson-girl"
  },
  // 12. fukofuku
  {
    id: 12,
    title: "不幸福",
    description: "悲しみに沈む少女の表情。幸せの対極にある感情の奥深さを静かに物語る姿。",
    image: "/Atelier-Hal/assets/artworks/artwork017.png",
    slug: "unhappiness"
  },
  // 13. karakuri
  {
    id: 13,
    title: "機械仕掛けと赤い糸",
    description: "精密な歯車と運命の赤い糸が織りなす幻想。機械的な美しさと人間的な絆の調和。",
    image: "/Atelier-Hal/assets/artworks/artwork018.png",
    slug: "clockwork-red-thread"
  },
  // 14. nep
  {
    id: 14,
    title: "サイドN",
    description: "静かな横顔に秘められた内なる世界。見る者に問いかける、もう一つの視点からの物語。",
    image: "/Atelier-Hal/assets/artworks/nep.png",
    slug: "side-n"
  },
  // 15. tenaku
  {
    id: 15,
    title: "帰らないことを前提とした故郷",
    description: "決して戻ることのない故郷への想い。別れを受け入れた心に宿る、美しくも切ない記憶。",
    image: "/Atelier-Hal/assets/artworks/tenaku.png",
    slug: "homeland-without-return"
  }
];

// ランダム並び替え関数
export function getRandomizedArtworks(): Artwork[] {
  const shuffled = [...artworks];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}