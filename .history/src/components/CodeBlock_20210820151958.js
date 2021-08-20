import React from 'react'

export default function CodeBlock() {
    return (
        <div>
            <SyntaxHighlighter language="javascript" style={ dracula }>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}
