import {React, useState} from 'react';
import './portfolio.css'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faReact, faCss3Alt, faNode, faHtml5, faJs, faBootstrap, faGitAlt, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import zenCircle from '/Users/michaelhulme/projects/porfolio/src/images/greyZenCircle.png'
import albert from '/Users/michaelhulme/projects/porfolio/src/images/albert.png'
import mentalHealth from '/Users/michaelhulme/projects/porfolio/src/images/mentalHealth.png'
import coaching from '/Users/michaelhulme/projects/porfolio/src/images/tf.png'
import robot from '/Users/michaelhulme/projects/porfolio/src/images/robotWhite.png'
import buddha from '/Users/michaelhulme/projects/porfolio/src/images/buddha3.png'

export default function Portfolio(){
    const [isNavBarDisplayed, setIsNavBarDisplayed] = useState(false)
    const [displayedAboutItem, setDisplayedAboutItem] = useState()
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

    const handleDisplayAboutItem = (displayedItem) => {
        let aboutItems = document.querySelectorAll('.about-item')
        document.querySelector('.paragraph-with-backdrop-boxshadow').classList.add('mute')

        aboutItems.forEach(item => {
            item.classList.add('mute')
        }) 
        
        setTimeout(() => {
            setDisplayedAboutItem(displayedItem)
        }, 500)
    }

    const handleUndisplayAboutItem = () => {
        let aboutItems = document.querySelectorAll('.about-item')
        document.querySelector('.project-content').classList.add('move-down')

        setTimeout(() => {
            document.querySelector('.paragraph-with-backdrop-boxshadow').classList.remove('mute')
            aboutItems.forEach(item => {
                item.classList.remove('mute')
            }) 
            setDisplayedAboutItem('')
        }, 2000)
    }

    const handleButtonFail = () => {
        document.querySelector('.project-title:last-child').classList.add('falling')

        setTimeout(() => {
            document.querySelector('.project-title:last-child').classList.remove('falling')
        }, 6000)
    }

    const educationContent = (
        <div className="project-content">
            <FontAwesomeIcon className="project-close-icon" onClick={() => {handleUndisplayAboutItem()}}icon={faClose} />
            <div className="school">
                <div className="underlined-title">University of North Carolina, Wilmington</div>
                <div className="sub-title">Bachelor of Science in Applied Mathematics</div>
                <div className="list-title">Area's of Study:</div>
                <ol id="studies-list">
                    <li>Fermat's Last Theorem for the case n=3</li>
                    <li>Partial Differential Equations</li>
                    <li>Vector Calculus</li>
                    <li>Abstract Algebra</li>
                </ol> 
            </div>
            <div className="school">
                <div className="underlined-title">Bridgewater State University</div>
                <div className="sub-title">Master of Science in Strength and Conditioning</div>
                
                <div className="list-title">Area's of Study:</div>
                <ol id="studies-list">
                    <li>Olympic Lifting for College Athletes</li>
                    <li>Rest and Recovery in Athletic Performance</li>
                    <li>Nutrition</li>
                    <li>Biomechanics of Sprinting</li>
                </ol> 
            </div>
        </div>
    )

    const technologiesContent = (
        <div className="project-content">
            <FontAwesomeIcon className="project-close-icon" onClick={() => {handleUndisplayAboutItem()}}icon={faClose} />
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
        <div className="project-content">
            <FontAwesomeIcon className="project-close-icon" onClick={() => {handleUndisplayAboutItem()}}icon={faClose} />
            <div className="school">
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
            </div>
        </div>
    )

    const coachingContent = (
        <div className="project-content">
            <FontAwesomeIcon className="project-close-icon" onClick={() => {handleUndisplayAboutItem()}}icon={faClose} />
            <div className="school">
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
                    All things related to running an Intensive Residential Treatment Program for teenage girls who struggle with suicidal ideation, eating disorders, or other self injurious behavior. My primary responsibilities were to manage the staff on shift, intervine when a resident is in crisis, and facilitate communication between the various departments in the program.  
                    <br/>
                    <br/>
                    The ability to identify patterns of behavior in the residents was crucial to managing their behavior. While the ability collaborate effectively accross deparrments greatly improved the efficay of our treatment plans.
                </div>   
            </div>
        </div>
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
                <a href="https://little-legumes.herokuapp.com/" target="_blank" className="btn">Visit Site</a>
                <a href="https://github.com/mikey137/Little_Legumes_App" target="_blank" className="btn">View Code</a>
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
                <a href="http://supercardsnft.herokuapp.com/" target="_blank" className="btn">Visit Site</a>
                <a href="https://github.com/Ben8842/asg" target="_blank" className="btn">View Code</a>
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
                <a href="https://mikey137.github.io/EmotionsAPI/index.html" target="_blank" className="btn">Visit Site</a>
                <a href="https://github.com/mikey137/EmotionsAPI" target="_blank" className="btn">View Code</a>
            </div>
        </div>
    )

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
                        >   
                            contact
                        </Link>
                    </li>
                </ol>
            </div>
            <div 
                className="main-content">
                <div className="background"></div>
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
                        about
                    </div>
                    <div className="section-container">
                        <div className="paragraph-with-backdrop-boxshadow">
                            <div className="underlined-title">who am i?</div>
                            I'm in the process of tranistioning from a career in mental health to one as a software developer. I have recently completed a boot camp and I'm continuing to build my skill set by taking an advanced javascript course, as well as wokring on an NFT project. My ideal position would be one where I can learn from someone with more experience, but also be given personal resposiblities and be expected to complete tasks independently. 
                        </div>
                        <div className="about-item" onClick={() => handleDisplayAboutItem(educationContent)}>
                            <img className = "about-img" src={albert} alt="albert" />
                            education
                        </div>
                        <div className="about-item" onClick={() => handleDisplayAboutItem(technologiesContent)}>
                            <img className = "about-img" src={robot} alt="robot" />
                            technologies used
                        </div>
                        <div className="about-item" onClick={() => handleDisplayAboutItem(mentalHealthContent)}>
                            <img className = "about-img" src={mentalHealth} alt="mental health" />
                            mental health
                        </div>
                        <div className="about-item" onClick={() => handleDisplayAboutItem(coachingContent)}>
                            <img className = "about-img" src={coaching} alt="coaching" />
                            coaching
                        </div>
                    </div>
                    {displayedAboutItem}
                </Element>
                <Element name="projects" className="section projects">
                    <div className="section-title">
                        projects
                    </div>
                    <div className="section-container">
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
                        <div onClick={() => {handleButtonFail()}} 
                        className={isProjectDisplayed ? "project-title move-right" : "project-title from-right" }>
                            Under Construction
                        </div>
                    </div>
                    {displayedProject}
                </Element>
                <Element name="contact" className="section contact">
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
                </Element>
            </div>
        </div>
    )
}