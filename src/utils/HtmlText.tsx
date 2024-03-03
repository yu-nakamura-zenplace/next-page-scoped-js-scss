import ScriptCode from "./ScriptCode";

export default function HtmlText({ html, script, ...props }: {
  html: string;
  script?: () => void;
  [key: string]: any;
}) {
  console.log("HtmlCode rendered");
  return <>
    <div
      dangerouslySetInnerHTML={{ __html: html}}
      {...props}
    />
    {script && <ScriptCode func={script} />}
  </>
}
