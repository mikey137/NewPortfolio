import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact, faCss3Alt, faNode, faHtml5, faJs, faBootstrap, faGitAlt, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function Project(props){
    console.log(props)

    const handleLearnMore = () => {
        document.querySelector(`#caption${props.index}`).classList.toggle('show')
        document.querySelector(`#content${props.index}`).classList.toggle('show')
    }

    const handleMoveContentUp = () => {
        document.querySelector(`#caption${props.index}`).classList.toggle('show')
        document.querySelector(`#content${props.index}`).classList.toggle('show')
    }

    return(
        <div 
            className="project-container"
            style={{backgroundImage:`radial-gradient(at center, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 100%), url(${props.project.image})`}}
        >
            <div className="project-container-caption show" id={`caption${props.index}`}>
                <h4>{props.project.title}</h4>
                <p>{props.project.shortDescription}</p>
                <button onClick={handleLearnMore} className="btn">Learn More</button>
            </div>
            <div className="project-content" id={`content${props.index}`}>
                <FontAwesomeIcon 
                    className="project-close-icon" 
                    onClick={() => {handleMoveContentUp()}}icon={faArrowUp}
                />
                <div className="underlined-title">
                    {props.project.title}
                </div>
                <div className="regular-paragraph">
                    {props.project.longDescription}
                </div>
                {/* <div className="project-technologies-container">
                    {props.project.iconsArray.map(icon => (
                        <FontAwesomeIcon key={icon} className="project-tech-icon" icon={icon}/>
                    ))}
                </div> */}
                <div className="btn-container">
                    <a href={props.project.siteLink} target="_blank" rel="noreferrer" className="btn">Visit Site</a>
                    <a href={props.project.codeLink} target="_blank" rel="noreferrer" className="btn">View Code</a>
                </div>
            </div>   
        </div>
    )
}