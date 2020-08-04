import React from 'react'
import Data from '../../db/db.js'
import {Link} from "react-router-dom";
import './Start.scss'
import Background from "../../Background/Background";

function Start() {
    return (
        <Background>
            <div className='Start'>
                <div className="stepper">
                    <span className='stepper-circle st1'> </span>
                    <span className='stepper-circle st2'> </span>
                    <span className='stepper-circle st3'> </span>
                    <span className='stepper-circle st4'> </span>
                    <span className='stepper-circle st5'> </span>
                    <span className='stepper-color'> </span>
                </div>

                <div className="backdrop">
                    <h1>فرم نظرسنجی و ارتقا سطح خدمت رسانی</h1>
                    <img className='logo' src={Data.logo_url} alt='Logo'/>
                    <button className='start'>
                        <Link to='/ques1'>شروع</Link>
                    </button>
                </div>

                <div className='footer'>
                    <div className='footer-intro'>
                        <button>Soally</button>
                        <p>قدرت گرفته از</p>
                    </div>
                    <p>پلتفرم طراحی فرم های CRM آنلاین</p>
                </div>
            </div>
        </Background>
    )
}

export default Start
