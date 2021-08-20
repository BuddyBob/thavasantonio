import React from 'react'
import NavBar from '../../NavBar'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './VM.css'

export default function VM() {
    const codeString = '(num) => num + 1';
    return (
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    );
}
