import React from "react"
import "./Header.css"
import Main from "../../src/image/prem.jpg"
function Header() {
    return (
        <>
            <div className="Header">
                <div className="left">
                    <div className="text">
                        <h1 className="i-intro">Hello, My Name is</h1>
                        <h1 className="i-name">  Prem Saini</h1>
                        <div className="left_wraper">
                            <div className="left_wrapper">
                                <div className="left_wraper_item">Web developer</div>
                                <div className="left_wraper_item">Front-end developer</div>
                                <div className="left_wraper_item">React developer</div>
                                <div className="left_wraper_item">Web designer</div>
                            </div>
                        </div>
                        <div className="descrption">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia in tenetur quos exercitationem.
                                Amet ex unde voluptate excepturi, voluptas, sit placeat sed asperiores molestiae </p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="i-bg">
                        <img src={Main} alt="logo" className="i-img" />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Header