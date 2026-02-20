import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import stars from '../../assets/images/footer/stars.svg';
import bugseeLogo from '../../assets/images/past_sponsors/bugsee.png';
import codingBlocksLogo from '../../assets/images/past_sponsors/coding-blocks.png';
import creativeTimLogo from '../../assets/images/past_sponsors/creative-tim.png';
import educativeLogo from '../../assets/images/past_sponsors/educative.png';
import teqipLogo from '../../assets/images/past_sponsors/teqip.png';
import microsoftLogo from '../../assets/images/past_sponsors/microsoft-azure-new.png';
import reskilllLogo from '../../assets/images/past_sponsors/reskilll.png';
import devfolioLogo from '../../assets/images/past_sponsors/devfolio.png';
import ethIndiaLogo from '../../assets/images/past_sponsors/ethindia-fix.png';
import devtownLogo from '../../assets/images/past_sponsors/devtown.jpg';
import technixLogo from '../../assets/images/past_sponsors/Technix_.jpg';
import amulLogo from '../../assets/images/past_sponsors/amul.png';
import mayaLogo from '../../assets/images/past_sponsors/maya-data-privacy.png';

const PastSponsors = () => {
    const [bgSize, setBgSize] = useState("110%");
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setBgSize("300%");
            }
            else {
                setBgSize("110%");
            }
        };

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 10; // Adjust the multiplier for sensitivity
            const y = (e.clientY / innerHeight - 0.5) * 10; // Adjust the multiplier for sensitivity
            setBgPosition({ x, y });
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className="max-[768px]:pt-[40px] pt-[80px] relative" style={{
            backgroundImage: `url(${stars})`,
            backgroundPosition: `${50}% ${50 - bgPosition.y}%`,
            backgroundSize: bgSize,
        }} id='past-sponsors'>
            <div className="max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto">
                <h1 className='mx-5 xl:mx-0 py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]'>$ cd ../legacy/<span className='text-white'>PAST_SPONSORS</span></h1>

                <div className='mb-4 flex flex-col gap-1 sm:gap-1'>
                    <p className='font-vt323 text-gray-400 w-[90vw] leading-[5vw] text-[4.5vw] sm:leading-0 sm:px-0  sm:w-[70vw] sm:text-lg sm:leading-5 md:text-[2.8vw] md:leading-6 md:w-[75vw] lg:text-xl lg:w-[56vw] lg:leading-5 xl:text-3xl xl:w-[55rem] 3xl:text-5xl 3xl:w-[75rem] text-center mx-auto'>Thank you to our generous sponsors from previous years!</p>
                </div>

                <div className="flex items-center gap-3 my-4 mx-5 xl:mx-0">
                    <div className="h-[2px] flex-1" style={{ background: 'repeating-linear-gradient(90deg, #ec53b0 0px, #ec53b0 6px, transparent 6px, transparent 12px)' }} />
                    <span className="font-vt323 text-[#ec53b0] text-sm tracking-[0.3em] opacity-80">ARCHIVED</span>
                    <div className="h-[2px] flex-1" style={{ background: 'repeating-linear-gradient(90deg, #9d44c0 0px, #9d44c0 6px, transparent 6px, transparent 12px)' }} />
                </div>

                <div className='pt-2 pb-10 w-[94vw] xl:w-[78vw] 2xl:w-full mx-auto'>
                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4'>

                        {[
                            { link: "https://www.bugsee.com/", img: bugseeLogo, alt: "Bugsee", color: "#ec53b0" },
                            { link: "https://codingblocks.com/", img: codingBlocksLogo, alt: "Coding Blocks", color: "#e29b29" },
                            { link: "https://www.creative-tim.com/", img: creativeTimLogo, alt: "Creative Tim", color: "#5FA6FF" },
                            { link: "https://www.educative.io/", img: educativeLogo, alt: "Educative", color: "#9d44c0" },
                            { link: "https://www.teqip.in/", img: teqipLogo, alt: "TEQIP", color: "#0384fc" },
                            { link: "https://www.microsoft.com/", img: microsoftLogo, alt: "Microsoft Azure", color: "#5FA6FF" },
                            { link: "https://reskilll.com/", img: reskilllLogo, alt: "Reskilll", color: "#ec53b0" },
                            { link: "https://devfolio.co/", img: devfolioLogo, alt: "Devfolio", color: "#5FA6FF" },
                            { link: "https://ethindia.co/", img: ethIndiaLogo, alt: "ETHIndia", color: "#9d44c0", darkBg: true },
                            { link: "https://devtown.in/", img: devtownLogo, alt: "DevTown", color: "#e29b29" },
                            { link: "https://technix.in/", img: technixLogo, alt: "TechNix", color: "#0384fc" },
                            { link: "https://www.amul.com/", img: amulLogo, alt: "Amul", color: "#e29b29" },
                            { link: "https://mayadataprivacy.com/", img: mayaLogo, alt: "Maya Data Privacy", color: "#9d44c0", darkBg: true },
                        ].map((sponsor, i) => (
                            <Link
                                key={i}
                                to={sponsor.link}
                                target="_blank"
                                className="group relative flex items-center justify-center
                                    w-full h-[12vw]
                                    sm:h-[9vw]
                                    md:h-[7vw]
                                    lg:h-[6vw]
                                    xl:h-[80px]
                                    transition-all duration-200 hover:scale-105 hover:-translate-y-1"
                                style={{
                                    border: `2px dashed ${sponsor.color}`,
                                    background: 'linear-gradient(160deg, #060c4a 0%, #040842 60%, #080d3a 100%)',
                                    boxShadow: `0 0 4px ${sponsor.color}55`,
                                    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.boxShadow = `0 0 18px ${sponsor.color}99, inset 0 0 10px ${sponsor.color}22`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.boxShadow = `0 0 6px ${sponsor.color}55`;
                                }}
                            >
                                {/* Inner card body */}
                                <div
                                    className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
                                >
                                    {/* Scanline texture */}
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
                                        style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 4px)' }}
                                    />

                                    {/* Pixel tick marks on edges */}
                                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#ec53b0] opacity-60" />
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#ec53b0] opacity-60" />
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] bg-[#9d44c0] opacity-60" />
                                    <span className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-[2px] bg-[#9d44c0] opacity-60" />

                                    {/* Logo panel — dark bg for white-text logos */}
                                    <div className={`flex items-center justify-center w-[88%] h-[72%] rounded-sm px-2 py-1 ${sponsor.darkBg ? 'bg-[#111827]' : 'bg-white'}`}>
                                        <img
                                            src={sponsor.img}
                                            alt={sponsor.alt}
                                            className={`max-w-full max-h-full w-auto h-auto object-contain ${sponsor.alt === "Microsoft Azure" ? "scale-[2.5]" : ""}`}
                                            style={{ imageRendering: 'crisp-edges' }}
                                        />
                                    </div>

                                    {/* Sponsor name label */}
                                    <p className="font-vt323 text-[8px] sm:text-[9px] tracking-widest mt-1 opacity-0 group-hover:opacity-70 transition-opacity duration-200"
                                        style={{ color: '#ec53b0' }}>
                                        {sponsor.alt.toUpperCase()}
                                    </p>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>


            </div>
            <div
                className="absolute h-screen top-[99%] object-cover opacity-70 inset-0"
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundPosition: `${50}% ${50 + bgPosition.y}%`,
                    backgroundSize: bgSize,
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
        </section>
    )
}

export default PastSponsors;


