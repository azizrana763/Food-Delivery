import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className="Footer" id="Footer">
            <div className="Footer-content">
                <div className="Footer-content-left">
                    <img src={assets.logo2}></img>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus corrupti, blanditiis ex nulla modi illo optio, inventore ducimus iusto mollitia eveniet ea perferendis commodi, consequatur accusantium ab non totam qui?</p>
                    <div className="Footer-social-icons">
                        <img src={assets.facebook_icon} />
                        <img src={assets.twitter_icon} />
                        <img src={assets.linkedin_icon} />
                    </div>
                </div>
                <div className="Footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy</li>
                    </ul>

                </div>
                <div className="Footer-content-Right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>0331-0255200</li>
                        <li>hr@desibites.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className="Footer-Copyright">Copyright  2024@desibites-All Right Reserved.</p>
        </div>
    )
}

export default Footer