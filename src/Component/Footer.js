import React from "react"
import "./Footer.css"
function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="f_left">
                    <div className="contact">
                        <h1>Contact Us</h1>
                        <h2>💬- 7426938951</h2>
                        <h3>E-mail - premsainilsl2000@gmail.com</h3>
                        <h3>Address - Saini Nagar Word No. 01 Losal <br /> Sikar Rajasthan</h3>
                    </div>


                </div>
                <div className="f_right">
                    <div className="upper">
                        <input type="text" placeholder="Name" className="in" />
                        <input type="text" placeholder="E-mail" className="in" />
                        <input type="number" placeholder="Phone Number" className="in" />

                    </div>
                    <textarea rows="5" ></textarea> <br />
                    <button className="btn">Submit</button>

                </div>
            </div>
        </>
    )
}
export default Footer