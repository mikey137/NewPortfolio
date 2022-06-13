import { faGithub, faReact, faCss3Alt, faNode, faHtml5, faJs, faBootstrap} from '@fortawesome/free-brands-svg-icons'

const ProjectsArray = [
    {
        title: 'Little Legumes',
        image: 'https://images.unsplash.com/photo-1571211468362-33f20cb1982f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGtpZHMlMjBwbGF5aW5nfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        shortDescription: 'is a photo sharing app, designed to help parents track all of there kids precious moments.',
        longDescription: "Little Legumes is a clone of the Tiny Bean's App. The main feature that is recreated is an infinitely scrolling calendar which allows the user to save photos or moments from each day. Additionally users are able to select moments and easily email them to a list of family and friends.",
        siteLink: 'https://little-legumes.herokuapp.com/',
        codeLink: 'https://github.com/mikey137/Little_Legumes_App',
        iconsArray:[faReact, faCss3Alt, faNode, faGithub]
    },
    {
        title: "The Writer's Block",
        image: 'https://images.unsplash.com/photo-1605344178743-4313131d2c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJvb2tzdG9yZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
        shortDescription: 'is a digital space for writers to share their ideas.',
        longDescription: "The Writers Block uses React front end and Express backend which is connected to an SQL database. It allows users to create an account, post stories and follow other users.",
        siteLink: 'https://master--radiant-axolotl-de1247.netlify.app/',
        codeLink: 'https://github.com/mikey137/TheWritersBlockFrontEnd',
        iconsArray:[faReact, faCss3Alt, faNode, faGithub]
    },
    {
        title: 'Emotional Concepts',
        image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
        shortDescription: 'is an interactive emotions wheel.',
        longDescription: "This project is an interactive emotions wheel. It can be used by clinicians, occupational therapists, teachers, and parents, to help facilitate conversations about different emotional concepts with their clients, students, kids, etc. The app provides definitions, images, and videos of a variety of different emotions.",
        siteLink: 'https://mikey137.github.io/EmotionsAPI/index.html',
        codeLink: 'https://github.com/mikey137/EmotionsAPI',
        iconsArray:[faHtml5, faCss3Alt, faJs,faBootstrap, faGithub]
    }
]

export default ProjectsArray