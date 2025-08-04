import type React from "react";
import "./CornerPhoto.css"
import logo from "../../../public/logo.png"

interface CornerPhotoProps{
    photo: string;
    imgStyle?: React.CSSProperties
    style?:React.CSSProperties
}
export default function CornerPhoto({photo,style,imgStyle}: CornerPhotoProps){
    return(
        <div className="CornerPhoto" style={style} >
            <img src={photo}  style={imgStyle} className="bigImg"/>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>
        
    )
}