import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'


const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

import logo from "../assets/logo.svg"
import exe from "../assets/exe.svg"
import Shapes from "../assets/Shapes.svg"
import chiziq from "../assets/chiziq.svg"
import exxe from "../assets/exxe.png"
import tekis from "../assets/tekis.png"
import black from "../assets/black.svg"
import facebook from "../assets/facebook.svg"
import qushcha from "../assets/qushcha.svg"
import insta from "../assets/insta.svg"
import linked from "../assets/linked.svg"



function Inner() {
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
                <section className="w-[1061px] h-[324px] m-auto mt-[96px] flex gap-[56px]">
                    <div>
                        <h3 className="text-[14px] text-[#232536] font-[500]">CAREER AT Ether</h3>
                        <h2 className="text-[48px] text-[#232536] font-[600] pt-[24px]">Full Stack Developer</h2>
                        <p className="text-[16px] text-[#232536] font-[400] w-[410px] pt-[16px]">Through True Rich Attended does no end it his mother since real had half every him case in packages.</p>
                        <button className="w-[182px] h-[64px] bg-[#444CFC] text-white pt-[20px] mt-[40px]">Apply Now <ArrowRightAltIcon /> <img src={exe} alt="exe" className="relative top-[-47px]" /> </button>
                    </div>
                    <div className="w-[515px] h-[324px] bg-[#FFE0C7]">
                        <img src={Shapes} alt="Shapes" className="ml-[467px]" />
                        <h2 className="text-[24px] text-[#232536] font-[600] pl-[80px]">Job Description</h2>
                        <p className="text-[16px] font-[400] pt-[24px] pl-[80px]">Remote, India , 4 to 5 Years Of Experience</p>
                        <p className="text-[16px] font-[400] pt-[16px] pl-[80px]">Department: Product Engineering</p>
                        <p className="text-[16px] font-[400] pt-[16px] pl-[80px]">Full Time 5 Position Available.</p>
                    </div>
                </section>

                <section className="w-[1280px] h-[784px] bg-[#ECF8F9] m-auto mt-[96px]">
                    <div className="bg-[#ECF8F9] min-h-screen px-16 py-10">

                        <div>
                            <input type="radio" name="tab" id="details" className="hidden" defaultChecked />
                            <input type="radio" name="tab" id="requirements" className="hidden" />
                            <input type="radio" name="tab" id="responsibilities" className="hidden" />

                            <div className="flex gap-[90px] border-b border-gray-300  text-center">
                                <label htmlFor="details" className="cursor-pointer pb-[10px] font-[500] hover:text-blue-600">
                                    Details
                                </label>
                                <label htmlFor="requirements" className="cursor-pointer pb-[10px] font-[500] hover:text-blue-600">
                                    Requirements
                                </label>
                                <label htmlFor="responsibilities" className="cursor-pointer pb-[10px] font-[500] hover:text-blue-600">
                                    Responsibilities
                                </label>

                            </div>

                            <div className='w-[842px] h-480px] m-auto pt-[96px]'>
                                <div className="hidden [input#details:checked~div_&]:block">
                                    <ul className="list-disc pl-[20px] space-y-4 text-gray-700">
                                        <li className=''>Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).</li>
                                        <li>Design & Create highly engaging industry-related content in both photo, gif & video format</li>
                                        <li>Publish Posts on various social media channels</li>
                                        <li>Promote content on social networks and monitor engagement (e.g. comments and shares)</li>
                                        <li>Research industry-related topics</li>
                                        <li>Editing audio and sound design on projects</li>
                                        <li>Engage in opportunities to develop original content and concepts for web and mobile</li>
                                        <li>Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.</li>
                                        <li>Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels</li>
                                    </ul>
                                </div>

                                <div className="hidden [input#requirements:checked~div_&]:block">
                                    <ul className="list-disc pl-6 space-y-4 text-gray-700">
                                        <li>Bachelor's degree in Marketing, Communications or related field</li>
                                        <li>2+ years of experience in social media management</li>
                                        <li>Strong knowledge of social media platforms and best practices</li>
                                        <li>Experience with content creation tools and software</li>
                                        <li>Excellent written and verbal communication skills</li>
                                    </ul>
                                </div>

                                <div className="hidden [input#responsibilities:checked~div_&]:block">
                                    <ul className="list-disc pl-6 space-y-4 text-gray-700">
                                        <li>Develop and implement social media strategy</li>
                                        <li>Create and manage content calendar</li>
                                        <li>Monitor and respond to audience engagement</li>
                                        <li>Analyze performance metrics and prepare reports</li>
                                        <li>Collaborate with marketing and design teams</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className='w-[1280px] h-[748px] m-auto mt-[96px]'>
                    <h2 className='text-[36px] text-[#232536 font-[600]'>Apply Now</h2>
                    <div className='flex gap-[32px] pt-[29px]'>
                        <input type="text" placeholder='First Name' className='w-[654px] h-[96px] bg-[#F9F9FF] p-[30px]' />
                        <input type="text" placeholder='Last Name' className='w-[654px] h-[96px] bg-[#F9F9FF] p-[30px]' />
                    </div>
                    <div className='flex gap-[32px] pt-[32px]'>
                        <input type="e-mail" placeholder='Email Id' className='w-[654px] h-[96px] bg-[#F9F9FF] p-[30px]' />
                        <input type="phone" placeholder='Mobile No' className='w-[654px] h-[96px] bg-[#F9F9FF] p-[30px]' />
                    </div>
                    <input type="text" placeholder='Why do you thing you are good fit for Ether?' className='w-[1280px] h-[225px] bg-[#D2DAED2B] pl-[40px] mt-[32px]' />
                </section>

                <p className='w-[800px] ml-[130px]'><Checkbox {...label} defaultChecked /> I agree to accept the privacy policy,  We will add your contact details provided in this form to our system for contacting you regarding your request. </p>

                <button className="w-[251px] h-[64px] bg-[#444CFC] text-white pt-[20px] mt-[40px] ml-[130px]">Submit Application <ArrowRightAltIcon /> <img src={exe} alt="exe" className="relative top-[-47px]" /> </button>

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

export default Inner