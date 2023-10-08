import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import './card.css'
function card(props) {
    return (
        <>
            <div className="members_card">
                <div className="members_card_image">
                    <img src={props.imageUrl} alt="imae" srcset="" />
                </div>
                <div className="members_card_info">
                    <h3>{props.name}</h3>
                    <p>{props.position}</p>
                    <div className="members_card_button">
                        <a href={props.facebookLink} className=""><BiLogoFacebook/></a>
                        <a href={props.linkedinLink} className=""><AiOutlineLinkedin/></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default card