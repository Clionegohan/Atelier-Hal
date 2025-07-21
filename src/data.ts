import { Artwork } from './types';

export const artworks: Artwork[] = [
  // 1. amatuka
  {
    id: 1,
    title: "飽和",
    description: "色彩が限界まで押し上げられた瞬間。純度の頂点で静寂と狂乱が交錯する。",
    image: "/assets/artworks/amatuka.png",
    slug: "amatuka"
  },
  // 2. bokee
  {
    id: 2,
    title: "星界よりの使者",
    description: "遥か彼方から届いた光。焦点の向こう側に広がる無限の可能性。",
    image: "/assets/artworks/bokee.png",
    slug: "bokee"
  },
  // 3. gira
  {
    id: 3,
    title: "ギラ",
    description: "眩しすぎる光が網膜に焼き付く。輝きの中に潜む激情と美。",
    image: "/assets/artworks/gira.png",
    slug: "gira"
  },
  // 4. kohaku
  {
    id: 4,
    title: "琥珀",
    description: "時間が結晶化した瞬間。透明な黄金に封じ込められた永遠の記憶。",
    image: "/assets/artworks/kohaku.png",
    slug: "kohaku"
  },
  // 5. giro
  {
    id: 5,
    title: "ギロ",
    description: "擦れ合う音が生み出すリズム。楽器と魂が共鳴する原始的な調べ。",
    image: "/assets/artworks/giro.png",
    slug: "giro"
  },
  // 6. queen
  {
    id: 6,
    title: "クイーン",
    description: "王座に君臨する者の威厳。権力と孤独が織りなす美しき矛盾。",
    image: "/assets/artworks/queen.png",
    slug: "queen"
  },
  // 7. bukubuku
  {
    id: 7,
    title: "追想",
    description: "輪郭が溶解し、境界が消失する。そこに安息がある。",
    image: "/assets/artworks/bukubuku.png",
    slug: "bukubuku"
  },
  // 8. bunpu
  {
    id: 8,
    title: "分布",
    description: "散らばるデータの中に見出される秩序。統計が語る美しき真理。",
    image: "/assets/artworks/bunpu.png",
    slug: "bunpu"
  },
  // 9. ningyo
  {
    id: 9,
    title: "人魚",
    description: "水と陸の境界で歌う者。幻想と現実を繋ぐ神秘の存在。",
    image: "/assets/artworks/ningyo.png",
    slug: "ningyo"
  },
  // 10. chu
  {
    id: 10,
    title: "ちぅ",
    description: "唇が触れ合う瞬間の甘美。純真な愛情の最も素直な表現。",
    image: "/assets/artworks/chu.png",
    slug: "chu"
  },
  // 11. hatena
  {
    id: 11,
    title: "？",
    description: "疑問という名の探究心。知ることへの渇望が生み出す美しき混沌。",
    image: "/assets/artworks/hatena.png",
    slug: "hatena"
  },
  // 12. yurushi
  {
    id: 12,
    title: "赦し",
    description: "心の重荷を解き放つ瞬間。寛容という名の究極の愛。",
    image: "/assets/artworks/yurushi.png",
    slug: "yurushi"
  },
  // 13. gyau
  {
    id: 13,
    title: "ギャウ",
    description: "獣の叫び声が響く瞬間。原始的な本能と野性の美しさ。",
    image: "/assets/artworks/gyau.png",
    slug: "gyau"
  },
  // 14. karasu
  {
    id: 14,
    title: "烏",
    description: "黒き翼に宿る知恵。暗闇の使者が運ぶ神秘のメッセージ。",
    image: "/assets/artworks/karasu.png",
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