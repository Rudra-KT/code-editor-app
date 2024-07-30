// components/EditorPane.js

import React from 'react';
import Editor from "@monaco-editor/react";
import './EditorPane.css';

function EditorPane({ language, value, setValue }) {
  return (
    <div className="editor-pane">
      <Editor
        height="60vh"
        language={language}
        value={value}
        onChange={(value) => setValue(value)}
        theme='vs-dark'
        options={{
          fontSize: 16,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
}

export default EditorPane;
