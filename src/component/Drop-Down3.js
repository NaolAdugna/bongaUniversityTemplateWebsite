import React from "react";
import "./Drop-Down3.css"
import AdministartionData from "./Nav-Data3"


export default function DropDown3(){
    return(
        <>
            <ul className="drop-ul3">
                {AdministartionData.map(item=>{
                    return(
                        <li key={item.id}>
                            <a href={item.path} className={item.className}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}