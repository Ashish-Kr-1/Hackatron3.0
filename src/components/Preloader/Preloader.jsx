/* Preloader.jsx */
import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [text, setText] = useState('');
    const fullText = "HACKATRON 3.0";
    const [shuttersClosed, setShuttersClosed] = useState(false);
    const [showFlash, setShowFlash] = useState(false);

    useEffect(() => {
        let currentIndex = 0;
        const typeInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typeInterval);

                // Typing done -> Trigger Legendary Sequence
                setTimeout(() => {
                    setShuttersClosed(true);

                    // Flash happens right when shutters meet (approx 400ms into transition)
                    setTimeout(() => setShowFlash(true), 400);

                    // Wait for flash/shutter animations then finish
                    setTimeout(onComplete, 1000);
                }, 300);
            }
        }, 50);

        return () => clearInterval(typeInterval);
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] bg-[#020420] flex flex-col items-center justify-center overflow-hidden font-gamefreak text-white select-none">

            {/* Background Texture/Grid (Optional subtle detail) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#1a202c 1px, transparent 1px), linear-gradient(90deg, #1a202c 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Main Content Container */}
            <div className={`flex flex-col items-center gap-6 transition-all duration-300 ${shuttersClosed ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} z-10`}>

                {/* Legendary Text with Multiple Glow Layers */}
                <h1 className="text-3xl md:text-5xl tracking-widest font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5FA6FF] via-white to-[#ec53b0] animate-pulse"
                    style={{
                        filter: 'drop-shadow(0 0 20px rgba(95, 166, 255, 1)) drop-shadow(0 0 50px rgba(236, 83, 176, 0.8)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.8))'
                    }}>
                    {text}
                </h1>

            </div>

            {/* Shutter Transition Overlay */}
            <div className={`absolute inset-0 z-50 pointer-events-none ${shuttersClosed ? 'shutters-active' : ''}`}>
                <div className="shutter-top"></div>
                <div className="shutter-bottom"></div>

                {/* The Legendary Flash Line */}
                {showFlash && <div className="legendary-overlay"></div>}
            </div>

        </div>
    );
};

export default Preloader;
