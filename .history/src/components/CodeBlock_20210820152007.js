import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import  { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
export default function CodeBlock() {
    return (
        <div>
            <SyntaxHighlighter language="javascript" style={ dracula }>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}
