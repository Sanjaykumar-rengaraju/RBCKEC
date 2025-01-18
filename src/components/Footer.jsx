import React from 'react';
import { FaInstagram, FaGoogle } from 'react-icons/fa';
import MapofMTS from './googlemap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='mx-auto py-16 px-4 flex flex-col lg:flex-row flex-wrap justify-evenly items-center relative footer'>
                {/* Contact Us Section */}
                <div className='col-span-2'>
                    <h1 className='w-full text-4xl md:text-6xl font-bold text-teal-400 glow-text sm:text-center'>Contact Us</h1>
                    <p className='py-4 font-bold text-4xl sm:text-3xl text-teal-400 glow-text sm:text-center'>Staff Coordinator</p>
                    <p className='font-mono text-teal-300 sm:text-center'>Dr. Thangarasu S.K - 9942783338</p>
                    <p className='font-mono text-teal-300 sm:text-center'>Dr. Tamilarasi T - 7418117655</p>
                    <p className='py-4 font-bold text-4xl sm:text-3xl text-teal-400 glow-text sm:text-center'>Student Coordinator</p>
                    <p className='font-mono text-teal-300 sm:text-center'>Mr. Santhosh C - 9538523011</p>
                    <p className='font-mono text-teal-300 sm:text-center'>Ms. Janu S - 9363315216</p>
                </div>

                {/* Social Media Section */}
                <div className='font-mono mt-12'>
                    <div>
                        <ul>
                            <a href='mailto:competitions.rbc.kec@gmail.com' rel="noopener noreferrer" target={"_blank"} className='hover:scale-105 transform transition-all duration-300'>
                                <li className='py-2 text-sm text-teal-300 hover:text-teal-400 sm:text-center'> 
                                    <FaGoogle size={30} className="inline-block" /> competitions.rbc.kec
                                </li>
                            </a>
                        </ul>
                        <br />
                        <ul>
                            <a href='https://www.instagram.com/robotics.club_kec/?igshid=YmMyMTA2M2Y%3D' rel="noopener noreferrer" target={"_blank"} className='hover:scale-105 transform transition-all duration-300'>
                                <li className='py-2 text-sm text-teal-300 hover:text-teal-400 sm:text-center'> 
                                    <FaInstagram size={30} className="inline-block" /> robotics.club_kec
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>

                {/* Map Section */}
                <div className='mt-16 sm:flex sm:justify-center'>
                    <MapofMTS />
                </div>
            </div>

            {/* Footer Maintenance Section */}
            <div className='max-w-[1240px] mx-auto py-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 relative mb-8'>
                <hr className='border-teal-400' />
                <div className='flex justify-center items-center'>
                    <p className='px-4'>Maintained By</p> 
                    <Link to='/' className='underline underline-offset-2 text-teal-400 glow-text'>
                        <p>Robotics Club</p>
                    </Link>
                </div>
                <hr className='border-teal-400' />
            </div>
        </>
    );
};

export default Footer;
