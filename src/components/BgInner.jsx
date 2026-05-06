import { Link } from 'react-router-dom'


import logo from "../assets/logo.svg"
import shape from "../assets/Shape.svg"
import jonson from "../assets/jonson.svg"
import Shapes from "../assets/Shapes.svg"
import big from "../assets/big.png"
import exe from "../assets/exe.svg"
import chiziq from "../assets/chiziq.svg"
import black from "../assets/black.svg"
import facebook from "../assets/facebook.svg"
import qushcha from "../assets/qushcha.svg"
import insta from "../assets/insta.svg"
import linked from "../assets/linked.svg"


function BgInner() {

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
                <section className="w-[1280px] h-[324px] ml-[160px] mt-[96px] flex gap-[503px]">
                    <div>
                        <img src={shape} alt="shape" />
                        <h2 className="text-[48px] text-[#232536] font-[600] w-[729px] pt-[24px]">Breaking the code How did we build our Figma plugin </h2>
                        <p className="text-16px] texr-[#232536] font-[400] w-[630px] pt-[24px]">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The Maker is a decentralized. We aim to attain the
                            greatest satisfaction for our clients
                        </p>

                        <div className="flex gap-[32px] mt-[44px]">
                            <div className="flex gap-[12px]">
                                <img src={jonson} alt="jonson" />
                                <h4 className="text-[#232536]">Andrew Jonson</h4>
                            </div>
                            <span>Posted on 27th January 2021</span>
                        </div>
                    </div>
                    <div>
                        <img src={Shapes} alt="Shapes" />
                    </div>
                </section>

                <section className="w-[1280px] h-[1630px] ml-[160px] mt-[96px]">
                    <img src={big} alt="big" />
                    <div className="w-[844px] h-[1148px] m-auto mt-[96px]">
                        <h2 className="text-[36px] text-[#232536] font-[600]">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h2>
                        <p className="text-[16px] text-[#232536] font-[400] w-[750px] pt-[24px]">
                            Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to
                            get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin
                            for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies
                            cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The
                            intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for
                            error messages.
                        </p>
                        <p className="text-[16px] text-[#232536] font-[400] w-[750px] pt-[24px]">
                            Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to
                            get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin
                            for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies
                            cataloged.
                        </p>
                        <p className="text-[16px] text-[#232536] font-[400] w-[750px] pt-[24px]">
                            Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to
                            get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin
                            for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies
                            cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The
                            intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.
                        </p>
                        <p className="text-[16px] text-[#232536] font-[400] w-[750px] pt-[24px]">
                            Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to
                            get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin
                            for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies
                            cataloged.
                        </p>
                        <h2 className="text-[24px] text-[#232536] font-[600] mt-[40px]">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h2>
                        <p className="text-[16px] text-[#232536] font-[400] w-[750px] pt-[24px]">
                            Step 1: Download the plugin from Figma community, search Ghost UXWriter {<br />}
                            Step 2: Open the plugin on your artboard${<br />}
                            Step 3: Search for your copy or look through the different categories of the copies{<br />}
                            Step 4: Select the type of error you are looking for. You will get three different copies for each error{<br />}
                            Step 5: Tap on the cards to insert text in your frames{<br />}
                            And you are all geared up to make your UX copies more fun and exciting 😎
                        </p>
                        <h2 className="text-[24px] text-[#232536] font-[600] mt-[40px]">Transform Your Idea Into Reality with Ether a Leading Digital Agency</h2>
                        <p className="text-[16px] text-[#232536] font-[400] w-[750px] pt-[24px]">
                            Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to
                            get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin
                            for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies
                            cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The
                            intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for
                            error messages.
                        </p>
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

export default BgInner