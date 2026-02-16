import React, { useState, useEffect, useRef } from 'react';
import spriteSheet from '../../assets/images/scrollbar_sprites.png';

const CustomScrollbar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [activeSection, setActiveSection] = useState('hero');

    // Section IDs to track matching the project structure
    // Coordinates are [x, y] in percentage (0, 50, 100)
    // Grid 3x3 mapping:
    // Row 1: Rocket(0,0), Handshake(50,0), Question(100,0)
    // Row 2: Flowchart(0,50), Calendar(50,50), Camera(100,50)
    // Row 3: Trophy(0,100), Lightbulb(50,100), Envelope(100,100)

    const sections = [
        { id: 'hero', bgPos: '0% 0%' },        // Rocket
        { id: 'timer', bgPos: '50% 50%' },      // Calendar
        { id: 'schedule', bgPos: '50% 50%' },    // Calendar
        { id: 'sc0', bgPos: '100% 50%' },       // Camera
        { id: 'prizes', bgPos: '0% 100%' },     // Trophy
        { id: 'tracks', bgPos: '0% 50%' },      // Flowchart
        { id: 'sponsors', bgPos: '50% 0%' },    // Handshake
        { id: 'faq', bgPos: '100% 0%' },        // Question Mark
        { id: 'footer', bgPos: '100% 100%' },   // Envelope
        { id: 'upfooter', bgPos: '100% 100%' }  // Envelope
    ];

    useEffect(() => {
        let rafId;
        const handleScroll = () => {
            rafId = window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                setScrollPercentage(Math.min(100, Math.max(0, scrollPercent)));
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial position

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.cancelAnimationFrame(rafId);
        };
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            // This creates a horizontal line in the middle of the viewport
            // The intersection triggers only when an element crosses this line
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const currentSection = sections.find(s => s.id === activeSection) || sections[0];

    const isDragging = useRef(false);
    const dragOffset = useRef(0);
    const thumbRef = useRef(null);

    const handleMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isDragging.current = true;

        // Calculate offset from the top of the thumb
        if (thumbRef.current) {
            const thumbRect = thumbRef.current.getBoundingClientRect();
            dragOffset.current = e.clientY - thumbRect.top;
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;

        const trackOffset = 100; // Accounting for top margin
        const trackHeight = window.innerHeight - trackOffset;
        const thumbHeight = 40;
        const totalTravel = trackHeight - thumbHeight;

        // Calculate desired position
        // Top = P * totalTravel
        // We calculate P from mouse position
        // MouseY - offset = Top

        const viewportTop = e.clientY - dragOffset.current;
        const relativeTop = viewportTop - trackOffset;

        const boundedTop = Math.max(0, Math.min(totalTravel, relativeTop));

        const scrollRatio = boundedTop / totalTravel;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        window.scrollTo(0, scrollRatio * docHeight);
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
    };

    return (
        <div style={{
            position: 'fixed',
            top: '100px', // Offset from top
            right: 0,
            width: '6px', // Ultra slim for elegance
            height: 'calc(100vh - 100px)', // Adjusted height
            backgroundColor: '#020420', // Deep dark blue
            borderLeft: '1px solid #1a1a3e', // Subtler border
            zIndex: 9999
        }}>
            {/* The Track Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `
                    linear-gradient(to bottom, transparent 50%, rgba(236, 83, 176, 0.05) 50%),
                    linear-gradient(to right, transparent 50%, rgba(236, 83, 176, 0.05) 50%)
                `,
                backgroundSize: '10px 10px',
                opacity: 0.3
            }}></div>

            {/* The Thumb */}
            <div
                ref={thumbRef}
                onMouseDown={handleMouseDown}
                style={{
                    position: 'absolute',
                    top: `${scrollPercentage}%`,
                    right: '0',
                    transform: `translateY(-${scrollPercentage}%)`,
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'grab',
                    touchAction: 'none'
                }}
            >
                {/* Glowing Block Graphic */}
                <div style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: '#040842',
                    border: '2px solid #ec53b0',
                    boxShadow: '0 0 8px #ec53b0, inset 0 0 4px rgba(236, 83, 176, 0.5)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div
                        style={{
                            width: '28px',
                            height: '28px',
                            backgroundImage: `url(${spriteSheet})`,
                            backgroundSize: 'auto 300%',
                            backgroundPosition: currentSection.bgPos,
                            filter: 'hue-rotate(320deg) brightness(1.5) drop-shadow(0 0 2px #ec53b0)',
                            pointerEvents: 'none'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CustomScrollbar;
