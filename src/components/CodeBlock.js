import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import  { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
export default function CodeBlock(props) {
    return (
        <div className="code-block">
            <SyntaxHighlighter language={props.language} style={ materialDark }>
                {props.codeString}
            </SyntaxHighlighter>
        </div>
    )
}
