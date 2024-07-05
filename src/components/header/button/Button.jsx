import React, { useState, useRef } from 'react';
import styles from './button.module.scss';
import YellowCircle from './YellowCircle';
import WhiteCircle from './WhiteCircle';
import { Link } from 'react-router-dom';

function Button() {

    return (
        <div className={styles.buttonContainer}>
            <YellowCircle />
            <WhiteCircle />
            <Link to='/notactive'>
                <div className={styles.button}>
                    <p>Tap to Start</p>
                </div>
            </Link>
        </div>
    );
}

export default Button;