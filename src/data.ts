import { Artwork } from './types';

export const artworks: Artwork[] = [
  // 1. amatuka
  {
    id: 1,
    title: "翼を持つ少女",
    description: "ところが天使は、彼女にとって最悪な冬を切り抜けたばかりか、春の光を浴びて元気を回復したかのように思われた。",
    image: "/assets/artworks/artwork001.png",
    slug: "amatuka"
  },
  // 2. bokee
  {
    id: 2,
    title: "光の残響",
    description: "ぼんやりと浮かび上がる記憶の断片。現実と夢の狭間で踊る、優しい光の粒子たち。",
    image: "/assets/artworks/artwork002.png",
    slug: "bokee"
  },
  // 3. gira
  {
    id: 3,
    title: "黄金の瞳",
    description: "太陽を宿した少女の眼差し。温かな光の中に秘められた、揺るぎない意志の強さ。",
    image: "/assets/artworks/artwork003.png",
    slug: "gira"
  },
  // 4. kohaku
  {
    id: 4,
    title: "琥珀色の慈愛",
    description: "母なる愛に包まれた安らぎの時間。黄金の瞳に映る、すべてを受け入れる優しさ。",
    image: "/assets/artworks/artwork004.png",
    slug: "kohaku"
  },
  // 5. giro
  {
    id: 5,
    title: "静寂の眼差し",
    description: "何も語らず、すべてを見通す瞳。深い静寂の中に宿る、言葉を超えた理解と共感。",
    image: "/assets/artworks/artwork005.png",
    slug: "giro"
  },
  // 6. queen
  {
    id: 6,
    title: "女王の孤独",
    description: "華やかな装いの下に隠された、深い孤独感。責任という重い冠を戴く者の、静かな決意。",
    image: "/assets/artworks/artwork006.png",
    slug: "queen"
  },
  // 7. bukubuku
  {
    id: 7,
    title: "水中の夢",
    description: "水泡に包まれた幻想的な世界。現実の重力から解放された、軽やかで自由な魂の踊り。",
    image: "/assets/artworks/artwork007.png",
    slug: "bukubuku"
  },
  // 8. bunpu
  {
    id: 8,
    title: "秩序の美学",
    description: "規則正しく配置された美しいパターン。混沌の中から生まれる調和という名の芸術。",
    image: "/assets/artworks/artwork008.png",
    slug: "bunpu"
  },
  // 9. ningyo
  {
    id: 9,
    title: "海の歌姫",
    description: "深海から響く美しい歌声。人の世への憧れを胸に秘めた、永遠の放浪者の物語。",
    image: "/assets/artworks/artwork009.png",
    slug: "ningyo"
  },
  // 10. chu
  {
    id: 10,
    title: "初恋の調べ",
    description: "頬を染める初々しい恋心。小さな唇から溢れる、純粋で無垢な愛情の歌声。",
    image: "/assets/artworks/artwork010.png",
    slug: "chu"
  },
  // 11. hatena
  {
    id: 11,
    title: "無垢な疑問",
    description: "首をかしげる愛らしい仕草。純真な瞳に映る世界への、尽きることのない好奇心。",
    image: "/assets/artworks/artwork011.png",
    slug: "hatena"
  },
  // 12. yurushi
  {
    id: 12,
    title: "慈悲の光",
    description: "すべてを包み込む温かな光。過ちを受け入れ、愛で癒やす慈悲深い心の表れ。",
    image: "/assets/artworks/artwork012.png",
    slug: "yurushi"
  },
  // 13. gyau
  {
    id: 13,
    title: "天使の戦士",
    description: "戦場に舞い散る白い羽根。天使と悪魔の狭間で戦う、勇敢な魂の雄叫び。",
    image: "/assets/artworks/artwork013.png",
    slug: "gyau"
  },
  // 14. karasu
  {
    id: 14,
    title: "影の守護者",
    description: "静寂に包まれた黒髪の少女。知恵と孤独を纏い、運命の糸を紡ぐ神秘的な存在。",
    image: "/assets/artworks/artwork014.png",
    slug: "karasu"
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
