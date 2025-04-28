import { FaAngleDown } from "react-icons/fa6";
import "./Filter.css"
import { useState } from "react";
export default function Filter({children}){
 
    return(
        <>
        <button className="filter-btn">
            <span><FaAngleDown /></span>
            <span>{children}</span>
        </button>

       
        
        </>
    )
}