import React from 'react';
import './LoadingAnimation.css'; // Import the CSS file for keyframes

const LoadingAnimation = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="relative waviy">
                <span className="relative inline-block text-4xl text-white uppercase animate-flip" style={{ '--i': 1 }}>L</span>
                <span className="relative inline-block text-4xl text-white uppercase animate-flip" style={{ '--i': 2 }}>o</span>
                <span className="relative inline-block text-4xl text-white uppercase animate-flip" style={{ '--i': 3 }}>a</span>
                <span className="relative inline-block text-4xl text-white uppercase animate-flip" style={{ '--i': 4 }}>d</span>
                <span className="relative inline-block text-4xl text-white uppercase animate-flip" style={{ '--i': 5 }}>i</span>
                <span className="relative inline-block text-4xl text-white uppercase animate-flip" style={{ '--i': 6 }}>n</span>
                <span className="relative inline-block text-4xl text-white uppercase animate-flip" style={{ '--i': 7 }}>g</span>
                <span className="relative inline-block text-4xl text-white uppercase animate-flip" style={{ '--i': 8 }}>.</span>
            </div>
        </div>
    );
};

export default LoadingAnimation;
