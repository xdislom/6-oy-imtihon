import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import facebook from '../assets/facebook.svg'
import qushcha from "../assets/qushcha.svg"
import insta from "../assets/insta.svg"
import logo from "../assets/logo.svg"
import hotel from "../assets/hotel.png"
import Fontana from "../assets/Fontana.png"
import Hagen from "../assets/Hagen.png"
import Strange from "../assets/Strange.png"
import Bryus from "../assets/Bryus.png"
import Melo from "../assets/Melo.jpg"
import Steve from "../assets/Steve.png"
import Itolo from "../assets/Itolo.png"
import Stark from "../assets/Stark.png"
import blueshape from "../assets/blueshape.svg"
import templete1 from "../assets/templete1.png"
import templete2 from "../assets/templete2.png"
import exe from "../assets/exe.svg"
import chiziq from "../assets/chiziq.svg"
import black from "../assets/black.svg"
import linked from "../assets/linked.svg"




function Templete() {

    const { state } = useLocation()


    return (
        <div>
            <nav className="w-[1600px] h-[80px] flex bg-black justify-between pl-[100px] pr-[160px] flex gap-[460px]">
                <img src={logo} alt="logo" className="p-[25px]" />
                <ul className="text-white flex gap-[32px] pt-[28px]">
                    <Link to="/" className="text-[16px] font-[500]">Company</Link>
                    <Link to="/career" className="text-[16px] font-[500]">Career</Link>
                    <Link to="/blog" className="text-[16px] font-[500]">Blog</Link>
                    <a href="#">
                        <li className="text-[16px] font-[500]">Contact us</li>
                    </a>
                    <a href="#">
                        <li className="text-[16px] font-[500]">Clone project</li>
                    </a>
                </ul>
            </nav>


            <main>
                <section className="flex flex-col items-center py-16">
                    <img src={state.img} alt={state.name} className="w-[320px] h-[320px] rounded-full object-cover mb-[42px]" />
                    <h2 className="text-[36px] text-[#232536] font-[600] mb-[8px]">{state.name}</h2>
                    <p className="text-[14px] text-[#232536] font-[500] mb-[24px]">{state.role}</p>
                    <p className="text-[16px] text-[#232536] font-[400] text-center max-w-[430px] mb-[32px]">
                        Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
                    </p>
                    <div className="flex gap-4">
                        <img src={facebook} alt="facebook" className="w-6 h-6 cursor-pointer" />
                        <img src={qushcha} alt="qushcha" className="w-6 h-6 cursor-pointer" />
                        <img src={insta} alt="insta" className="w-6 h-6 cursor-pointer" />
                    </div>
                </section>

                <section className="w-[1600px] h-[581px] bg-[#ECF8F9] mt-[96px]">
                    <img src={blueshape} alt="blueshape" className="ml-[160px] pt-[96px]" />
                    <h2 className="text-[48px] text-[#232536] font-[600] pt-[19px] pl-[160px]">Blog posts from {state?.name?.split(" ")[0]}</h2>

                    <div className='flex gap-[32px]'>
                        <div className="w-[624px] h-[248px] flex ml-[160px] mt-[48px]">
                            <img src={templete1} alt="templete1" />
                            <div className="bg-white">
                                <h4 className="text-[14px] text-[#232536] font-[500] pl-[32px] pt-[32px] pb-[8px]">Jan 19, 2021</h4>
                                <h2 className="text-[24px] text-[#232536] font-[600] pl-[32px] pr-[32px]">Today’s best design trends for digital products</h2>
                                <button className="flex items-center gap-2 text-[16px] text-[#444CFC] font-500 mt-[24px] pl-[32px] hover:gap-4 transition-all duration-300">
                                    Read More <span> <ArrowRightAltIcon /> </span>
                                </button>
                            </div>
                        </div>
                        <div className="w-[624px] h-[248px] flex mt-[48px]">
                            <img src={templete2} alt="templete2" />
                            <div className="bg-white">
                                <h4 className="text-[14px] text-[#232536] font-[500] pl-[32px] pt-[32px] pb-[8px]">Jan 19, 2021</h4>
                                <h2 className="text-[24px] text-[#232536] font-[600] pl-[32px] pr-[32px]">A practical guide to building a brand strategy</h2>
                                <button className="flex items-center gap-2 text-[16px] text-[#444CFC] font-500 mt-[24px] pl-[32px] hover:gap-4 transition-all duration-300">
                                    Read More <span> <ArrowRightAltIcon /> </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-[1280px] ml-[160px] h-[416px] m-auto mt-[96px] flex flex-col">
                    <div className="flex gap-[204px]">
                        <div>
                            <img src={exe} alt="exe" />
                            <h2 className="text-[48px] text-[#232536] font-[600] w-[452px] pt-[32px]">Let's make something special</h2>
                            <h3 className="text-[24px] text-[#232536] font-[600] pt-[42px]">Let's talk! 🤙 </h3>
                            <span className="text-[18px] text-[#232536] font-[500] pt-[28px]">020 7993 2905</span>
                            <h5 className="text-[18px] text-[#232536] font-[500] pt-[4px]">hi@finsweet.com</h5>
                            <hr className="w-[268px] mt-[14px]" />
                            <p className="text-[14px] text-[#232536] font-[500] w-[206px] pt-[16px]">DLF Cybercity, Bhubaneswar,  India, &52050</p>
                        </div>
                        <div className="flex gap-[60px]">
                            <ul className="text-[16px] text-[#232536] font-[600] mt-[100px] flex flex-col gap-[12px]">
                                <li>Home</li>
                                <li>Service</li>
                                <li>Company</li>
                                <li>Career </li>
                                <li>News</li>
                            </ul>
                            <ul className=" text-[14px] font-[600] text-[#232536] mt-[100px] flex flex-col gap-[12px]">
                                <li className="text-[16px] font-[600]">Service</li>
                                <li>Technical support</li>
                                <li>Testing</li>
                                <li>Development</li>
                                <li>AWS/Azure </li>
                                <li>Consulting</li>
                                <li>Information Technology</li>
                            </ul>
                            <ul className=" text-[14px] font-[600] text-[#232536] mt-[100px] flex flex-col gap-[12px]">
                                <li className="text-[16px] font-[600]">Resourses</li>
                                <li>About Us</li>
                                <li>Testimonial</li>
                                <Link to="/privacy" className="text-[14px] font-[600] text-[#232536]">Privacy Policy</Link>
                                <li>Terms of use</li>
                                <li>Blog</li>
                            </ul>

                        </div>
                    </div>
                    <div className="flex justify-self-end gap-[8px] ml-[1100px]">
                        <img src={chiziq} alt="chiziq" />
                        <h3>Contact Us</h3>
                    </div>
                </section>
            </main>

            <footer className="w-[1600px] h-[80px] bg-[#FFE6D2] mt-[64px] flex gap-[750px]">
                <div className="flex gap-[42px]">
                    <img src={black} alt="black" className="p-[25px] pl-[160px]" />
                    <h4 className="pt-[28px]">©2021 Finsweet</h4>
                </div>

                <div className="flex gap-[26px] p-[32px]">
                    <img src={facebook} alt="facebook" />
                    <img src={qushcha} alt="qushcha" />
                    <img src={insta} alt="insta" />
                    <img src={linked} alt="linked" />
                </div>
            </footer>
        </div>
    )
}

export default Templete