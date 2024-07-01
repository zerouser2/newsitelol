import React, { useState, useRef } from 'react';
import styles from './button.module.scss';

function Button() {
    const [isDragging, setIsDragging] = useState(false);
    const [startPosX, setStartPosX] = useState(0);
    const [currentPosX, setCurrentPosX] = useState(0);
    const buttonRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartPosX(e.clientX || e.touches[0].clientX);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const clientX = e.clientX || e.touches[0].clientX;
            const diffX = clientX - startPosX;
            const newPosX = Math.max(0, Math.min(diffX, buttonRef.current.offsetWidth - 50));
            setCurrentPosX(newPosX);
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            if (currentPosX > 150) {
                alert('Swiped right!');
            }

            setCurrentPosX(0);
            setIsDragging(false);
            setStartPosX(0);
        }
    };

    return (
        <div className={styles.buttonContainer} ref={buttonRef}>
            <div className={styles.button}>
                <span
                    className={`material-symbols-outlined ${styles.arrow}`}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleMouseDown}
                    onTouchMove={handleMouseMove}
                    onTouchEnd={handleMouseUp}
                    style={{ transform: `translateX(${currentPosX}px)` }}
                >
                    arrow_right_alt
                </span>
                <p>Swipe to Start</p>
                <div className={styles.spans}>
                    <span className={`material-symbols-outlined ${styles.firstSpan}`}>
                        chevron_right
                    </span>
                    <span className={`material-symbols-outlined ${styles.secondSpan}`}>
                        chevron_right
                    </span>
                    <span className={`material-symbols-outlined ${styles.thirdSpan}`} style={{ marginRight: '16px' }}>
                        chevron_right
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Button;