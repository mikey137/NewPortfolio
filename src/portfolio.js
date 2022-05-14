import {React, useState, useEffect} from 'react';
import './portfolio.css'
import ContactForm from './components/ContactForm';
import { Link, Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact, faCss3Alt, faNode, faHtml5, faJs, faBootstrap, faGitAlt, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import { faClose, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import albert from './images/albert.png'
import mentalHealth from './images/mentalHealth.png'
import coaching from './images/tf.png'
import robot from './images/robotWhite.png'
import buddha from './images/buddha3.png'
import Project from './components/Project'
import ProjectsArray from './ProjectsArray'

export default function Portfolio(){

    const educationContent = (
        <div className="about-item-container">
            <div className="school">
                <h3>University of North Carolina, Wilmington</h3>
                <div className="sub-title">Bachelor of Science in Applied Mathematics</div>
                {/* <div className="list-title">Area's of Study:</div>
                <ol id="studies-list">
                    <li>Fermat's Last Theorem for the case n=3</li>
                    <li>Partial Differential Equations</li>
                    <li>Vector Calculus</li>
                    <li>Abstract Algebra</li>
                </ol>  */}
            </div>
            <div className="school">
                <h3>Bridgewater State University</h3>
                <div className="sub-title">Master of Science in Strength and Conditioning</div>
                
                {/* <div className="list-title">Area's of Study:</div>
                <ol id="studies-list">
                    <li>Olympic Lifting for College Athletes</li>
                    <li>Rest and Recovery in Athletic Performance</li>
                    <li>Nutrition</li>
                    <li>Biomechanics of Sprinting</li>
                </ol>  */}
            </div>
            <div className="school">
                <h3>Deep Dive Learning Academy</h3>
                <div className="sub-title">Coding bootcamp graduate</div>
            </div>
        </div>
    )

    const technologiesContent = (
        <div className="about-item-container">
            <div className="technologies-container">
                <div className="tech-container">
                    <FontAwesomeIcon className="tech-icon" icon={faHtml5}/>
                    <div className="regular-paragraph">html</div>
                </div>
                <div className="tech-container">
                    <FontAwesomeIcon className="tech-icon" icon={faCss3Alt}/>
                    <div className="regular-paragraph">css</div>
                </div>
                <div className="tech-container">
                    <FontAwesomeIcon className="tech-icon" icon={faJs}/>
                    <div className="regular-paragraph">javascript</div>
                </div>
                <div className="tech-container">
                    <FontAwesomeIcon className="tech-icon" icon={faReact}/>
                    <div className="regular-paragraph">react</div>
                </div>
                <div className="tech-container">
                    <FontAwesomeIcon className="tech-icon" icon={faGitAlt}/>
                    <div className="regular-paragraph">github</div>
                </div>
                <div className="tech-container">
                    <FontAwesomeIcon className="tech-icon" icon={faNodeJs}/>
                    <div className="regular-paragraph">nodejs</div>
                </div>    
            </div>
        </div>
    )

    const mentalHealthContent = (
        <div className="about-content-container">
            {/* <div className="school">
                <div className="underlined-title">Cohannet Academy</div>
                <div className="sub-title">Residential Supervisor 2014-2022</div>
                <div className="paragraph-title">Transferable Skills:</div>
                <div className="regular-paragraph-left">communication, pattern recognition</div>
                <div className="paragraph-title">Job Description:</div>
                <div className="regular-paragraph-left">
                    All things related to running an Intensive Residential Treatment Program for teenage girls who struggle with suicidal ideation, eating disorders, or other self injurious behavior. My primary responsibilities were to manage the staff on shift, intervine when a resident is in crisis, and facilitate communication between the various departments in the program.  
                    <br/>
                    <br/>
                    The ability to identify patterns of behavior in the residents was crucial to managing their behavior. While the ability collaborate effectively accross deparrments greatly improved the efficay of our treatment plans.
                </div>   
            </div> */}
        </div>
    )

    const coachingContent = (
        <div className="about-content-container">
            {/* <div className="school">
                <div className="underlined-title-small">Bryant University</div>
                <div className="sub-title">Assistant Track and Field Coach 2018-2019</div>
                <div className="underlined-title-small">Bridgewater State University </div>
                <div className="sub-title">Assistant Track and Field Coach 2014-2018</div>
                <div className="underlined-title-small">University of Massachusetts, Boston</div>
                <div className="sub-title">Assistant Track and Field Coach 2012-2014</div>
                <div className="paragraph-title">Transferable Skills:</div>
                <div className="regular-paragraph-left">communication, pattern recognition</div>
                <div className="paragraph-title">Job Description:</div>
                <div className="regular-paragraph-left">
                    The key to success as a coach was effective communication as well as aligning the goals of individual athletes with the goals of the team. In addition to the athletes, athletic trainers, strength coaches and even parents had to buy into the overall vision for the team. 
                </div>   
            </div> */}
        </div>
    )
    const [isNavBarDisplayed, setIsNavBarDisplayed] = useState(false)
    const [displayedAboutItem, setDisplayedAboutItem] = useState(educationContent)
    const [isAboutItemDisplayed, setIsAboutItemDisplayed] =useState(false)

    const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

    window.onscroll = function(){
        if(window.pageYOffset > 0){
            let aboutSection = document.getElementsByClassName('section about')[0]
            let aboutDistanceFromTop = aboutSection.getBoundingClientRect().top
            let viewPortHeight = document.documentElement.clientHeight
            let imgOpacity = map(aboutDistanceFromTop, viewPortHeight, 0, 1, 0)
            document.getElementsByClassName('background')[0].style.opacity = imgOpacity
        }
    }

    // useEffect(() => {
    //         let touchStartX = 0
    //         let touchEndX = 0
                        
    //         document.addEventListener('touchstart', (e) => {
    //             touchStartX = e.changedTouches[0].screenX
    //             console.log(touchStartX)
    //         },false)

    //         document.addEventListener('touchend', (e) => {
    //             touchEndX = e.changedTouches[0].screenX
    //             handleGesture()
    //         },false)

    //         function handleGesture(){
    //             if(touchStartX < touchEndX){
    //                 handleUndisplayAboutItem()
    //                 console.log('swipe')
    //             }else{
    //                 console.log('no swipe')
    //             }
    //         }
    // },[isAboutItemDisplayed])

    // useEffect(() => {
    //     const checkIfClickedOutside = e => {
    //         if(isAboutItemDisplayed && ref.current && !ref.current.contains(e.target)){
    //             handleUndisplayAboutItem()
    //         }
    //     }
    //     document.addEventListener("mousedown", checkIfClickedOutside)
    //     return() => {
    //         document.removeEventListener("mousedown", checkIfClickedOutside)
    //     }
    // }, [isAboutItemDisplayed])
    
    const handleDisplayAboutItem = (displayedItem) => {
        setIsAboutItemDisplayed(true)
        const sections = document.querySelectorAll('.section')
        sections.forEach(section => {
            section.classList.add('moved-left')
        })
        setTimeout(() => {
            setDisplayedAboutItem(displayedItem)
            const distanceFromTop = window.scrollY
            const displayContainer = document.querySelector('.project-content')
            displayContainer.style.top = `calc(${distanceFromTop}px + 50vh)`    
        }, 0)
    }

    const handleUndisplayAboutItem = () => {
        setIsAboutItemDisplayed(false)
        const sections = document.querySelectorAll('.section')
        
        sections.forEach(section => {
            section.classList.remove('moved-left')
        })

        document.querySelector('.project-content').classList.add('to-side')
        setTimeout(() => { 
            setDisplayedAboutItem()
        },1100)
    }

    const handleDisplayAboutContent = (content, id) => {
        document.querySelector('.text-btn.active').classList.remove('active')
        setTimeout(() =>{
            setDisplayedAboutItem(content)
            document.querySelector(`#${id}`).classList.add('active')
        },100)
    }

    return(
        <div className="outer">
            <img 
                onClick={() => setIsNavBarDisplayed(!isNavBarDisplayed)}
                src={buddha} alt="buddha" className="navbar-icon" 
            />
            <div className={isNavBarDisplayed ? "navbar-displayed" : "navbar"}>
                <div className="navbar-title">contents</div>
                <ol className="navbar-ol">
                    <li className="navbar-element">
                        <Link 
                            activeClass="active" 
                            to="home" 
                            spy={true} 
                            smooth={true}
                            onClick={() => setIsNavBarDisplayed(false)}
                        >   
                            Home
                        </Link>
                    </li>
                    <li className="navbar-element"> 
                        <Link 
                            activeClass="active" 
                            to="about" 
                            spy={true} 
                            smooth={true}
                            onClick={() => setIsNavBarDisplayed(false)}
                        >   
                            about
                        </Link>
                    </li>
                    <li className="navbar-element">
                        <Link 
                            activeClass="active" 
                            to="projects" 
                            spy={true} 
                            smooth={true}
                            onClick={() => setIsNavBarDisplayed(false)}
                        >   
                            projects
                        </Link>
                    </li>
                    <li className="navbar-element">
                        <Link 
                            activeClass="active" 
                            to="contact" 
                            spy={true} 
                            smooth={true}
                            onClick={() => setIsNavBarDisplayed(false)}
                        >   
                            contact
                        </Link>
                    </li>
                </ol>
            </div>
            <div className="main-content">
                <div className="background"></div>
                <div className="background-gradient"></div>
                <div className="background-color"></div>
                <Element name="home" className="section landing">
                    <div className="landing-title">
                        Michael<br/>Hulme
                    </div>
                    <div className="landing-subtitle">
                        Software<br/>Developer
                    </div>
                </Element>
                <Element name="about" className="section about">
                    <div className="section-title">
                        about me
                    </div>
                    <div className="paragraph-with-backdrop-boxshadow">
                            Learning, I want to understand how things work and I’m curious about what’s going on behind the scenes. With software development there is always new technologies to learn or existing technologies to gain a deeper understanding of.
                        </div>
                    <div className="about-menu">
                        <button 
                            className="text-btn active"
                            id="educationContent"
                            onClick={() => handleDisplayAboutContent(educationContent,'educationContent')}
                        >
                            Education
                        </button>
                        <button 
                            className="text-btn"
                            id="technologiesContent"
                            onClick={() => handleDisplayAboutContent(technologiesContent, 'technologiesContent')}
                        >
                            Technologies Used
                        </button>
                        <button 
                            className="text-btn"
                            id="mentalHealthContent"
                            onClick={() => handleDisplayAboutContent(mentalHealthContent, 'mentalHealthContent')}
                        >
                            Mental Health
                        </button>
                        <button 
                            className="text-btn"
                            id="coachingContent"
                            onClick={() => handleDisplayAboutContent(coachingContent, 'coachingContent')}
                        >
                            Coaching
                        </button>
                    </div>
                    <div className="about-item-border">
                        {displayedAboutItem}
                    </div>   
                </Element>
                <Element name="projects" className="section projects">
                    <div className="section-title">
                        projects
                    </div>
                    <div className="projects-array-container">
                        {ProjectsArray.map((project, index) => (
                            <Project project = {project} index = {index} key = {project.title}/>
                        ))}
                    </div>
                </Element>
                <Element name="contact" className="section contact">
                    <div className="section-title">
                        contact
                    </div>
                    <p className="title-sub-text">email me! maybe?</p>
                    <ContactForm></ContactForm>
                </Element>
            </div>
        </div>
    )
}