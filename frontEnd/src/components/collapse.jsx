import React, { useState, useRef } from "react";

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const getContentHeight = () => {
        console.log(contentRef);
        return isOpen ? contentRef.current.scrollHeight + "px" : "0";
    };

    return (
        <div className="collapse-container">
            <button className="collapse-header" onClick={handleToggle}>
                <h3>{title}</h3>
                <span className={isOpen ? "arrow up" : "arrow down"}></span>
            </button>
            <div
                ref={contentRef}
                className={`collapse-content ${isOpen ? "open" : ""}`}
                style={{ maxHeight: getContentHeight() }}
            >
                {children}
            </div>
        </div>
    );
};

export default Collapse;