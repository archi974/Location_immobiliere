import React, { useState, useEffect, useRef } from "react";

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const contentHeightRef = useRef(0);
    
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            contentHeightRef.current = contentRef.current.scrollHeight;
          } else {
            contentHeightRef.current = 0;
          }
    }, [isOpen]);

    return (
        <div className="collapse-container">
            <button className="collapse-header" onClick={handleToggle}>
                <h3>{title}</h3>
                <span className={isOpen ? "arrow up" : "arrow down"}></span>
            </button>
            <div ref={contentRef} className={`collapse-content ${isOpen ? "open" : ""}`}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;