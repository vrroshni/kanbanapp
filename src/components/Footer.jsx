import {
    Ripple,
    initTE,
} from "tw-elements";
import React from 'react';
import data from './../data/data.json';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from 'react-icons/fa';
import './../styles/footer.css'

const SocialMediaLink = ({ link, icon }) => {
    return (
        <a
            href={link}
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        >
            {icon}
        </a>
    );
};

initTE({ Ripple })
const Footer = () => {
    return (

        <footer className="bg-neutral-900 rounded-xl text-center text-white">
            <div className=" pt-6">
            <h3 className="text-2xl font-semibold mb-4">My Portfolio Highlights</h3>
                <div className="grid grid-cols-3 gap-4 mb-6 md:grid-cols-3 lg:grid-cols-6 p-3">
                    {data.projects.map((project, index) => (
                        <div key={index} className="mb-6 lg:mb-0 project-card transform transition-transform hover:-rotate-3 cursor-pointer">
                            <img src={project.imageUrl} className="w-full rounded-md shadow-lg" alt={project.title} />
                            <div className="project-title bg-black bg-opacity-70 text-white p-2 font-semibold text-sm absolute  w-full transform transition-transform opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                                {project.title}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mb-6 flex justify-center">
                    {data.socialMediaLinks.map((linkData) => (
                        <SocialMediaLink
                            key={linkData.title}
                            link={linkData.link}
                            icon={React.createElement(eval(linkData.icon), { className: "mx-auto h-full w-4" })}
                        />
                    ))}
                </div>
            </div>

            <div
                className="p-4 text-center"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className="text-white" href="https://tailwind-elements.com/" >Tailwind Elements</a >
            </div>
        </footer>
    )
}

export default Footer