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