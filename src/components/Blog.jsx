import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom'


import logo from "../assets/logo.svg"
import Shape from "../assets/Shape.svg"
import jonson from "../assets/jonson.svg"
import hotel1 from "../assets/hotel1.png"
import Shapes from "../assets/Shapes.svg"
import jasele from "../assets/jasele.svg"
import abakas from "../assets/abakas.svg"
import covorking from "../assets/covorking.png"
import art from "../assets/art.png"
import dam from "../assets/dam.png"
import china from "../assets/china.png"
import koz from "../assets/koz.png"
import hp from "../assets/hp.png"
import lenovo from "../assets/lenovo.png"
import google from "../assets/google.png"
import jacobs from "../assets/jacobs.png"
import apple from "../assets/apple.png"
import exxe from "../assets/exxe.png"
import tekis from "../assets/tekis.png"
import exe from "../assets/exe.svg"
import chiziq from "../assets/chiziq.svg"
import black from "../assets/black.svg"
import facebook from "../assets/facebook.svg"
import qushcha from "../assets/qushcha.svg"
import insta from "../assets/insta.svg"
import linked from "../assets/linked.svg"


function Blog() {

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
                <section className="w-[1280px] h-[918px] ml-[160px] mt-[96px]">
                    <div className="flex gap-[141px]">
                        <div>
                            <img src={Shape} alt="Shape" />
                            <h4 className="text-[14px] font-[500] pt-[21px]">TRENDING</h4>
                            <h2 className="text-[48px] text-[#232536] font-[600] w-[550px] pt-[24px]">Breaking the code How did we build our Figma plugin </h2>
                            <p className="text-[16px] text-[#232536] font-[400] w-[570px] pt-[24px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
                            <Link to="/bginner" className="flex items-center gap-2 text-[#444CFC] font-[500] mt-[24px] hover:gap-4 transition-all duration-300">
                                Read More <span> <ArrowRightAltIcon /> </span>
                            </Link>

                            <div className="flex gap-[32px] mt-[44px]">
                                <div className="flex gap-[12px]">
                                    <img src={jonson} alt="jonson" />
                                    <h4 className="text-[#232536]">Andrew Jonson</h4>
                                </div>
                                <span>Posted on 27th January 2021</span>
                            </div>
                            <img src={hotel1} alt="hotel1" className="mt-[49px]" />
                        </div>
                        <div className="w-[515px] h-[738px] bg-[#FFDFC6]">
                            <img src={Shapes} alt="Shapes" className="ml-[466px]" />
                            <div className="ml-[72px]">
                                <h2 className="text-[24px] text-[#232536] font-[600] w-[366px]">Great design expectations prejudice in digital products in Next Year</h2>
                                <div className="mt-[16px] flex gap-[12px]">
                                    <img src={jonson} alt="jonson" />
                                    <div>
                                        <p>Andrew Jonson</p>
                                        <p>Jan 19, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-[72px] mt-[48px]">
                                <h2 className="text-[24px] text-[#232536] font-[600] w-[366px]">Great design expectations prejudice in digital products in Next Year</h2>
                                <div className="mt-[16px] flex gap-[12px]">
                                    <img src={jasele} alt="jasele" />
                                    <div>
                                        <p>Mathew Jasele</p>
                                        <p>Jan 19, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-[72px] mt-[48px]">
                                <h2 className="text-[24px] text-[#232536] font-[600] w-[366px]">Great design expectations prejudice in digital products in Next Year</h2>
                                <div className="mt-[16px] flex gap-[12px]">
                                    <img src={abakas} alt="abakas" />
                                    <div>
                                        <p>Hussen Abakas</p>
                                        <p>Jan 19, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='w-[1280px] h-[650px] mt-[96px] ml-[160px]'>
                    <h2 className='text-[48px] text-[#232536] font-[600]'>Read Recent Post</h2>

                    <div className='mt-[64px] flex gap-[32px]'>
                        <div className='w-[624px] h-[248px] bg-[#F9F9FF] flex'>
                            <img src={covorking} alt="covorking" />
                            <div className='flex flex-col'>
                                <h2 className='text-[24px] text-[#232536] font-[600] p-[32px]'>Today’s best design trends for digital products</h2>
                                <div className='flex ml-[32px] gap-[5px]'>
                                    <img src={jonson} alt="jonson" />
                                    <div>
                                        <h4 className="text-[#232536]">Andrew Jonson</h4>
                                        <span>Jan 19, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[624px] h-[248px] bg-[#F9F9FF] flex'>
                            <img src={art} alt="art" />
                            <div className='flex flex-col'>
                                <h2 className='text-[24px] text-[#232536] font-[600] p-[32px]'>Today’s best design trends for digital products</h2>
                                <div className='flex ml-[32px] gap-[5px]'>
                                    <img src={jonson} alt="jonson" />
                                    <div>
                                        <h4 className="text-[#232536]">Andrew Jonson</h4>
                                        <span>Jan 19, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[64px] flex gap-[32px]'>
                        <div className='w-[624px] h-[248px] bg-[#F9F9FF] flex'>
                            <img src={dam} alt="dam" />
                            <div className='flex flex-col'>
                                <h2 className='text-[24px] text-[#232536] font-[600] p-[32px]'>Today’s best design trends for digital products</h2>
                                <div className='flex ml-[32px] gap-[5px]'>
                                    <img src={jonson} alt="jonson" />
                                    <div>
                                        <h4 className="text-[#232536]">Andrew Jonson</h4>
                                        <span>Jan 19, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[624px] h-[248px] bg-[#F9F9FF] flex'>
                            <img src={china} alt="china" />
                            <div className='flex flex-col'>
                                <h2 className='text-[24px] text-[#232536] font-[600] p-[32px]'>Today’s best design trends for digital products</h2>
                                <div className='flex ml-[32px] gap-[5px]'>
                                    <img src={jonson} alt="jonson" />
                                    <div>
                                        <h4 className="text-[#232536]">Andrew Jonson</h4>
                                        <span>Jan 19, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='w-[1600px] h-[1530px] bg-[#F9F9F9] mt-[96px]'>
                    <h2 className='text-[48px] text-[#232536] font-[600] ml-[160px] pt-[96px]'>All posts</h2>
                    <div className='flex gap-[32px]'>
                        <div>
                            <div className='w-[405px] h-[592px] bg-white ml-[160px] mt-[64px]'>
                                <img src={koz} alt="koz" />
                                <h4 className='text-[24px] text-[#232536] font-[600] w-[341px] pl-[32px] pt-[32px]'>We aim to attain the greatest satisfaction for our clients </h4>
                                <p className='text-[16px] text-[#232536] font-[400] w-[341px] pl-[32px] pt-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                <div className='flex ml-[32px] gap-[5px] pt-[24px]'>
                                    <img src={jonson} alt="jonson" />
                                    <div>
                                        <h4 className="text-[#232536]">Andrew Jonson</h4>
                                        <span>Jan 19, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='w-[405px] h-[592px] bg-white mt-[64px]'>
                                <img src={hp} alt="hp" />
                                <h4 className='text-[24px] text-[#232536] font-[600] w-[341px] pl-[32px] pt-[32px]'>We aim to attain the greatest satisfaction for our clients </h4>
                                <p className='text-[16px] text-[#232536] font-[400] w-[341px] pl-[32px] pt-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                <div className='flex ml-[32px] gap-[5px] pt-[24px]'>
                                    <img src={jonson} alt="jonson" />
                                    <div>
                                        <h4 className="text-[#232536]">Andrew Jonson</h4>
                                        <span>Jan 19, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='w-[405px] h-[592px] bg-white mt-[64px]'>
                                <img src={lenovo} alt="lenovo" />
                                <h4 className='text-[24px] text-[#232536] font-[600] w-[341px] pl-[32px] pt-[32px]'>We aim to attain the greatest satisfaction for our clients </h4>
                                <p className='text-[16px] text-[#232536] font-[400] w-[341px] pl-[32px] pt-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                <div className='flex ml-[32px] gap-[5px] pt-[24px]'>
                                    <img src={jonson} alt="jonson" />
                                    <div>
                                        <h4 className="text-[#232536]">Andrew Jonson</h4>
                                        <span>Jan 19, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[32px] pt-[32px]'>
                        <div>
                            <div className='w-[405px] h-[592px] bg-white ml-[160px]'>
                                <img src={google} alt="google" />
                                <h4 className='text-[24px] text-[#232536] font-[600] w-[341px] pl-[32px] pt-[32px]'>We aim to attain the greatest satisfaction for our clients </h4>
                                <p className='text-[16px] text-[#232536] font-[400] w-[341px] pl-[32px] pt-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                <div className='flex ml-[32px] gap-[5px] pt-[24px]'>
                                    <img src={jonson} alt="jonson" />
                                    <div>
                                        <h4 className="text-[#232536]">Andrew Jonson</h4>
                                        <span>Jan 19, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='w-[405px] h-[592px] bg-white'>
                                <img src={jacobs} alt="jacobs" />
                                <h4 className='text-[24px] text-[#232536] font-[600] w-[341px] pl-[32px] pt-[32px]'>We aim to attain the greatest satisfaction for our clients </h4>
                                <p className='text-[16px] text-[#232536] font-[400] w-[341px] pl-[32px] pt-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                <div className='flex ml-[32px] gap-[5px] pt-[24px]'>
                                    <img src={jonson} alt="jonson" />
                                    <div>
                                        <h4 className="text-[#232536]">Andrew Jonson</h4>
                                        <span>Jan 19, 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='w-[405px] h-[592px] bg-white'>
                                <img src={apple} alt="apple" />
                                <h4 className='text-[24px] text-[#232536] font-[600] w-[341px] pl-[32px] pt-[32px]'>We aim to attain the greatest satisfaction for our clients </h4>
                                <p className='text-[16px] text-[#232536] font-[400] w-[341px] pl-[32px] pt-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                                <div className='flex ml-[32px] gap-[5px] pt-[24px]'>
                                    <img src={jonson} alt="jonson" />
                                    <div>
                                        <h4 className="text-[#232536]">Andrew Jonson</h4>
                                        <span>Jan 19, 2021</span>
                                    </div>
                                </div>
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

export default Blog