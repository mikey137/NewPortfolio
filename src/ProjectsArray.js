import { faGithub, faReact, faCss3Alt, faNode, faHtml5, faJs, faBootstrap} from '@fortawesome/free-brands-svg-icons'

const ProjectsArray = [
    {
        title: 'Wordle Solver',
        image: 'data:image/png;base64,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',
        shortDescription: 'is an App that solves Wordle on hard mode.',
        longDescription: "The algorithim aims to shorten the list of possible answers with each guess. It selects the word which minimizes the worst case length of the narrowed down answer list after making a guess. ",
        siteLink: 'https://wordle-solver-hardmode.herokuapp.com/',
        codeLink: 'https://github.com/mikey137/Wordle-Solver',
        iconsArray:[faReact, faCss3Alt, faGithub]
    },
    {
        title: 'Little Legumes',
        image: 'https://images.unsplash.com/photo-1571211468362-33f20cb1982f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGtpZHMlMjBwbGF5aW5nfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        shortDescription: 'is a photo sharing app designed to help parents track all of their kids precious moments.',
        longDescription: "Little Legumes is a clone of the Tinybeans app. The main feature that is recreated is an infinitely scrolling calendar which allows the user to save photos or moments from each day. Additionally, users are able to select moments and easily email them to a list of family and friends.",
        siteLink: 'https://little-legumes.herokuapp.com/',
        codeLink: 'https://github.com/mikey137/Little_Legumes_App',
        iconsArray:[faReact, faCss3Alt, faNode, faGithub]
    },
    {
        title: "The Writer's Block",
        image: 'https://images.unsplash.com/photo-1605344178743-4313131d2c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJvb2tzdG9yZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60',
        shortDescription: 'is a digital space for writers to share their ideas.',
        longDescription: "The Writer's Block uses React front end and Express back end which is connected to an SQL database. It allows users to create an account, post stories and follow other users.",
        siteLink: 'https://master--radiant-axolotl-de1247.netlify.app/',
        codeLink: 'https://github.com/mikey137/TheWritersBlockFrontEnd',
        iconsArray:[faReact, faCss3Alt, faNode, faGithub]
    },
    {
        title: 'Emotional Concepts',
        image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
        shortDescription: 'is an interactive emotions wheel.',
        longDescription: "This project is an interactive emotions wheel. It can be used by clinicians, occupational therapists, teachers and parents to help facilitate conversations about different emotional concepts with their clients, students, kids, etc. The app provides definitions, images and videos of a variety of different emotions.",
        siteLink: 'https://mikey137.github.io/EmotionsAPI/index.html',
        codeLink: 'https://github.com/mikey137/EmotionsAPI',
        iconsArray:[faHtml5, faCss3Alt, faJs,faBootstrap, faGithub]
    }
]

export default ProjectsArray