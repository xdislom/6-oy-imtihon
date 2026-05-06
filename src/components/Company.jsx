import { Link } from 'react-router-dom'

import logo from "../assets/logo.svg"
import shape from "../assets/Shape.svg"
import Shapes from "../assets/Shapes.svg"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import blueshape from "../assets/blueshape.svg"
import liniya from "../assets/liniya.svg"
import logoipsum from "../assets/logoipsum.png"
import ipsum from "../assets/ipsum.png"
import li from "../assets/li.png"
import il from "../assets/il.png"
import searchi from "../assets/searchi.png"
import rocket from "../assets/rocket.svg"
import settings from "../assets/settings.svg"
import person from "../assets/person.svg"
import rainbow from "../assets/rainbow.svg"
import hotel from "../assets/hotel.png"
import Fontana from "../assets/Fontana.png"
import Hagen from "../assets/Hagen.png"
import Strange from "../assets/Strange.png"
import Bryus from "../assets/Bryus.png"
import Melo from "../assets/Melo.jpg"
import Steve from "../assets/Steve.png"
import Itolo from "../assets/Itolo.png"
import Stark from "../assets/Stark.png"
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import linkedIn from "../assets/linkedIn.svg"
import exxe from "../assets/exxe.png"
import tekis from "../assets/tekis.png"
import exe from "../assets/exe.svg"
import chiziq from "../assets/chiziq.svg"
import black from "../assets/black.svg"
import facebook from "../assets/facebook.svg"
import qushcha from "../assets/qushcha.svg"
import insta from "../assets/insta.svg"
import linked from "../assets/linked.svg"


function Company() {

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

            <header className="w-[1276px] h-[848px] m-auto mt-[96px] mb-[96px]">
                <div className="flex gap-[1192px]">
                    <img src={shape} alt="shape" />
                    <img src={Shapes} alt="Shapes" />
                </div>
                <h3 className="text-[14px] font-[500px] pt-[24px]">Company</h3>
                <h1 className="text-[48px] font-[600] text-[#232536] w-[664px] pt-[20px]">
                    Award-winning Company seen and used by millions around the world.
                </h1>
                <p className="text-[16px] font-[400] text-[#232536] w-[650px] pt-[24px] pb-[64px]">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized.
                </p>
                <div className="flex gap-[12px]">
                    <img src={image1} alt="image1" />
                    <img src={image2} alt="image2" />
                    <img src={image3} alt="image3" />
                </div>
            </header>

            <main>

                <section className="w-[1280px] h-[368px] m-auto pt-[96px]">
                    <div className="flex gap-[106px]">
                        <div>
                            <img src={blueshape} alt="blueshape" className="pb-[16px]" />
                            <h3 className="text-[16px] text-[#232536] font-[600] pb-[16px]">Our Story 👇 </h3>
                            <h2 className="text-[36px] text-[#232536] font-[600] w-[549px] pb-[24px]">From Startups to Titans of Industry</h2>
                            <p className="text-[16px] text-[#232536] font-[400] w-[500px]">
                                Through True Rich Attended does no end it his mother since favourable real had half every
                                him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay
                                produce excited perceived do an a china mean its so ye when in explained Hearts am next over
                                match mr partiality not shoud latter thus as out no passed forming middleton exercise up
                            </p>
                        </div>
                        <div className="w-[624px] h-[368px] bg-[#ffd3af]">
                            <div className="flex gap-[62px]">
                                <div className="pl-[110px] pt-[62px]">
                                    <span className="text-[36px] text-[#232536] font-[600]">1560+</span>
                                    <img src={liniya} alt="liniya" className="pt-[8px]" />
                                    <h3 className="text-[16px] text-[#232536] font-[600]">Project Delivered</h3>
                                </div>
                                <div className="pt-[62px]">
                                    <span className="text-[36px] text-[#232536] font-[600]">100+</span>
                                    <img src={liniya} alt="liniya" className="pt-[8px]" />
                                    <h3 className="text-[16px] text-[#232536] font-[600]">Professional</h3>
                                </div>
                            </div>
                            <div className="flex gap-[92px]">
                                <div className="pl-[110px] pt-[62px]">
                                    <span className="text-[36px] text-[#232536] font-[600]">950+</span>
                                    <img src={liniya} alt="liniya" className="pt-[8px]" />
                                    <h3 className="text-[16px] text-[#232536] font-[600]">Happy Client</h3>
                                </div>
                                <div className="pt-[62px]">
                                    <span className="text-[36px] text-[#232536] font-[600]">10 yrs</span>
                                    <img src={liniya} alt="liniya" className="pt-[8px]" />
                                    <h3 className="text-[16px] text-[#232536] font-[600]">Experience</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-[1280px] h-[106px] m-auto bg-[#FAFAFC] mt-[200px]">
                    <div className="w-[1061px] flex gap-[32px] pl-[110px]">
                        <img src={logoipsum} alt="logoipsum" />
                        <img src={ipsum} alt="ipsum" />
                        <img src={li} alt="li" />
                        <img src={il} alt="il" />
                        <img src={searchi} alt="searchi" />
                    </div>
                </section>

                <section className="w-[1600px] h-[660px] bg-[#ECF8F9] mt-[46px]">
                    <div className="flex gap-[141px]">
                        <div className="w-[780px] h-[364px] pt-[142px] pl-[160px]">
                            <h3 className="text-[14px] font-[500]">Our expertise</h3>
                            <h2 className="text-[48px] text-[#232536] font-[600]">
                                We want to get local identification in every
                                corner of the world in this era of global citizenship
                            </h2>
                            <p className="text-[16px] text-[#5D5F6D] font-[400] w-[550px] pt-[24px]">
                                Through True Rich Attended does no end it his mother since
                                real had half every him case in packages enquire we up ecstatic
                                unsatiable saw his giving Remain expense you position concluded.
                            </p>
                        </div>
                        <div className="mt-[96px]">
                            <img src={blueshape} alt="blueshape" />
                            <div className="w-[515px] h-[140px] flex gap-[16px] bg-white p-[32px]">
                                <div>
                                    <img src={rocket} alt="rocket" />
                                </div>
                                <div className="w-[290px]">
                                    <h2 className="text-[16px] font-[600]">On Time Delivery</h2>
                                    <p className="text-[14px] text-[#5D5F6D] font-[500]">Through True Rich Attended does no end it his mother since real had half every him.</p>
                                </div>
                            </div>
                            <div className="w-[515px] h-[140px] flex gap-[16px] bg-white p-[32px] mt-[12px]">
                                <div>
                                    <img src={settings} alt="settings" />
                                </div>
                                <div className="w-[290px]">
                                    <h2 className="text-[16px] font-[600]">Best Quality</h2>
                                    <p className="text-[14px] text-[#5D5F6D] font-[500]">Through True Rich Attended does no end it his mother since real had half every him.</p>
                                </div>
                            </div>
                            <div className="w-[515px] h-[140px] flex gap-[16px] bg-white p-[32px] mt-[12px]">
                                <div>
                                    <img src={person} alt="person" />
                                </div>
                                <div className="w-[290px]">
                                    <h2 className="text-[16px] font-[600]">Support Assist</h2>
                                    <p className="text-[14px] text-[#5D5F6D] font-[500]">Through True Rich Attended does no end it his mother since real had half every him.</p>
                                </div>
                            </div>
                            <img src={rainbow} alt="rainbow" />
                        </div>
                    </div>
                </section>

                <section className="w-[1200px] h-[727px] m-auto mt-[96px]">
                    <h3 className="text-[14px] font-[500]">Our VISION</h3>
                    <h2 className="text-[36px] text-[#232536] font-[600] w-[701px] pt-[16px]">We want to get local identification in every corner of the world in this era of global citizenship.</h2>
                    <p className="text-[16px] text-[#232536] font-[400] w-[550px] pt-[24px]">
                        Through True Rich Attended does no end it his mother since real
                        had half every him case in packages enquire we up ecstatic unsatiable
                        saw his giving Remain expense you position concluded.
                    </p>
                    <img src={hotel} alt="hotel" className="pt-[64px]" />
                </section>

                <section className="w-[1200px] h-[952px] m-auto pt-[96px]">
                    <h3 className="text-[14px] font-[500]">MEET OUR TEAM</h3>
                    <h2 className="text-[48px] text-[#232536] font-[600] w-[550px] pt-[16px]">Teamwork is the only way we work </h2>
                    <p className="text-[16px] text-[#232536] font-[400] w-[440px] pt-[24px]">
                        Through True Rich Attended does no end it his mother since real had half
                        every him case in packages enquire we up ecstatic unsatiable.
                    </p>

                    <div className="w-[1280px] pt-[64px]">
                        <div className="flex">
                            <Link to="/templete" state={{
                                name: "Jonny Fontana",
                                role: "Frontend Developer",
                                img: Fontana
                            }} className="relative flex-1 overflow-hidden cursor-pointer group">
                                <img src={Fontana} alt="Fontana" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-white font-bold text-lg">Jonny Fontana</p>
                                    <p className="text-slate-400 text-sm pt-[8px]">Frontend Developer</p>
                                    <div className="flex gap-[26px] pt-[24px]">
                                        <img src={twitter} alt="twitter" className="w-[30px]" />
                                        <img src={instagram} alt="instagram" className="w-[30px]" />
                                        <img src={linkedIn} alt="linkedIn" className="w-[30px] rounded-[3px]" />
                                    </div>
                                </div>
                            </Link>

                            <Link to="/templete" state={{
                                name: "James Hagen",
                                role: "Ai Developer",
                                img: Hagen
                            }} className="relative flex-1 overflow-hidden cursor-pointer group">
                                <img src={Hagen} alt="Hagen" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-white font-bold text-lg">James Hagen</p>
                                    <p className="text-slate-400 text-sm pt-[8px]">Ai Designer</p>
                                    <div className="flex gap-[26px] pt-[24px]">
                                        <img src={twitter} alt="twitter" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={instagram} alt="instagram" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={linkedIn} alt="linkedIn" className="flex items-center justify-center text-white text-sm w-[30px] rounded-[3px] hover:transition-colors"></img>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/templete" state={{
                                name: "Dr. Strange",
                                role: "Backend Developer",
                                img: Strange
                            }} className="relative flex-1 overflow-hidden cursor-pointer group">
                                <img src={Strange} alt="Strange" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-white font-bold text-lg">Dr. Strange</p>
                                    <p className="text-slate-400 text-sm pt-[8px]">Backend Developer</p>
                                    <div className="flex gap-[26px] pt-[24px]">
                                        <img src={twitter} alt="twitter" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={instagram} alt="instagram" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={linkedIn} alt="linkedIn" className="flex items-center justify-center text-white text-sm w-[30px] rounded-[3px] hover:transition-colors"></img>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/templete" state={{
                                name: "Bruce Wayne",
                                role: "Foundation Developer",
                                img: Bryus
                            }} className="relative flex-1 overflow-hidden cursor-pointer group">
                                <img src={Bryus} alt="Bryus" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-white font-bold text-lg">Bruce Wayne</p>
                                    <p className="text-slate-400 text-sm pt-[8px]">Foundation Developer</p>
                                    <div className="flex gap-[26px] pt-[24px]">
                                        <img src={twitter} alt="twitter" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={instagram} alt="instagram" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={linkedIn} alt="linkedIn" className="flex items-center justify-center text-white text-sm w-[30px] rounded-[3px] hover:transition-colors"></img>
                                    </div>
                                </div>
                            </Link>
                        </div>


                        <div className="flex">
                            <Link to="/templete" state={{
                                name: "Javena Melo",
                                role: "Support Teacher",
                                img: Melo
                            }} className="relative flex-1 overflow-hidden cursor-pointer group">
                                <img src={Melo} alt="Melo" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-white font-bold text-lg">Javena Melo</p>
                                    <p className="text-slate-400 text-sm pt-[8px]">Support Teacher</p>
                                    <div className="flex gap-[26px] pt-[24px]">
                                        <img src={twitter} alt="twitter" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={instagram} alt="instagram" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={linkedIn} alt="linkedIn" className="flex items-center justify-center text-white text-sm w-[30px] rounded-[3px] hover:transition-colors"></img>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/templete" state={{
                                name: "Steve Rogers",
                                role: "Main Teacher",
                                img: Steve
                            }} className="relative flex-1 overflow-hidden cursor-pointer group">
                                <img src={Steve} alt="Steve" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-white font-bold text-lg">Steve Rogers</p>
                                    <p className="text-slate-400 text-sm pt-[8px]">Main Teacher</p>
                                    <div className="flex gap-[26px] pt-[24px]">
                                        <img src={twitter} alt="twitter" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={instagram} alt="instagram" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={linkedIn} alt="linkedIn" className="flex items-center justify-center text-white text-sm w-[30px] rounded-[3px] hover:transition-colors"></img>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/templete" state={{
                                name: "Marco Itolo",
                                role: "Data Teacher",
                                img: Itolo
                            }} className="relative flex-1 overflow-hidden cursor-pointer group">
                                <img src={Itolo} alt="Itolo" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-white font-bold text-lg">Marco Itolo</p>
                                    <p className="text-slate-400 text-sm pt-[8px]">Data Teacher</p>
                                    <div className="flex gap-[26px] pt-[24px]">
                                        <img src={twitter} alt="twitter" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={instagram} alt="instagram" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={linkedIn} alt="linkedIn" className="flex items-center justify-center text-white text-sm w-[30px] rounded-[3px] hover:transition-colors"></img>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/templete" state={{
                                name: "Tony Stark",
                                role: "Football Player",
                                img: Stark
                            }} className="relative flex-1 overflow-hidden cursor-pointer group">
                                <img src={Stark} alt="Stark" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-white font-bold text-lg">Tony Stark</p>
                                    <p className="text-slate-400 text-sm pt-[8px]">Football Player</p>
                                    <div className="flex gap-[26px] pt-[24px]">
                                        <img src={twitter} alt="twitter" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={instagram} alt="instagram" className="flex items-center justify-center text-white text-sm w-[30px] hover:transition-colors"></img>
                                        <img src={linkedIn} alt="linkedIn" className="flex items-center justify-center text-white text-sm w-[30px] rounded-[3px] hover:transition-colors"></img>
                                    </div>
                                </div>
                            </Link>
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

export default Company