import React from "react";
import HeroImage from "../images/bonga.jpeg"
import "./Hero.css"
import HeroData from "./Hero-Data"
import HeroData2 from "./Hero-Data2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faTelegram,faTiktok} from "@fortawesome/free-brands-svg-icons"


export default function Hero(){
    return (
        <>
            <section id="hero-section">
                <img src={HeroImage} alt="Hero-Image" className="hero-image"/>
                <h1 className="hero-head">About Bonga University</h1>
                <div className="head-container">
                    <img src={HeroImage} alt="head-image" className="head-image"/>
                    <h4>Bonga University is one of the Public Higher Education institutions in Ethiopia. It is established with its own legal personality by
                         the proclamation No. 349/2015 of the Council of Ministers of the Federal Democratic Republic of Ethiopia. It is found in the South-Western
                          part of Ethiopia, in the Southwest Ethiopia Peoples Region. The university is being established over nearly 174 hectares of area with an 
                          extremely impressive natural landscape.   Its main campus is located in Bonga town, the capital of the Kaffa zone. The town is located at 
                          about 460 km distance from the capital of Ethiopia, Addis Ababa. It is privileged to be situated along the major highway connecting the 
                          south western region with national capital and the central part of the country, which makes it occupy spatially more accessible position.
                           Bonga University is committed to realizing its vision through concerted efforts of playing its share in contributing for local, national 
                           and global development.</h4>
                </div>
                <div className="news-container">
                    <h1>Latest News</h1>
                    {HeroData.map(item=>{
                        return(
                            <div className=" news-content" key={item.id}>
                                <img src={HeroImage} alt="news logo" className="video"/>
                                <div>
                                    <p>{item.description}</p>
                                    <button >Read More</button>
                                </div>
                            </div>                              
                        )
                    })}
                </div>
                <div className="online-course-container">
                    <h2>Online Courses</h2>
                    <p>This is the Nation Academic Digital Library of Ethioia that consists fo Subject <br/>Domains,Available online courses and Related Digital Archves</p>
                    <div className="online-container">
                        {HeroData2.map(items=>{
                            return(
                                <div key={items.id} className="online-content">
                                    <img src={items.url} alt="NADL"  className="online-image"/>
                                    <br/>
                                    <h2>{items.title}</h2>
                                    <br/>
                                    <p>{items.text}</p>
                                    <br/>
                                    <button className="buttons">Visit Now</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </section>
            <section className="footer">
                <div className="footer-link">
                    <strong>QUICK LINK</strong>
                    <a href="#">Home</a>
                    <a href="#">Terms and policy</a>
                    <a href="#">Conditons</a>
                </div>
                <div className="footer-address">
                    <strong>Contact Us</strong>
                    <address>Bonga,Ethiopia</address>
                    <address>TEL:+251912345678</address>
                    <address>Email:bonga@example.com</address>
                </div>
                <div className="footer-follow">
                    <strong>Follow us</strong>
                    <div><FontAwesomeIcon icon={faTwitter} className="footer-icon"/>  <FontAwesomeIcon icon={faFacebook} className="footer-icon"/> <FontAwesomeIcon icon={faTelegram} className="footer-icon"/> <FontAwesomeIcon icon={faTiktok} className="footer-icon"/> </div>
                </div>
            </section>
            <hr/>
            <p className="copy-right">Copyright<span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2022 Bonga University.All right reserved! <br/> <span> Developed by </span> <a href="#" className="developed">@Naol A.</a></p>
        </>
    )
}



