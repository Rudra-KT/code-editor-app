import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import Tab from './components/Tab';
import LoadingSpinner from './components/LoadingSpinner'; 
import LoadingSpinner2 from './components/LoadingSpinner2.js'; 
import useLocalStorage from './hooks/useLocalStorage';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import AutoType from './components/AutoType';

const EditorPane = React.lazy(() => import('./components/EditorPane'));

function App() {
  const [HTML, setHTML] = useLocalStorage("HTML", "");
  const [CSS, setCSS] = useLocalStorage("CSS", "");
  const [JS, setJS] = useLocalStorage("JS", "");
  const [active, setActive] = React.useState("HTML");
  const [isLoading, setIsLoading] = useState(true);

  const IFRAMECODE = `
    <html>
      <head>
        <style>
          ${CSS}
        </style>
      </head>
      <body>
        ${HTML}
        <script>
          ${JS}
        </script>
      </body>
    </html>
  `;

  useEffect(() => {
    // Simulate loading delay for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust as necessary

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner /> // Show spinner while loading
      ) : (
        <div style={{ padding: "40px 0px 0px 0px" }}>
          <h1><AutoType /></h1>
          <div style={{ display: "flex" }} className='EditorPaneWButtons'>
            {/* editor */}
            <div style={{ width: "100%" }}>
              
              <ErrorBoundary>
                  <Suspense fallback={<LoadingSpinner2 />}>
                      <Tab activeTab={active} setActiveTab={setActive} label="HTML" />
                      <Tab activeTab={active} setActiveTab={setActive} label="CSS" />
                      <Tab activeTab={active} setActiveTab={setActive} label="JS" />

                      {active === "HTML" && <EditorPane language="html" value={HTML} setValue={setHTML} />}
                      {active === "CSS" && <EditorPane language="css" value={CSS} setValue={setCSS} />}
                      {active === "JS" && <EditorPane language="javascript" value={JS} setValue={setJS} />}
                  </Suspense>
              </ErrorBoundary>
            </div>

            {/* result */}
            <div className='preview-pane'>
              <iframe title='output-frame' height={"100%"} width={"100%"} srcDoc={IFRAMECODE} style={{ padding: "20px" }} />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
