import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [phase, setPhase] = useState('typing');   // 'typing' | 'closing' | 'flash' | 'opening' | 'done'
    const [text, setText] = useState('');
    const [flashActive, setFlashActive] = useState(false);

    const fullText = 'HACKATRON 3.0';

    useEffect(() => {
        // Phase 1 — typewriter
        let i = 0;
        const typeInterval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) {
                clearInterval(typeInterval);
                // Phase 2 — close shutters after short pause
                setTimeout(() => setPhase('closing'), 400);
            }
        }, 80);

        return () => clearInterval(typeInterval);
    }, []);

    useEffect(() => {
        if (phase === 'closing') {
            // Phase 3 — flash when shutters meet, then open
            setTimeout(() => {
                setFlashActive(true);
                setPhase('flash');
            }, 450);
        }
        if (phase === 'flash') {
            setTimeout(() => {
                setPhase('opening');
                setFlashActive(false);
            }, 700);
        }
        if (phase === 'opening') {
            // Phase 4 — call onComplete after shutters open
            setTimeout(() => {
                setPhase('done');
                onComplete && onComplete();
            }, 600);
        }
    }, [phase]);

    if (phase === 'done') return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden"
            style={{ background: '#020420' }}
        >
            {/* Main title */}
            <div className="relative z-10 flex flex-col items-center gap-4 select-none">
                <h1
                    className="text-3xl md:text-5xl tracking-widest font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5FA6FF] via-white to-[#ec53b0] animate-pulse"
                    style={{
                        filter: 'drop-shadow(0 0 20px rgba(95, 166, 255, 1)) drop-shadow(0 0 50px rgba(236, 83, 176, 0.8)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.8))'
                    }}
                >
                    {text}
                </h1>

                {/* Blinking cursor while typing */}
                {phase === 'typing' && (
                    <span className="inline-block w-[3px] h-8 bg-[#5FA6FF] animate-pulse ml-1" />
                )}

                {/* Subtext */}
                <p className="font-vt323 text-[#ec53b0] text-sm tracking-[0.4em] opacity-70">
                    LOADING SYSTEM...
                </p>
            </div>

            {/* Legendary flash line */}
            <div className={`legendary-flash ${flashActive ? 'active' : ''}`} />

            {/* Top shutter */}
            <div className={`shutter-top ${phase === 'closing' || phase === 'flash' ? 'close' : phase === 'opening' ? 'open' : ''}`} />

            {/* Bottom shutter */}
            <div className={`shutter-bottom ${phase === 'closing' || phase === 'flash' ? 'close' : phase === 'opening' ? 'open' : ''}`} />
        </div>
    );
};

export default Preloader;
