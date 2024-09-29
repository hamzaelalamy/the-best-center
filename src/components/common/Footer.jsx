import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="mt-8 pb-6 border bg-[white] text-black">
            <div className="flex flex-col items-start justify-between p-6 mx-4 lg:flex-row lg:p-0 lg:mx-20">
                <div className="flex justify-center w-full mt-10 lg:justify-start lg:mt-6 lg:w-auto">
                    <a href="#"><img src={"https://res.cloudinary.com/dwtsxzrly/image/upload/v1726603951/the_best_logoss_u7mdba.png"} alt="Logo" className="w-20 h-20" /></a>
                </div>
                <div className="flex flex-col items-center w-full pt-6 lg:items-end lg:mt-6 lg:w-auto">


                    <div className="flex justify-center mt-4 space-x-4 lg:justify-end">
                        <a href="https://linkedin.com">
                            <FaLinkedinIn className="text-xl hover:text-[#662483] hover:scale-150 cursor-pointer" />
                        </a>
                        <a href="https://instagram.com">
                            <FaInstagram className="text-xl hover:text-[#662483] hover:scale-150 cursor-pointer" />
                        </a>
                        <a href="https://youtube.com">
                            <FaYoutube className="text-xl hover:text-[#662483] hover:scale-150 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>

            <hr className="mx-4 my-6 mb-1 border-gray-600 lg:mx-20" />

            <div className="flex flex-col justify-between m-12 md:mx-4 md:text-center lg:flex-row lg:text-left lg:mx-20 xs:text-left ">
                <div className="mt-8 ">
                    <h2 className="text-xl font-bold">Pages Utiles</h2>
                    <ul>
                        <li className="mt-3"><a href="/ServicesAZHub" className="group relative inline-block text-black hover:text-[#662483]">Services <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#662483] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span></a></li>
                        <li className="mt-3"><a href="#" className="group relative inline-block text-black hover:text-[#662483]">Nous rejoindre <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#662483] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span></a></li>
                        <li className="mt-3"><a href="#" className="group relative inline-block text-black hover:text-[#662483]">Demander un devis <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#662483] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span></a></li>
                        <li className="mt-3"><a href="#" className="group relative inline-block text-black hover:text-[#662483]">FAQ <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#662483] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span></a></li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="font-bold">Paramètres de confidentialité</h2>
                    <ul>
                        <li className="mt-3"><a href="#" className="group relative inline-block text-black hover:text-[#662483]">Paramétres de cookies <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#662483] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span></a></li>
                        <li className="mt-3"><a href="#" className="group relative inline-block text-black hover:text-[#662483]">Mentions légales <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#662483] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span></a></li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="font-bold">Blog</h2>
                    <ul>
                        <li className="mt-3"><a href="#" className="group relative inline-block text-black hover:text-[#662483]">Nos actualités <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#662483] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span></a></li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="font-bold">Contact</h2>
                    <ul>
                        <li className="mt-3"><a href="#" className="group relative inline-block text-black hover:text-[#662483]">thebestcenter19@gmail.com <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#662483] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span></a></li>
                        <li className="mt-3"><a href="#" className="group relative inline-block text-black hover:text-[#662483]">01 83 62 40 85 <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#662483] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span></a></li>
                        <li className="mt-3"><a href="#" className="group relative inline-block text-black hover:text-[#662483]">AV Alazhar résidence Idris Al Azhar n°30 , Salé <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-[#662483] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;