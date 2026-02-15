import React, { useState, useEffect } from 'react';
import stars from '../../assets/images/discord/stars.svg';
import win1 from '../../assets/images/prizes/win1.png';
import win2 from '../../assets/images/prizes/win2.png';
import win3 from '../../assets/images/prizes/win3.png';
import small_trophy from '../../assets/images/prizes/small_trpohy.png'

const Prizes = () => {
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 10; // Adjust the multiplier for sensitivity
            const y = (e.clientY / innerHeight - 0.5) * 10; // Adjust the multiplier for sensitivity
            setBgPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            id='prizes'
            className="pt-[30px] md:pt-[80px] relative px-5 bg-no-repeat"
            style={{
                backgroundImage: `url(${stars})`,
                backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
                backgroundSize: 'cover',
            }}
        >
            {/* <img
                src={prizesbg}
                alt=""
                className="absolute w-full h-full object-cover top-0 left-0"
                style={{ clipPath: 'inset(0 0 -10px 0)' }} // Adjust this as needed to leave space at the bottom
            /> */}
            <div className='text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto z-2'>

                <h1 className="py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]">
                    $ vi <span className="text-white">PRIZES</span>.yml
                </h1>
                <div className="flex justify-center items-center h-full">
                    <div className="px-4 sm:p-10 text-left w-[90vw] sm:w-[80vw] mx-auto">
                        {/* Main Rectangle */}
                        <div className="flex justify-between border-[6px] max-lg:border-4 border-dashed border-[#0384fc] w-full h-auto mb-4 overflow-hidden">
                            <div className="flex items-center">
                                {/* Text on the left side */}
                                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  whitespace-nowrap lg:p-10 sm:pl-4 pl-1 tracking-wide">
                                    <h2>&nbsp;FIRST PRIZE</h2>
                                    <h2 className=' sm:pl-6 pl-2'><span className="text-blue-500">&#8377;</span>25000{/*<span className='text-gray-300'>*</span>*/}</h2>
                                    {/*<h3 className='max-lg:hidden sm:pl-6 pl-1 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-wrap max-w-[80%]'>*Inclusive of &#8377;35000 cash + other swags and sponsor benefits</h3>*/}
                                </h1>
                            </div>
                            <div className="flex items-end h-full">
                                {/* Image container */}
                                <div className="relative w-full h-full flex px-2 pt-2">
                                    <img src={win1} alt="Image 1" />
                                </div>
                            </div>
                        </div>

                        {/* Two Rectangles Below Main */}
                        <div className="flex flex-col xs:flex-row w-full justify-between mb-4 xl:mb-0 gap-2">
                            <div className="flex justify-between border-[6px] max-lg:border-4 border-dashed border-purple w-full h-auto mb-4 lg:py-4 2xl-py-8 overflow-hidden">
                                <div className="flex items-center w-fit">
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  whitespace-nowrap p-2 pl-1 tracking-wide">
                                        <h2 className='w-fit'>&nbsp;SECOND PRIZE</h2>
                                        <h2 className=' sm:pl-6 pl-2 w-fit'><span className="text-purple">&#8377;</span>15000</h2>
                                    </h1>
                                </div>
                                <div className="flex items-end h-24 xs:h-auto">
                                    {/* Image container */}
                                    <div className="relative w-full h-full flex px-2 pt-2">
                                        <img src={win2} alt="Image 2" className="object-contain h-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between border-[6px] max-lg:border-4 border-dashed border-purple w-full h-auto mb-4 lg:py-4 2xl:py-8 overflow-hidden">
                                <div className="flex items-center">
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap lg:p-2 pl-1 tracking-wide">
                                        <h2>&nbsp;THIRD PRIZE</h2>
                                        <h2 className=' sm:pl-6 pl-2'><span className="text-purple">&#8377;</span>10000</h2>
                                    </h1>
                                </div>
                                <div className="flex items-end h-24 xs:h-auto">
                                    {/* Image container */}
                                    <div className="relative w-full h-full flex px-2 pt-2">
                                        <img src={win3} alt="Image 3" className="object-contain h-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Two Thin Rectangles Below */}
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex-1 mb-4 flex flex-col transition-all duration-300">
                                <div className='text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>:/Check out our <a className='text-gray-400 hover:text-white' href='add prize link'>devfolio page</a> for the detailed track prize details.</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}

export default Prizes;
