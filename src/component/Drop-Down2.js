import React from "react";
import "./Drop-Down2.css"
import AcadamecisData from "./Nav-Data2"


export default function DropDown2(){
    return (
        <>
            <ul className="drop-ul2" >
                {AcadamecisData.map(item=>{
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
