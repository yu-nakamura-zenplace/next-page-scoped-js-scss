# next-page-scoped-js-scss 

Next.js AppRouterでjsxではなくhtml/css/javascriptを別のサイトから持ってきてそのまま使いたい場合

以下のコンポーネントを使うと、html/css/javascriptをそのまま使うことができます。
- utils/HtmlText.tsx
- utils/ScriptCode.tsx

## Usage

Webページ(page.tsx)サンプル
```tsx
import HtmlText from "@/utils/HtmlText";
import "./style.scss";
import script from "./script.js";

/**
 * このページはJSXを使わずにHTML/javascript/cssを直接記述し作られています。
 * script.js/style.scssをimportしている場合はスクリプトを実行したり、スタイルも変えられます。
 */
export default function Page() {
  return <HtmlText
    className={`not-jsx-page`}
    script={script}
    html={html}
  />;
}

const html = `
  <h1>Not JSX</h1>
  <p>このページはJSXを使わずにHTMLを直接記述しています</p>
  <h2>importしたnot-jsx-page.scssからスタイルも変えられます</h2>
  <button onclick="alertHello()">ここをクリック</button>
  
  <script>
  function alertHello() {
      alert('Hello');
  }
  </script>
  
  <!-- SCSSでスタイルしたい場合は「./style.scss」 -->
  <style>
  .not-jsx-page {
      background-color: #f0f0f0;
      padding: 20px;
  }
  </style>
`;
```

## javascriptだけ読み込んで使いたい場合

Webページ(page.tsx)サンプル
```tsx
import script from "./script.js";

export default function Page() {
  return <div>
    <ScriptCode script={script} />
  </div>;
}
```

script.js
```javascript
"use client";

export default function script() {
    console.log("script.js script()");
}
```

## Development

Node.js (v18.17以上)<br>
- nodebrewやnvm、asdfなどのNode自体のバージョン管理ツール使用してインストールしてください。
- インストールできたらTerminalで以下のコマンドでバージョンを確認してください。
```bash
node -v
(18.17以上が最低動作要件になります)
```

Bunコマンド (v1.0.6以上)
```bash
curl -fsSL https://bun.sh/install | bash # for macOS, Linux, and WSL

# 必要なライブラリをインストール
bun i

# versionを確認
bun -v
(1.0.6以上推奨)
```

### sample Next.js

```bash
bun i
bun dev
```
