import "./style.scss"

import Script from "next/script";
import script from "./script.js";
import ScriptCode from "@/utils/ScriptCode";


export default function Page() {
  return <main className="home-page">
    <h1>Home</h1>
    <p>test</p>
    <hr/>
    <h2>RCC</h2>
    <p>test</p>
    <ScriptCode func={script}/>
    <Script id="" dangerouslySetInnerHTML={{ __html: `
      console.log("gtm");
    ` }}/>
  </main>
}