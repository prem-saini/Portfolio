import React from "react"
import "./About.css"
// import AboutImg from "../../src/image/AboutImg.jpg"
function About() {
    return (
        <>
            <div className="About">
                <div className="a_left">
                    <div className="a_card bg">
                        <div className="a_card">
                            <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt="..." className="a_img" />
                        </div>
                    </div>

                </div>
                <div className="a_right">
                    <h1 className="a_title">About Me</h1>
                    <p className="a-sub">
                        It is a long established fact that a reader will be distracted by the
                        readable content.</p>
                    <p className="a-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat duis aute irure dolor in reprehende.</p>

                </div>
            </div>

        </>
    )
}
export default About