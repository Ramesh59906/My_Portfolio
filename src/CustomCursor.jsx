import React, { useState, useEffect, useRef } from 'react';
import "./Edit/E.css";


const MagicCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;

        cursor.style.left = `${position.x}px`;
        cursor.style.top = `${position.y}px`;
    }, [position]);

    return (
        <div className="magic-cursor">
            <div className="cursor-particle" ref={cursorRef}></div>
        </div>
    );
};

export default MagicCursor;
