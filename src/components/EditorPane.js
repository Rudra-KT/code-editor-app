import React from 'react';
import Editor from "@monaco-editor/react";
import './EditorPane.css';

function EditorPane({ language, value, setValue, isDarkMode }) {
  return (
    <div className={`editor-pane ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Editor
        height="60vh"
        language={language}
        value={value}
        onChange={(value) => setValue(value)}
        theme={isDarkMode ? 'vs-dark' : 'vs-light'} // Adjust theme based on prop
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
