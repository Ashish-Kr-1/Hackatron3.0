import React, { useState, useEffect } from 'react';
import instaLogo from '../../assets/images/footer/insta_logo.png';
import twitterLogo from '../../assets/images/footer/twitter.svg';
import linkedinLogo from '../../assets/images/footer/linkedin_logo.png';
import discordLogo from '../../assets/images/footer/discord_logo.png';
import stars from '../../assets/images/footer/stars.svg';
import './Footer.css';
import footer from '../../assets/images/footer/footerNew.png';
import FallingLeaves from '../FallingLeaves';

function Footer() {
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 3; // Adjust the multiplier for sensitivity
            const y = (e.clientY / innerHeight - 0.5) * 3; // Adjust the multiplier for sensitivity
            setBgPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className='main-footer'>
                <div className='footer-container relative overflow-hidden'>
                    {/* Background Image */}
                    <img src={footer} alt="footer background" className='img-background relative z-0' />

                    {/* Falling Leaves Overlay - Above background, behind content */}
                    <div className="absolute inset-0 z-[5] pointer-events-none">
                        <FallingLeaves count={30} />
                    </div>

                    {/* Footer Details (Overlay) */}
                    <div id="upfooter" className='absolute top-0 left-0 w-full h-full z-10 flex flex-col'>
                        <div className="flex flex-col py-4 md:py-6 xl:py-10 gap-3 md:gap-5 justify-center items-center w-full h-full">
                            <div className="absolute inset-0 z-0"></div>
                            {/* 3 columns: stacked on mobile, side-by-side on desktop */}
                            <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center sm:items-start w-full gap-4 md:gap-5 z-10 px-4 md:px-10 mt-2 md:mt-4">
                                {/* ADDRESS */}
                                <div className="address footerelements text-center">
                                    <h1 className="footerheading m-0 text-heading-footer drop-shadow-md">
                                        ADDRESS
                                    </h1>
                                    <p className="footercontent addresscontent text-[#BEBEBE] hover:text-white mt-1 md:mt-2 drop-shadow-md leading-tight">
                                        <a href="https://www.google.com/maps/place/BIT+Sindri/@23.6546341,86.4688101,1020m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f696e95958a6d5:0x7c14e668e6f2feea!8m2!3d23.6546293!4d86.473681!16s%2Fm%2F0267xn8?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                            <span className="text-style-footer">A-26, Admin Building<br /></span>
                                            <span className="text-style-footer">BIT Sindri</span>
                                        </a>
                                    </p>
                                </div>
                                {/* RESOURCES */}
                                <div className="resources footerelements text-center">
                                    <h1 className="footerheading m-0 text-heading-footer drop-shadow-md">RESOURCES</h1>
                                    <div className="flex flex-col mt-1 md:mt-2 gap-1 md:gap-2">
                                        <a href="/brochure/Hackatron3.0.pdf" download="Hackatron3.0.pdf" className="footercontent resourcecontent text-[#BEBEBE] hover:text-white drop-shadow-md" target="_blank" rel="noopener noreferrer">
                                            Sponsorship Brochure
                                        </a>

                                    </div>
                                </div>
                                {/* STAY CONNECTED */}
                                <div className="social text-center">
                                    <h1 className="footerheading footerelements text-center m-0 mb-1 md:mb-2 text-heading-footer drop-shadow-md">
                                        STAY CONNECTED
                                    </h1>
                                    <div className="flex justify-center gap-5 md:gap-7 mt-1 md:mt-2">
                                        <a href="https://www.instagram.com/hnccbits?igsh=MXE5ZXcxOGFwMGplbA==" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                            <img className="sociallogos insta_logo brightness-0 invert-[1] hover:filter-none w-auto h-auto max-w-[22px] md:max-w-[28px] 3xl:max-w-[60px]" src={instaLogo} alt="insta_logo" />
                                        </a>
                                        <a href="https://x.com/hnccbits" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                            <img className="twitter_logo sociallogos brightness-0 invert-[1] hover:invert-[0.5] w-auto h-auto max-w-[22px] md:max-w-[28px] 3xl:max-w-[60px]" src={twitterLogo} alt="twitter_logo" />
                                        </a>
                                        <a href="https://www.linkedin.com/company/hnccbits/" target="_blank" rel="noopener noreferrer" className="relative hover:scale-110 transition-transform flex items-center justify-center">
                                            <img className="sociallogos linkedin_logo w-auto h-auto max-w-[22px] md:max-w-[28px] 3xl:max-w-[60px] peer z-10 brightness-0 invert-[1] hover:filter-none" src={linkedinLogo} alt="linkedin_logo" />
                                            <div className="w-[70%] h-[75%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 peer-hover:bg-white z-0"></div>
                                        </a>
                                    </div>

                                    {/* CONTACT DETAILS */}
                                    <h1 className="footerheading footerelements text-center m-0 mt-6 md:mt-8 mb-1 md:mb-2 text-heading-footer drop-shadow-md">
                                        CONTACT US
                                    </h1>
                                    <div className="flex flex-col mt-2 md:mt-3 gap-2">
                                        <div className="flex justify-center items-center gap-2 text-center">
                                            <span className="text-[#BEBEBE] text-sm md:text-base font-medium">Anshuman:</span>
                                            <a href="tel:+918409370501" className="text-[#00FF00] hover:text-white transition-colors text-xs md:text-sm font-mono">+91 84093 70501</a>
                                        </div>
                                        <div className="flex justify-center items-center gap-2 text-center">
                                            <span className="text-[#BEBEBE] text-sm md:text-base font-medium">Anuj:</span>
                                            <a href="tel:+916205811362" className="text-[#00FF00] hover:text-white transition-colors text-xs md:text-sm font-mono">+91 62058 11362</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Copyright Text */}
                        <div className="absolute bottom-0 left-0 w-full pb-1 md:pb-3 pointer-events-none text-center">
                            <h1 className="relative z-10 m-0 text-sm md:text-lg xl:text-xl 3xl:text-3xl text-bottom-footer drop-shadow-md text-white">© 2026 HnCC, BIT Sindri</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;
