import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import logo from "../assets/logo.svg"
import Shapes from "../assets/Shapes.svg"
import carrers from "../assets/carrers.png"
import BG from "../assets/BG.png"
import smile from "../assets/smile.png"
import clock from "../assets/clock.png"
import home from "../assets/home.png"
import happy from "../assets/happy.png"
import money from "../assets/money.png"
import muscle from "../assets/muscle.png"
import exxe from "../assets/exxe.png"
import tekis from "../assets/tekis.png"
import exe from "../assets/exe.svg"
import chiziq from "../assets/chiziq.svg"
import black from "../assets/black.svg"
import facebook from "../assets/facebook.svg"
import qushcha from "../assets/qushcha.svg"
import insta from "../assets/insta.svg"
import linked from "../assets/linked.svg"





function Career() {

    return (
        <div>
            <nav className="w-[1600px] h-[80px] flex bg-black justify-between pl-[100px] pr-[160px] flex gap-[460px]">
                <img src={logo} alt="logo" className="p-[25px]" />
                <ul className="text-white flex gap-[32px] pt-[28px] ">
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
                <section className="w-[1200px] h-[697px] m-auto mt-[96px]">
                    <h4 className="text-center text-[14px] text-[#232536] font-[500]">CAREER AT FINSWEET</h4>
                    <img src={Shapes} alt="Shapes" className="flex justify-self-end mt-[-24px]" />
                    <h2 className="text-[48px] text-[#232536] font-[600] w-[624px] m-auto text-center">We hired people who are Always Passionate about what they do</h2>
                    <p className="text-[16px] text-[#232536] font-[400] w-[624px] m-auto text-center pt-[24px]">
                        Through True Rich Attended does no end it his mother since real had
                        half every him case in packages enquire we up ecstatic unsatiable saw .
                    </p>
                    <img src={carrers} alt="carrers" className="pt-[64px]" />
                    <h4 className="text-[18px] text-[#232536] font-[500] text-center pt-[80px]">See Our open positions </h4>
                    <span className="ml-[580px] mt-[16px]">👇</span>
                </section>

                <section className="w-[1280px] h-[949px] bg-[#ECF8F9] m-auto mt-[96px]">
                    <div className="p-16">
                        <div className="grid grid-cols-3 gap-[32px] max-w-[1100px] p-[40px] mx-auto">

                            <div className="bg-white p-[48px] flex flex-col gap-[32px]">
                                <div>
                                    <h3 className="text-[16px] font-[600] text-[#232536] mb-[10px]">Full Stack Developer</h3>
                                    <p className="text-[#232536] text-[16px]">Bengaluru · Full Time</p>
                                    <p className="text-[#232536] text-[16px]">$10K – $18K · No equity</p>
                                </div>
                                <Link to="/inner" className="flex items-center gap-2 text-blue-600 font-medium mt-auto hover:gap-4 transition-all duration-300">
                                    Apply Now <span> <ArrowRightAltIcon /> </span>
                                </Link>
                            </div>

                            <div className="bg-white p-[48px] flex flex-col gap-[32px]">
                                <div>
                                    <h3 className="text-[16px] font-[600] text-[#232536] mb-[10px]">Testing Engineer</h3>
                                    <p className="text-[#232536] text-[16px]">Remote · Full Time</p>
                                    <p className="text-[#232536] text-[16px]">$08K – $10K · No equity</p>
                                </div>
                                <Link to="/inner" className="flex items-center gap-2 text-blue-600 font-medium mt-auto hover:gap-4 transition-all duration-300">
                                    Apply Now <span> <ArrowRightAltIcon /> </span>
                                </Link>
                            </div>

                            <div className="bg-white p-[48px] flex flex-col gap-[32px]">
                                <div>
                                    <h3 className="text-[16px] font-[600] text-[#232536] mb-[10px]">Hr Manager</h3>
                                    <p className="text-[#232536] text-[16px]">Mumbai · Fultime</p>
                                    <p className="text-[#232536] text-[16px]">$08K – $10K · 4 to 5 Yrs Exp</p>
                                </div>
                                <Link to="/inner" className="flex items-center gap-2 text-blue-600 font-medium mt-auto hover:gap-4 transition-all duration-300">
                                    Apply Now <span> <ArrowRightAltIcon /> </span>
                                </Link>
                            </div>

                            <div className="bg-white p-[48px] flex flex-col gap-[32px]">
                                <div>
                                    <h3 className="text-[16px] font-[600] text-[#232536] mb-[10px]">Product Designer</h3>
                                    <p className="text-[#232536] text-[16px]">Mumbai · Fultime</p>
                                    <p className="text-[#232536] text-[16px]">$08K – $10K · 4 to 5 Yrs Exp</p>
                                </div>
                                <Link to="/inner" className="flex items-center gap-2 text-blue-600 font-medium mt-auto hover:gap-4 transition-all duration-300">
                                    Apply Now <span> <ArrowRightAltIcon /> </span>
                                </Link>
                            </div>

                            <div className="bg-white p-[48px] flex flex-col gap-[32px]">
                                <div>
                                    <h3 className="text-[16px] font-[600] text-[#232536] mb-[10px]">Wordpress Developer</h3>
                                    <p className="text-[#232536] text-[16px]">Mumbai, Full Time</p>
                                    <p className="text-[#232536] text-[16px]">$08K – $10K · 4 to 5 Yrs Exp</p>
                                </div>
                                <Link to="/inner" className="flex items-center gap-2 text-blue-600 font-medium mt-auto hover:gap-4 transition-all duration-300">
                                    Apply Now <span> <ArrowRightAltIcon /> </span>
                                </Link>
                            </div>

                            <div className="bg-white p-[48px] flex flex-col gap-[32px]">
                                <div>
                                    <h3 className="text-[16px] font-[600] text-[#232536] mb-[10px]">Jr. QA Tester</h3>
                                    <p className="text-[#232536] text-[16px]">California, USA · Full Time</p>
                                    <p className="text-[#232536] text-[16px]">$14K – $23K · No equity</p>
                                </div>
                                <Link to="/inner" className="flex items-center gap-2 text-blue-600 font-medium mt-auto hover:gap-4 transition-all duration-300">
                                    Apply Now <span> <ArrowRightAltIcon /> </span>
                                </Link>
                            </div>

                            <div className="bg-white p-[48px] flex flex-col gap-[32px]">
                                <div>
                                    <h3 className="text-[16px] font-[600] text-[#232536] mb-[10px]">Sr. UX Designer</h3>
                                    <p className="text-[#232536] text-[16px]">California, USA · Full Time</p>
                                    <p className="text-[#232536] text-[16px]">$14K – $23K · No equity</p>
                                </div>
                                <Link to="/inner" className="flex items-center gap-2 text-blue-600 font-medium mt-auto hover:gap-4 transition-all duration-300">
                                    Apply Now <span> <ArrowRightAltIcon /> </span>
                                </Link>
                            </div>

                            <div className="bg-white p-[48px] flex flex-col gap-[32px]">
                                <div>
                                    <h3 className="text-[16px] font-[600] text-[#232536] mb-[10px]">Social Media Manager</h3>
                                    <p className="text-[#232536] text-[16px]">Kolkata, India · Fulltime</p>
                                    <p className="text-[#232536] text-[16px]">$5K – $6K · Fresher</p>
                                </div>
                                <Link to="/inner" className="flex items-center gap-2 text-blue-600 font-medium mt-auto hover:gap-4 transition-all duration-300">
                                    Apply Now <span> <ArrowRightAltIcon /> </span>
                                </Link>
                            </div>

                            <div className="bg-white p-[48px] flex flex-col gap-[32px]">
                                <div>
                                    <h3 className="text-[16px] font-[600] text-[#232536] mb-[10px]">Golang Developer</h3>
                                    <p className="text-[#232536] text-[16px]">Mumbai · Fultime</p>
                                    <p className="text-[#232536] text-[16px]">$08K – $10K · 4 to 5 Yrs Exp</p>
                                </div>
                                <Link to="/inner" className="flex items-center gap-2 text-blue-600 font-medium mt-auto hover:gap-4 transition-all duration-300">
                                    Apply Now <span> <ArrowRightAltIcon /> </span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="w-[1600px] h-[884px] bg-[#FAFAFC] mt-[96px]">
                    <h3 className="text-[14px] font-[500] pl-[162px] pt-[96px]">OUR WORK & CULTURE</h3>
                    <h2 className="text-[36px] text-[#232536] font-[600] w-[680px] pl-[162px] pt-[16px]">Come and join a team of highly skilled professionals.</h2>
                    <p className="text-[14px] text-[#232536] font-[400] w-[640px] pl-[162px] pt-[24px]">
                        Through True Rich Attended does no end it his mother since real had half
                        every him case in packages enquire we up ecstatic unsatiable saw his giving
                        Remain expense you position concluded.
                    </p>
                    <div>
                        <div className='flex gap-[13px] ml-[160px] mt-[64px]'>
                            <div className="w-[418px] h-[188px] bg-white p-[32px]">
                                <img src={BG} alt="BG" className="relative" />
                                <img src={smile} alt="smile" className="relative top-[-27px] left-[11px]" />
                                <h3 className='text-[16px] text-[#232536] font-[600] pb-[8px]'>Covid-19 insurance</h3>
                                <p className='text-[14px] text-[#232536] font-[400] w-[330px]'>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                            </div>
                            <div className="w-[418px] h-[188px] bg-white p-[32px]">
                                <img src={BG} alt="BG" className="relative" />
                                <img src={clock} alt="clock" className="relative top-[-27px] left-[11px]" />
                                <h3 className='text-[16px] text-[#232536] font-[600] pb-[8px]'>Flexible working time</h3>
                                <p className='text-[14px] text-[#232536] font-[400] w-[330px]'>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                            </div>
                            <div className="w-[418px] h-[188px] bg-white p-[32px]">
                                <img src={BG} alt="BG" className="relative" />
                                <img src={home} alt="home" className="relative top-[-27px] left-[11px]" />
                                <h3 className='text-[16px] text-[#232536] font-[600] pb-[8px]'>Work from home</h3>
                                <p className='text-[14px] text-[#232536] font-[400] w-[330px]'>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                            </div>
                        </div>
                        <div className='flex gap-[13px] ml-[160px] mt-[12px]'>
                            <div className="w-[418px] h-[188px] bg-white p-[32px]">
                                <img src={BG} alt="BG" className="relative" />
                                <img src={happy} alt="happy" className="relative top-[-27px] left-[13px]" />
                                <h3 className='text-[16px] text-[#232536] font-[600] pb-[8px]'>Covid-19 insurance</h3>
                                <p className='text-[14px] text-[#232536] font-[400] w-[330px]'>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                            </div>
                            <div className="w-[418px] h-[188px] bg-white p-[32px]">
                                <img src={BG} alt="BG" className="relative" />
                                <img src={money} alt="money" className="relative top-[-27px] left-[11px]" />
                                <h3 className='text-[16px] text-[#232536] font-[600] pb-[8px]'>Flexible working time</h3>
                                <p className='text-[14px] text-[#232536] font-[400] w-[330px]'>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                            </div>
                            <div className="w-[418px] h-[188px] bg-white p-[32px]">
                                <img src={BG} alt="BG" className="relative" />
                                <img src={muscle} alt="muscle" className="relative top-[-27px] left-[11px]" />
                                <h3 className='text-[16px] text-[#232536] font-[600] pb-[8px]'>Work from home</h3>
                                <p className='text-[14px] text-[#232536] font-[400] w-[330px]'>Through True Rich Attended does no end it his mother since real had halfdoes no end it</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-[1280px] ml-[160px] h-[333px] bg-[#666DFF] m-auto mt-[125px] flex">
                    <div>
                        <img src={exxe} alt="exxe" />
                        <div className="flex gap-[122px]">
                            <div className="pl-[96px]">
                                <h3 className="text-[14px] text-white font-[500] pb-[13px]">NEWSLETTER</h3>
                                <h2 className="text-[36px] text-white font-[600] w-[450px]">Subscribe our News Letter to get Latest Updates.</h2>
                            </div>
                            <input type="e-mail" placeholder="Paresh@Pixeto.com" className="w-[454px] h-[64px] bg-white mt-[60px] p-[25px]" />
                        </div>
                    </div>
                    <img src={tekis} alt="tekis" className='ml-[135px]' />
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

export default Career