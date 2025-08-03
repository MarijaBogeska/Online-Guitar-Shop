import type React from "react";
import "./CornerPhoto.css"

interface CornerPhotoProps{
    logo: string;
    photo: string;
    imgStyle?: React.CSSProperties
    style?:React.CSSProperties
}
export default function CornerPhoto({logo,photo,style,imgStyle}: CornerPhotoProps){
    return(
        <div className="CornerPhoto" style={style} >
            <img src={photo}  style={imgStyle} className="bigImg"/>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>
        
    )
}