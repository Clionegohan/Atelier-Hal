import { Artwork } from './types';

export const artworks: Artwork[] = [
  // 1. amatuka
  {
    id: 1,
    title: "翼を持つ少女",
    description: "ところが天使は、彼女にとって最悪な冬を切り抜けたばかりか、春の光を浴びて元気を回復したかのように思われた。",
    image: "/Atelier-Hal/assets/artworks/artwork001.png",
    slug: "amatuka"
  },
  // 2. bokee
  {
    id: 2,
    title: "光の残響",
    description: "ぼんやりと浮かび上がる記憶の断片。現実と夢の間で踊る、優しい光の粒子たち。",
    image: "/Atelier-Hal/assets/artworks/artwork002.png",
    slug: "bokee"
  },
  // 3. gira
  {
    id: 3,
    title: "胎動",
    description: "ずっと、このまま...もう眠い。唄が聞こえる...あぁ、ずっとそこにいてくれたのね。",
    image: "/Atelier-Hal/assets/artworks/artwork003.png",
    slug: "gira"
  },
  // 4. giro
  {
    id: 4,
    title: "無慈悲な女王",
    description: "豊かに甘く実った葡萄。どろりとした深紅の液体が、私の身体にも流れていることを思い出させる。いつから忘れていたのだろう。",
    image: "/Atelier-Hal/assets/artworks/artwork005.png",
    slug: "giro"
  },
  // 5. bukubuku
  {
    id: 5,
    title: "若頭",
    description: "ん〜〜〜？...うんうん。........うん？",
    image: "/Atelier-Hal/assets/artworks/artwork007.png",
    slug: "bukubuku"
  },
  // 6. chu
  {
    id: 6,
    title: "粛々と",
    description: "南緯47度9分、西経126度43分",
    image: "/Atelier-Hal/assets/artworks/artwork010.png",
    slug: "chu"
  },
  // 7. hatena
  // {
  //   id: 7,
  //   title: "無垢な疑問",
  //   description: "首をかしげる愛らしい仕草。純真な瞳に映る世界への、尽きることのない好奇心。",
  //   image: "/Atelier-Hal/assets/artworks/artwork011.png",
  //   slug: "innocent-question"
  // },
  // 8. yurushi
  {
    id: 8,
    title: "わかんないですけど...",
    description: "居酒屋の肉寿司、写真通りに来たことなくないですか...？わかんないですけど...",
    image: "/Atelier-Hal/assets/artworks/artwork012.png",
    slug: "yurushi"
  },
  // 9. karasu
  // {
  //   id: 9,
  //   title: "影の守護者",
  //   description: "静寂に包まれた黒髪の少女。知恵と孤独を纏い、運命の糸を紡ぐ神秘的な存在。",
  //   image: "/Atelier-Hal/assets/artworks/artwork014.png",
  //   slug: "shadow-guardian"
  // },
  // 10. kiro
  {
    id: 10,
    title: "帰路",
    description: "あぁ...あなた、迷っているのね？でも、道に迷うものは、道をゆく者に他ならないわ。",
    image: "/Atelier-Hal/assets/artworks/artwork015.png",
    slug: "kiro"
  },
  // 11. beniko
  {
    id: 11,
    title: "遠い日の少女",
    description: "好きなように生きて、好きなように死ぬ。誰のためでもなく。",
    image: "/Atelier-Hal/assets/artworks/artwork016.png",
    slug: "beniko"
  },
  // 12. fukofuku
  // {
  //   id: 12,
  //   title: "不幸福",
  //   description: "悲しみに沈む少女の表情。幸せの対極にある感情の奥深さを静かに物語る姿。",
  //   image: "/Atelier-Hal/assets/artworks/artwork017.png",
  //   slug: "unhappiness"
  // },
  // 13. karakuri
  {
    id: 13,
    title: "\"Doll\"",
    description: "人の形ほど恐いものはありません。人は、人形という呪文によって自分の形が恐ろしいことを封印したのです。",
    image: "/Atelier-Hal/assets/artworks/artwork018.png",
    slug: "karakuri"
  },
  // // 14. nep
  // {
  //   id: 14,
  //   title: "サイドN",
  //   description: "静かな横顔に秘められた内なる世界。見る者に問いかける、もう一つの視点からの物語。",
  //   image: "/Atelier-Hal/assets/artworks/nep.png",
  //   slug: "side-n"
  // },
  // // 15. tenaku
  // {
  //   id: 15,
  //   title: "帰らないことを前提とした故郷",
  //   description: "決して戻ることのない故郷への想い。別れを受け入れた心に宿る、美しくも切ない記憶。",
  //   image: "/Atelier-Hal/assets/artworks/tenaku.png",
  //   slug: "homeland-without-return"
  // }
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
