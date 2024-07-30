// src/components/AutoType.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const AutoType = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Code Editor'],
      typeSpeed: 140,
      backSpeed: 100,
      loop:true,
      loopCount: 2
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup Typed.js instance
    };
  }, []);

  return <span className="auto-type" ref={typedElement}></span>;
};

export default AutoType;
