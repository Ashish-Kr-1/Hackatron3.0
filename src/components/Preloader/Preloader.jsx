import React, { useState, useEffect, useRef } from 'react';
import './Preloader.css';
import sloth from '../../assets/images/hackatron2/hero (1).png';
import stars from '../../assets/images/footer/stars.svg';

// Each line mirrors an actual section command from the website
const BOOT_LINES = [
    { cmd: '$ mkdir HACKATRON', note: '# creating something big...', color: '#5FA6FF', delay: 750 },
    { cmd: '$ cat SCHEDULE.txt', note: '# rendering timeline...', color: '#ec53b0', delay: 1000 },
    { cmd: '$ nano ABOUT_US.txt', note: '# becoming sentient...', color: '#9d44c0', delay: 1250 },
    { cmd: '$ man Hackatron 2.0', note: '# processing memories...', color: '#5FA6FF', delay: 1500 },
    { cmd: '$ vi PRIZES.yml', note: '# unpacking prize pool...', color: '#9d44c0', delay: 1750 },
    { cmd: '$ ls -a TRACKS', note: '# scanning challenge tracks...', color: '#5FA6FF', delay: 2000 },
    { cmd: '$ tar -xvzf SPONSORS.tar.gz', note: '# extracting sponsors...', color: '#9d44c0', delay: 2250 },
    { cmd: '$ cd ../legacy/PAST_SPONSORS', note: '# loading hall of fame...', color: '#5FA6FF', delay: 2500 },
];

const PROGRESS_STEPS = [
    { pct: 12, label: 'KERNEL LOADED', delay: 800 },
    { pct: 28, label: 'SCHEDULES SYNCED', delay: 1050 },
    { pct: 44, label: 'TRACKS INDEXED', delay: 1350 },
    { pct: 60, label: 'PRIZES UNLOCKED', delay: 1650 },
    { pct: 76, label: 'SPONSORS LINKED', delay: 1950 },
    { pct: 90, label: 'MODULES MOUNTED', delay: 2250 },
    { pct: 100, label: 'READY TO DREAM BIG', delay: 2550 },
];

const Preloader = ({ onComplete }) => {
    const [slothVisible, setSlothVisible] = useState(false);
    const [slothIdle, setSlothIdle] = useState(false);
    const [lines, setLines] = useState([]);
    const [progress, setProgress] = useState(0);
    const [progressLabel, setLabel] = useState('INITIALIZING...');
    const [showAccess, setShowAccess] = useState(false);
    const [fadingOut, setFadingOut] = useState(false);

    const termRef = useRef(null);

    useEffect(() => {
        // Sloth entrance
        setTimeout(() => setSlothVisible(true), 30);
        setTimeout(() => setSlothIdle(true), 400);

        // Reveal boot lines one by one
        BOOT_LINES.forEach((line, i) => {
            setTimeout(() => {
                setLines(prev => [...prev, i]);
                // Auto-scroll terminal
                setTimeout(() => {
                    termRef.current?.scrollTo({ top: termRef.current.scrollHeight, behavior: 'smooth' });
                }, 30);
            }, line.delay);
        });

        // Progress steps
        PROGRESS_STEPS.forEach(({ pct, label, delay }) => {
            setTimeout(() => {
                setProgress(pct);
                setLabel(label);
            }, delay);
        });

        // Access granted + fadeout
        setTimeout(() => setShowAccess(true), 2800);
        setTimeout(() => setFadingOut(true), 3450);
        setTimeout(() => onComplete && onComplete(), 3850);
    }, []);

    // Auto-scroll when ACCESS GRANTED appears
    useEffect(() => {
        if (showAccess) {
            setTimeout(() => {
                termRef.current?.scrollTo({ top: termRef.current.scrollHeight, behavior: 'smooth' });
            }, 60);
        }
    }, [showAccess]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none ${fadingOut ? 'preloader-fadeout' : ''}`}
            style={{ background: '#020420' }}
        >
            {/* Star field */}
            <div className="preloader-stars" style={{ backgroundImage: `url(${stars})` }} />
            <div className="preloader-scanlines" />

            {/* ── Layout ── */}
            <div className="relative z-10 flex flex-col items-center gap-2 md:gap-4 w-full px-3 md:px-4 max-w-[600px]">

                {/* Sloth */}
                <div
                    className={`w-25 h-25 md:w-36 md:h-36 ${slothVisible ? '' : 'opacity-0'} ${slothVisible && !slothIdle ? 'sloth-enter' : ''} ${slothIdle ? 'sloth-idle' : ''}`}
                    style={{ filter: 'drop-shadow(0 0 20px rgba(157,68,192,0.7)) drop-shadow(0 0 50px rgba(95,166,255,0.25))' }}
                >
                    <img src={sloth} alt="Hackatron Mascot" className="w-full h-full object-contain" />
                </div>

                {/* ── Terminal Window ── */}
                <div className="w-full rounded-sm overflow-hidden"
                    style={{
                        border: '1px solid rgba(95,166,255,0.25)',
                        boxShadow: '0 0 30px rgba(95,166,255,0.08), 0 0 60px rgba(236,83,176,0.05)',
                        background: 'rgba(2,4,32,0.92)',
                        backdropFilter: 'blur(6px)',
                    }}
                >
                    {/* Title bar */}
                    <div className="flex items-center gap-[6px] md:gap-2 px-3 md:px-4 py-[5px] md:py-[7px] border-b border-[rgba(95,166,255,0.15)]"
                        style={{ background: 'rgba(95,166,255,0.06)' }}
                    >
                        <span className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#ec53b0] opacity-90 shadow-[0_0_6px_#ec53b0]" />
                        <span className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#e29b29] opacity-90 shadow-[0_0_6px_#e29b29]" />
                        <span className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#5FA6FF] opacity-90 shadow-[0_0_6px_#5FA6FF]" />
                        <span className="font-vt323 text-[#5FA6FF] text-[10px] md:text-sm tracking-widest ml-2 md:ml-3 opacity-50 truncate">
                            root@hackatron-3.0: ~/hncc-bits
                        </span>
                    </div>

                    {/* Terminal body */}
                    <div
                        ref={termRef}
                        className="px-3 py-2 md:p-4 min-h-[120px] max-h-[35vh] md:max-h-[220px] overflow-y-auto font-vt323 text-[11px] md:text-base space-y-[2px] md:space-y-[3px]"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {/* Initial prompt */}
                        <p className="text-[#9e9e9e] opacity-60 text-[9px] md:text-xs tracking-widest mb-1 md:mb-2">
                            Last login: Mon Feb 23 11:33:05 2026 from 192.168.1.1
                        </p>

                        {BOOT_LINES.map((line, i) => (
                            lines.includes(i) && (
                                <div key={i} className="transition-all duration-200">
                                    {/* Prompt line */}
                                    <p className="flex flex-wrap items-center gap-x-1 md:gap-x-2 gap-y-0 leading-snug">
                                        <span style={{ color: '#ec53b0' }} className="hidden md:inline">hackatron</span>
                                        <span className="text-[#9e9e9e] hidden md:inline">@</span>
                                        <span style={{ color: '#5FA6FF' }} className="hidden md:inline">hncc-bits</span>
                                        <span className="text-[#9e9e9e]"><span className="hidden md:inline">:~</span>$</span>
                                        <span style={{ color: line.color }} className="tracking-wide">{line.cmd}</span>
                                    </p>
                                    {/* Output line */}
                                    <p className="text-[#9e9e9e] opacity-60 text-[9px] md:text-xs pl-3 md:pl-4 leading-snug">{line.note}</p>
                                </div>
                            )
                        ))}

                        {/* Cursor on last line */}
                        {!showAccess && lines.length < BOOT_LINES.length && (
                            <p className="flex items-center gap-x-1 md:gap-x-2 leading-snug">
                                <span style={{ color: '#ec53b0' }} className="hidden md:inline">hackatron</span>
                                <span className="text-[#9e9e9e] hidden md:inline">@</span>
                                <span style={{ color: '#5FA6FF' }} className="hidden md:inline">hncc-bits</span>
                                <span className="text-[#9e9e9e]"><span className="hidden md:inline">:~</span>$</span>
                                <span className="cursor-blink" />
                            </p>
                        )}

                        {/* ACCESS GRANTED */}
                        {showAccess && (
                            <p
                                className="font-vt323 text-sm md:text-xl tracking-[0.2em] md:tracking-[0.3em] mt-1 md:mt-2 access-flash"
                                style={{
                                    color: '#ec53b0',
                                    textShadow: '0 0 6px rgba(236,83,176,0.4)',
                                }}
                            >
                                ██ ACCESS GRANTED ██
                            </p>
                        )}
                    </div>

                    {/* ── Progress Bar ── */}
                    <div className="px-3 md:px-4 pb-3 md:pb-4 pt-1 border-t border-[rgba(95,166,255,0.1)]">
                        {/* Header row */}
                        <div className="flex justify-between items-center font-vt323 text-[9px] md:text-xs tracking-widest mb-[4px] md:mb-[6px]">
                            <span style={{ color: '#5FA6FF' }} className="opacity-70">BOOT PROGRESS</span>
                            <span style={{ color: '#ec53b0' }} className="opacity-80 truncate max-w-[120px] md:max-w-none text-center">{progressLabel}</span>
                            <span style={{ color: '#5FA6FF' }} className="opacity-70">{progress}%</span>
                        </div>

                        {/* Bar track */}
                        <div
                            className="w-full h-[6px] md:h-[8px] rounded-[2px] overflow-hidden relative"
                            style={{ background: 'rgba(95,166,255,0.1)', border: '1px solid rgba(95,166,255,0.2)' }}
                        >
                            <div
                                className="h-full rounded-[2px] transition-all duration-700 ease-out"
                                style={{
                                    width: `${progress}%`,
                                    background: 'linear-gradient(90deg, #0384fc, #5FA6FF 40%, #9d44c0 70%, #ec53b0)',
                                    boxShadow: '0 0 10px #5FA6FF, 0 0 20px rgba(236,83,176,0.5)',
                                }}
                            />
                            {/* Segment ticks */}
                            {[14, 28, 43, 57, 71, 85].map(p => (
                                <div key={p}
                                    className="absolute top-0 bottom-0 w-[1px]"
                                    style={{ left: `${p}%`, background: 'rgba(2,4,32,0.5)' }}
                                />
                            ))}
                        </div>

                        {/* Step dots */}
                        <div className="flex justify-between mt-[4px] md:mt-[5px] px-[1px]">
                            {PROGRESS_STEPS.map((step, i) => (
                                <div
                                    key={i}
                                    className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full transition-all duration-500"
                                    style={{
                                        background: progress >= step.pct ? '#5FA6FF' : 'rgba(95,166,255,0.15)',
                                        boxShadow: progress >= step.pct ? '0 0 6px #5FA6FF' : 'none',
                                        transform: progress >= step.pct ? 'scale(1.2)' : 'scale(1)',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Step labels (hidden on tiny screens) */}
                        <div className="hidden sm:flex justify-between mt-[3px] px-[1px]">
                            {PROGRESS_STEPS.map((step, i) => (
                                <span key={i}
                                    className="font-vt323 text-[8px] tracking-tight transition-all duration-500"
                                    style={{ color: progress >= step.pct ? '#5FA6FF' : 'rgba(95,166,255,0.3)' }}
                                >
                                    {i === Math.floor(PROGRESS_STEPS.length / 2) ? step.label : ''}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom tagline */}
                <p className="font-vt323 text-[10px] tracking-[0.5em] opacity-25 mt-1" style={{ color: '#5FA6FF' }}>
                    BIT SINDRI  •  HNCC  •  EST. 2025
                </p>
            </div>
        </div>
    );
};

export default Preloader;