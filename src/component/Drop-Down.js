import React from "react";
import subMenuData from "./Nav-Data1"
import "./Drop-Down.css"

export default function DropDown(){
    return(
        <>
            <ul className="drop-ul" >
                {subMenuData.map(item=>{
                    return(
                        <li key={item.id}>
                            <a href={item.path} className={item.className} >{item.title}</a>
                        </li>
                        )
                })}
            </ul>
        </>
    )
}