import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import  { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
export default function CodeBlock(props) {
    return (
        <div>
            <SyntaxHighlighter language={props.language} style={ dracula }>
                {props.codeString}
            </SyntaxHighlighter>
        </div>
    )
}
