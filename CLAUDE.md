# CLAUDE.md - Atelier Hal

> **注意**: このファイルはClaude Code起動時に自動読み込みされます。

## プロジェクト概要
**プロジェクト名**: Atelier Hal  
**説明**: 春の作品を美しく展示する横スクロールWeb画廊  
**技術スタック**: Vite + TypeScript + GSAP + Vanilla CSS  

---

## 設計アーキテクチャ

### ディレクトリ構造
```
atelier-hal/
├── index.html              # SPA メインページ
├── 404.html               # GitHub Pages リダイレクト用
├── src/
│   ├── types/index.ts      # Artwork interface型定義
│   ├── data.ts            # 作品データ（13作品、日本語）
│   ├── main.ts            # SPAエントリーポイント
│   ├── router.ts          # ルーティング機能
│   ├── pages/
│   │   ├── gallery.ts     # ギャラリーページ
│   │   └── artwork.ts     # 作品詳細ページ
│   └── utils/             # 共通ユーティリティ
├── styles/
│   └── main.css           # 白黒ベースのスタイル
└── assets/artworks/       # 英語ファイル名の画像
```

### SPA ルーティング設計
1. **/ (ホーム)**: 横スクロールギャラリー
   - 13作品のサムネイルを横1列表示
   - ホイールスクロールで横移動（縦スクロールなし）
   - 作品クリック → `/artwork/slug` に遷移

2. **/artwork/:slug**: 作品詳細ページ
   - History API で URL管理 (`/artwork/ego`)
   - `src/router.ts` がルート解析
   - `src/pages/artwork.ts` で作品データ取得・表示
   - レイアウト: タイトル → 説明文 → 大画像の順

3. **GitHub Pages 対応**:
   - `404.html` で未知のパスを `index.html` にリダイレクト
   - SPAが正しいルートを処理

### データ構造
```typescript
interface Artwork {
  id: number;
  title: string;        // 日本語
  description: string;  // 日本語
  image: string;        // /assets/artworks/英語ファイル名
  artist: string;       // "春"
  slug: string;         // URL用英語識別子
}
```

---

## 必須コマンド
```bash
# 開発
npm run dev         # 開発サーバー起動（ポート3000）
npm run build       # 本番ビルド
npm run lint        # ESLint実行
npm run type-check  # TypeScript型チェック
npm run format      # Prettier実行

# Gitワークフロー
git checkout -b feature/[名前]  # フィーチャーブランチ作成
```

---

## 技術仕様

### UI/UX設計
- **カラーパレット**: 白黒のみ（背景：真っ黒、テキスト：白）
- **フォント**: 
  - 英語: Cardinal (Classic Short Medium, Fruit Regular/Medium)
  - 日本語: Yu Mincho
- **レスポンシブ**: デスクトップ最優先、スマホ対応は将来対応

### アニメーション・スクロール
- **GSAP + ScrollTrigger**: 60fps以上の滑らかな横スクロール
- **遅延読み込み**: 画面外画像の最適化読み込み
- **横スクロールのみ**: 縦スクロール無効化

### SPA・ルーティング
- **History API**: ブラウザの戻る/進むボタン対応
- **Vite HMR**: 開発時のホットリロード
- **TypeScript**: 型安全なルーティング
- **単一バンドル**: 最適化されたJavaScript配信

### デプロイ・SEO
- **GitHub Pages**: `username.github.io/Atelier-Hal`
- **404.html**: SPA リダイレクト対応
- **動的メタタグ**: JavaScript でSEO最適化

---

## 開発フロー

### コーディング前
1. REQUIREMENTS.mdで要件確認
2. このCLAUDE.mdで設計確認
3. 既存コードパターンを確認

### コミット前
1. `npm run type-check` でTypeScriptチェック
2. `npm run lint` でリンティング
3. `npm run build` でビルド確認

---

## ファイル管理ルール

### 画像ファイル
- **保存場所**: `/assets/artworks/`
- **命名規則**: 英語kebab-case（`ego.jpg`, `music-somunia.jpg`）
- **サイズ調整**: 縦90vh、横自動調整（aspect-ratio保持）

### データ管理
- **作品情報**: `src/data.ts`で一元管理
- **新作品追加**: data.tsに1エントリ追加するだけ
- **保守性**: SPAなので単一コードベース
- **型安全性**: TypeScriptによるコンパイル時チェック

---

## 重要事項
- **SPA**: 単一ページアプリケーション、Vite最適化
- **横スクロールのみ**: 縦スクロール無効
- **ルーティング**: History API、ブラウザ戻るボタン対応
- **白黒デザイン**: 洗練された画廊感
- **全13作品**: アーティスト名は"春"
- **GitHub Pages**: 404.htmlでSPAリダイレクト

## 絶対品質ルール
**変更前に必ずチェック:**

**一つの修正で既存機能を壊すことは絶対禁止**

---

*最終更新*: 2025-07-19  
*開発フェーズ*: Phase 2 基本機能実装中
