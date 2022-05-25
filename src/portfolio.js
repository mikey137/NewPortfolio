import {React, useState} from 'react';
import './portfolio.css'
import ContactForm from './components/contactForm';
import { Link, Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faCss3Alt, faHtml5, faJs, faGitAlt, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import { faClose, faBars, faDatabase } from '@fortawesome/free-solid-svg-icons'
import headShot from './images/headShot.jpg'
import Project from './components/Project'
import ProjectsArray from './ProjectsArray'

export default function Portfolio(){
    const [isNavBarDisplayed, setIsNavBarDisplayed] = useState(false)
   
    const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

    window.onscroll = function(){
        if(window.pageYOffset > 0){
            let aboutSection = document.getElementsByClassName('section about')[0]
            let aboutDistanceFromTop = aboutSection.getBoundingClientRect().top
            let viewPortHeight = document.documentElement.clientHeight
            let imgOpacity = map(aboutDistanceFromTop, viewPortHeight, 1, 1, 0.15)
            document.getElementsByClassName('background')[0].style.opacity = imgOpacity > 0.15 ? imgOpacity : 0.15
        }
    }

    return(
        <div className="outer">
            <FontAwesomeIcon
                onClick={() => setIsNavBarDisplayed(!isNavBarDisplayed)}
                icon={isNavBarDisplayed ? faClose : faBars}
                className="navbar-icon" 
            />
            <div className={isNavBarDisplayed ? "navbar-displayed" : "navbar"}>
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
                        Michael Hulme
                    </div>
                    <div className="landing-subtitle">
                        Software Developer
                    </div>
                </Element>
                <Element name="about" className="section about">
                    <div className="section-title">
                        about me
                    </div>
                    <div className="about-wrapper">
                        <div className="about-me-p-wrapper">
                            <p>
                                I’m a naturally curious person who is passionate about understanding how things work.
                            </p>
                            <p>
                                Currently I’m trying to learn everything I can about UI design, react, node, databases, and how they are all interconnected.
                            </p>
                            <p>
                                Outside of coding you’ll find me dreaming about basketball and jiu jitsu or spending time with my kids.
                            </p>
                        </div>
                        <div className="about-content-wrapper">
                            <div className="about-item-border">
                                <div className="underlined-title">
                                    education
                                </div>
                                <div className="school">
                                    <h3>University of North Carolina, Wilmington</h3>
                                    <div className="sub-title">
                                        Bachelor of Science in Applied Mathematics
                                    </div>
                                </div>
                                <div className="school">
                                    <h3>Bridgewater State University</h3>
                                    <div className="sub-title">
                                        Master of Science in Strength and Conditioning
                                    </div>
                                </div>
                                <div className="school">
                                    <h3>Deep Dive Learning Academy</h3>
                                    <div className="sub-title">Coding bootcamp graduate</div>
                                </div>
                            </div>  
                            <div className="about-item-border">
                                <div className="underlined-title">
                                    Technologies Used
                                </div>
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
                                    <div className="tech-container">
                                        <FontAwesomeIcon className="tech-icon" icon={faDatabase}/>
                                        <div className="regular-paragraph">Postgres SQL &amp;  MongoDb</div>
                                    </div>    
                                </div>
                            </div> 
                            <div className="about-item-border">
                                <div className="underlined-title">
                                    soft Skills
                                </div>
                                <div className="school">
                                    <h3>Communication</h3>
                                    <div className= 'soft-skills-p'>
                                        I have seven years of experience working at a psychiatric hospital. The clients I worked with were often limited in their ability to communicate, they struggled to understand others and express themselves in a meaningful way. This experience helped me gain a deeper understanding of effective communication.  
                                    </div>
                                </div>
                                <div className="school">
                                    <h3>Problem Solving</h3>
                                    <div className="soft-skills-p">
                                        I enjoy working on difficult and challenging problems. As an undergrad I did a research project on Fermat's Last Theorom, in part because it was one of the most challenging problems in mathematics. 
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    <ContactForm></ContactForm>
                </Element>
            </div>
        </div>
    )
}