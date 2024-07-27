import { CopyBlock, dracula } from "react-code-blocks";

const CodeBlock = ({ text }: { text: string }) => {
  return (
    <div className="w-full h-full code">
      <CopyBlock
        language="jsx"
        text={text}
        showLineNumbers={true}
        theme={dracula}
        codeBlock
        customStyle={{
          fontSize: "11.5px",
          width: "100%",
          height: "100%",
          borderRadius: "0",
        }}
      />
    </div>
  );
};

export default CodeBlock;
