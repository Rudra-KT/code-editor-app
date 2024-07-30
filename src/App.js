import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import Tab from './components/Tab';
import LoadingSpinner from './components/LoadingSpinner';
import LoadingSpinner2 from './components/LoadingSpinner2';
import useLocalStorage from './hooks/useLocalStorage';
import ErrorBoundary from './components/ErrorBoundary';
import FooterLight from './components/FooterLight';
import Footer from './components/Footer';
import AutoType from './components/AutoType';

const EditorPane = React.lazy(() => import('./components/EditorPane'));

function App() {
  const [HTML, setHTML] = useLocalStorage("HTML", "");
  const [CSS, setCSS] = useLocalStorage("CSS", "");
  const [JS, setJS] = useLocalStorage("JS", "");

  const [active, setActive] = useState("HTML");
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); // State to manage theme

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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust as necessary

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Apply theme class to body
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner /> // Show spinner while loading
      ) : (
        <div style={{ padding: "40px 0px 0px 0px" }}>
          <h1><AutoType /></h1>
          <button onClick={toggleTheme} className='toggle-button'>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
          <div style={{ display: "flex" }} className='EditorPaneWButtons'>
            {/* editor */}
            <div style={{ width: "100%" }}>
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner2 />}>
                  <Tab
                    activeTab={active}
                    setActiveTab={setActive}
                    label="HTML"
                    isLightMode={!isDarkMode} // Correctly pass the light mode state
                  />
                  <Tab
                    activeTab={active}
                    setActiveTab={setActive}
                    label="CSS"
                    isLightMode={!isDarkMode} // Correctly pass the light mode state
                  />
                  <Tab
                    activeTab={active}
                    setActiveTab={setActive}
                    label="JS"
                    isLightMode={!isDarkMode} // Correctly pass the light mode state
                  />
                  {active === "HTML" && <EditorPane language="html" value={HTML} setValue={setHTML} isDarkMode={isDarkMode} />}
                  {active === "CSS" && <EditorPane language="css" value={CSS} setValue={setCSS} isDarkMode={isDarkMode} />}
                  {active === "JS" && <EditorPane language="javascript" value={JS} setValue={setJS} isDarkMode={isDarkMode} />}
                </Suspense>
              </ErrorBoundary>
            </div>

            {/* result */}
            <div className='preview-pane'>
              <iframe title='output-frame' height={"100%"} width={"100%"} srcDoc={IFRAMECODE} style={{ padding: "20px" }} className='iframe'/>
            </div>
          </div>
          {isDarkMode ? <Footer /> : <FooterLight />} {/* Conditionally render the footer */}
        </div>
      )}
    </>
  );
}

export default App;
