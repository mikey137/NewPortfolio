import React from 'react';
import './portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Portfolio(){
    return(
        <div className="main-content">
            <div className="section landing">
                <div className="landing-title">
                    Michael<br/>Hulme
                </div>
                <div className="landing-subtitle">
                    Software<br/>Developer
                </div>
            </div>
            <div className="section about">
                <div className="section-title">
                    about
                </div>
            </div>
            <div className="section projects">
                <div className="section-title">
                    projects
                </div>
            </div>
            <div className="section contact">
                <div className="section-title">
                    contact
                </div>
                <p className="title-sub-text">email me! maybe?</p>
                <div className="contact-form">
                    <input type="text" className="form__input" id="name" placeholder="Full name" required="" />
                    <input type="text" className="form__input" id="email" placeholder="Email" required="" />
                    <input type="text" className="form__input" id="subject" placeholder="Subject" required="" />
                    <textarea id="field" className="form__input" name="subject" placeholder="Write something.."></textarea>
                    <button className="btn">Submit</button>
                </div>
                <div className="icons-container">
                    <a target="_blank" href="https://github.com/mikey137">
                        <FontAwesomeIcon className='social-media-icon' icon={ faGithub }/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/michael-hulme-63b81a214/">
                        <FontAwesomeIcon className='social-media-icon' icon={ faLinkedin }/>
                    </a>
                </div>
            </div>
        </div>
    )
}