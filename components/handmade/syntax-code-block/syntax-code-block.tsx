import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { zTouch } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  codeSnippet: string
}

export default function SyntaxCodeBlock({ codeSnippet }: Props) {
  return (
    <SyntaxHighlighter language="tsx" style={zTouch}>
      {codeSnippet}
    </SyntaxHighlighter>
  );
}
