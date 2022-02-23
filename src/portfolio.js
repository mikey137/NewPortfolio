import {React, useState} from 'react';
import './portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faReact, faCss3Alt, faNode, faHtml5, faJs, faBootstrap} from '@fortawesome/free-brands-svg-icons'
import { faClose} from '@fortawesome/free-solid-svg-icons'
import zenCircle from '/Users/michaelhulme/projects/porfolio/src/images/greyZenCircle.png'

export default function Portfolio(){
    const [displayedProject, setDisplayedProject] = useState()
    const [isProjectDisplayed, setIsProjectDisplayed] = useState(false)
    const [zenCircleRotationDirection, setZenCircleRoationDirection] = useState()
    
    const handleDisplayProject = (project) => {
        setZenCircleRoationDirection('rotate-clockwise')

        setIsProjectDisplayed(true)
        
        setTimeout(() => {
            setDisplayedProject(project)
        },2000)

        setTimeout(() => {
            
        },4000)
    }

    const handleUndisplayProject = () => {
        setZenCircleRoationDirection('rotate-counter-clockwise')
        document.querySelector('.project-content').classList.add('move-down')

        setTimeout(() => {
            setIsProjectDisplayed(false)
            setDisplayedProject('')
        }, 2000)
    }

    const emptyContent = (
        <div className="hidden"></div>
    )

    const littleLegumesContent = (
        <div className="project-content">
            <FontAwesomeIcon className="project-close-icon" onClick={() => {handleUndisplayProject()}}icon={faClose} />
            <div className="underlined-title">
                little legumes
            </div>
            <div className="regular-paragraph">
                Little Legumes is a clone of the Tiny Beans App(get it! Tiny Beans/Little Legumes). The main feature that is recreated in Little Legumes is an infinitely scrolling calendar which allows the user to save photo's or "moments" from each day. Additionally users are able to select moments and easily email them to a list of family and friends they populate. 
            </div>
            <div className="project-technologies-container">
                <FontAwesomeIcon className="project-tech-icon" icon={faReact}/>
                <FontAwesomeIcon className="project-tech-icon" icon={faCss3Alt}/>
                <FontAwesomeIcon className="project-tech-icon" icon={faNode}/>
                <FontAwesomeIcon className="project-tech-icon" icon={faGithub}/>
            </div>
            <div className="btn-container">
                <button className="btn">Visit Site</button>
                <button className="btn">See Code</button>
            </div>
        </div>
    )

    const superCardsContent = (
        <div className="project-content">
            <FontAwesomeIcon className="project-close-icon" onClick={() => {handleUndisplayProject()}}icon={faClose} />
            <div className="underlined-title">
                Super Cards NFT
            </div>
            <div className="regular-paragraph">
                In this project was a collaboration, the focus was more about practicing some of the soft skills involved in software development and less about the technology. Communicating with other people, sharing ideas, and coming up with a product everyone involved is happy with. In this project we used css and react to algorithmically generate unique smiley faces. We used those faces to create NFTs and posted them on OpenSea. 
            </div>
            <div className="project-technologies-container">
                <FontAwesomeIcon className="project-tech-icon" icon={faReact}/>
                <FontAwesomeIcon className="project-tech-icon" icon={faCss3Alt}/>
                <FontAwesomeIcon className="project-tech-icon" icon={faGithub}/>
            </div>
            <div className="btn-container">
                <button className="btn">Visit Site</button>
                <button className="btn">See Code</button>
            </div>
        </div>
    )

    const emotionalConceptsContent = (
        <div className="project-content">
            <FontAwesomeIcon className="project-close-icon" onClick={() => {handleUndisplayProject()}}icon={faClose} />
            <div className="underlined-title">
                Emotional Concepts 
            </div>
            <div className="regular-paragraph">
                This project is intended to be an interactive emotions wheel. Ideally it will be used by clinicians, occupational therapists, teachers, and parents, to help facilitate conversations about different emotional concepts with their clients, students, kids, ect. The app provides definitions, images, and videos of a variety of different emotions. Not all of the images and videos perfectly represent each emotion, which is fine, the intention isn't to provide exact answers, but to provide a starting place for a conversation.
            </div>
            <div className="project-technologies-container">
                <FontAwesomeIcon className="project-tech-icon" icon={faHtml5}/>
                <FontAwesomeIcon className="project-tech-icon" icon={faCss3Alt}/>
                <FontAwesomeIcon className="project-tech-icon" icon={faJs}/>
                <FontAwesomeIcon className="project-tech-icon" icon={faBootstrap}/>
                <FontAwesomeIcon className="project-tech-icon" icon={faGithub}/>
            </div>
            <div className="btn-container">
                <button className="btn">Visit Site</button>
                <button className="btn">See Code</button>
            </div>
        </div>
    )

    return(
        <div className="outer">
            <div className="background"></div>
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
                    <div className="project-container">
                        <img 
                            className={`zen-circle ${zenCircleRotationDirection}`}  
                            src={zenCircle} 
                            alt="Zen Circle" 
                        />
                        <div 
                            onClick={() => {handleDisplayProject(littleLegumesContent)}}className={isProjectDisplayed ? "project-title move-left" : "project-title from-left" }
                        >
                            Little Legumes
                        </div>
                        <div onClick={() => {handleDisplayProject(superCardsContent)}}className={isProjectDisplayed ? "project-title move-right" : "project-title from-right" }>
                            Super Cards NFT
                        </div>
                        <div onClick={() => {handleDisplayProject(emotionalConceptsContent)}}className={isProjectDisplayed ? "project-title move-left" : "project-title from-left" }>
                            Emotional Concepts
                        </div>
                        <div className={isProjectDisplayed ? "project-title move-right" : "project-title from-right" }>
                            Under Construction
                        </div>
                    </div>
                    {displayedProject}
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
        </div>
    )
}