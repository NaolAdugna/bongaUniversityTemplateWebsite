import React from "react";
import Logo from "../images/BUlogo.png";
import menuData from "./Nav-Data0"
import DropDown from "./Drop-Down";
import DropDown2 from "./Drop-Down2"
import DropDown3 from "./Drop-Down3";
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faBars } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function Nav(){
    const [aboutDropDown,setAboutDropDown]=React.useState(false)
    const [acadamecDropDown,setAcadamecisDropDown]=React.useState(false)
    const [administrationDropDown,setAdministrationDropDown]=React.useState(false)
    const dropdowns=document.querySelector(".dropDOWN")

    const [isOpen, setIsOpen] = React.useState(false);

    function handleMenu() {
      dropdowns.classList.toggle("actives");
      setIsOpen(!isOpen);
    }
    
    return(
        <>
            <nav className="nav-header">
                <a href="#"><img src={Logo} alt="bonga-logo" className="nav-image"/></a>

                <ul className="nav-ul">
                    {menuData.map(item=>{
                        if(item.title==="ABOUT-US"){
                            return(
                                <>
                                    <li key={item.id} onMouseEnter={()=>setAboutDropDown(true)} onMouseLeave={()=>setAboutDropDown(false)}>
                                        <a href={item.path} className="navMenu">{item.title} </a>
                                        {aboutDropDown && <DropDown/>}
                                    </li>
                                    
                            </>
                            )
                        }

                        if(item.title==="ACADAMECIS"){
                            return(
                                <>
                                   <li key={item.id} onMouseEnter={()=>setAcadamecisDropDown(true)} onMouseLeave={()=>setAcadamecisDropDown(false)}>
                                        <a href={item.path} className="navMenu">{item.title} </a>
                                        {acadamecDropDown && <DropDown2/>}
                                    </li>
                                   
                                </>

                            )
                        }
                   
                        if(item.title==="ADMINISTRATION"){
                            return(
                                <>
                                    <li key={item.id} onMouseEnter={()=>setAdministrationDropDown(true)} onMouseLeave={()=>setAdministrationDropDown(false)}>
                                        <a href={item.path} className="navMenu">{item.title} </a>
                                        {administrationDropDown && <DropDown3/>}
                                    </li>
                                </>
                            )
                        }
                        
                        return(
                            <>
                              <li key={item.id}>
                                      <a href={item.path} className="navMenu" >{item.title}</a>
                                      {item.title==="CONTACT US"? <FontAwesomeIcon icon={isOpen? faXmark:faBars} className="menuBars" onClick={handleMenu}/> : null }
                                      {/* {isOpen? <FontAwesomeIcon icon={faXmark} className="menuBars" onClick={handleMenu}/>:<FontAwesomeIcon icon={faBars}/>} */}
                                      <div className="dropDOWN">
                                        <li><a href="#">HOME</a></li>
                                        <li><a href="#">ABOUT-US</a></li>
                                        <li><a href="#">ACADAMECIS</a></li>
                                        <li><a href="#">ADMINISTRATION</a></li>
                                        <li><a href="#">COMMUNITIES</a></li>
                                        <li><a href="#">CONTACT US</a></li>
                                      </div>
                                     
                              </li>
                             
                            </>
                            
                            
                        )
                    })}

                </ul>
            </nav>
        </>
    )
}


/*
import React from "react";
import Logo from "../images/BUlogo.png";
import menuData from "./Nav-Data0";
import DropDown from "./Drop-Down";
import DropDown2 from "./Drop-Down2";
import DropDown3 from "./Drop-Down3";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [aboutDropDown, setAboutDropDown] = React.useState(false);
  const [acadamecDropDown, setAcadamecisDropDown] = React.useState(false);
  const [administrationDropDown, setAdministrationDropDown] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false); // added state for menu

  function handleMenuClick() {
    setShowMenu(!showMenu); // toggle the showMenu state
  }

  return (
    <>
      <nav className="nav-header">
        <a href="#">
          <img src={Logo} alt="bonga-logo" className="nav-image" />
        </a>

        <ul className={`nav-ul ${showMenu ? "show" : ""}`}>
          <li key="menu">
            <FontAwesomeIcon
              icon={showMenu ? faXmark : faBars}
              className="menuBars"
              onClick={handleMenuClick}
            />
          </li>

          {menuData.map((item) => {
            if (item.title === "ABOUT-US") {
              return (
                <>
                  <li
                    key={item.id}
                    onMouseEnter={() => setAboutDropDown(true)}
                    onMouseLeave={() => setAboutDropDown(false)}
                  >
                    <a href={item.path} className={item.className}>
                      {item.title}{" "}
                    </a>
                    {aboutDropDown && <DropDown />}
                  </li>
                  <div className="drop-down">
                    <li key={item.id}>
                      <a href={item.path} className={item.className}>
                        {item.title}
                      </a>
                    </li>
                  </div>
                </>
              );
            }

            if (item.title === "ACADAMECIS") {
              return (
                <>
                  <li
                    key={item.id}
                    onMouseEnter={() => setAcadamecisDropDown(true)}
                    onMouseLeave={() => setAcadamecisDropDown(false)}
                  >
                    <a href={item.path} className={item.className}>
                      {item.title}{" "}
                    </a>
                    {acadamecDropDown && <DropDown2 />}
                  </li>
                  <div className="drop-down">
                    <li key={item.id}>
                      <a href={item.path} className={item.className}>
                        {item.title}
                      </a>
                    </li>
                  </div>
                </>
              );
            }

            if (item.title === "ADMINISTRATION") {
              return (
                <>
                  <li
                    key={item.id}
                    onMouseEnter={() => setAdministrationDropDown(true)}
                    onMouseLeave={() => setAdministrationDropDown(false)}
                  >
                    <a href={item.path} className={item.className}>
                      {item.title}{" "}
                    </a>
                    {administrationDropDown && <DropDown3 />}
                  </li>
                  <div className="drop-down">
                    <li key={item.id}>
                      <a href={item.path} className={item.className}>
                        {item.title}
                      </a>
                    </li>
                  </div>
                </>
              );
            }}
            */