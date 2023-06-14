import React, { useState } from "react";

const Collapse = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-container">
            <button className="collapse-header" onClick={handleToggle}>
                <h3>{title}</h3>
                <span className={isOpen ? "arrow up" : "arrow down"}></span>
            </button>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    );
};

export default Collapse;