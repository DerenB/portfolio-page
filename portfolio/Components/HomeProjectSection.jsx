/* eslint-disable react/prop-types */ 

// Components
import HomeProjectBlock from "./HomeProjectBlock"
import { useTheme } from './Theme';

const homeProjectSection = () => {

    const { theme, setThemeByName } = useTheme();

    // Array of Data Dictionaries of projects
    const projectData = [
        {
            "title": "DivDat iPhone App",
            "size": 1,
            "technology": [
                { "class": 'swift', "text": "Swift", "color": "lightText"},
                { "class": 'uikit', "text": "UiKit", "color": "lightText"},
                { "class": 'storyboard', "text": "Storyboard", "color": "lightText"},
                { "class": 'xcode', "text": "XCode", "color": "lightText"}
            ],
            "paragraph1": "I was the sole developer maintaining DivDat’s iOS app. The app was built outside of the company, I added any needed new features and deployed them to the Apple Store.",
            "bullets": [
                "Added a new View that links to the company Contact Us page",
                "Changed the form State field to a dropdown menu",
                "Added form validation",
                "Tested the app through TestFlight",
                "Submitted and deployed the app to the Apple Store"
            ]
        },
        {
            "title": "DivDat AI Web Form",
            "size": 2,
            "technology": [
                { "class": 'anthropic', "text": "Anthropic", "color": "darkText"},
                { "class": 'fastapi', "text": "FastAPI", "color": "lightText"},
                { "class": 'react', "text": "ReactJS", "color": "darkText"},
                { "class": 'css', "text": "CSS", "color": "lightText"}
            ],
            "paragraph1": "Built a web form for company internal use that prompts an AI to generate a C# file based on user input. Python was used to prompt the AI and call the Anthropic API.",
            "bullets": [
                "Built the backend server for calling the AI prompt class",
                "Converted the prompt class to read from a json file instead of from the console",
                "Designed a simple frontend with React to dynamically display user inputs"
            ]
        },
        {
            "title": "Student All-In-One Web App",
            "size": 5,
            "technology": [
                { "class": 'fastapi', "text": "FastAPI", "color": "lightText"},
                { "class": 'react', "text": "ReactJS", "color": "darkText"},
                { "class": 'tailwindcss', "text": "TailwindCSS", "color": "darkText"},
                { "class": 'mongodb', "text": "MongoDB", "color": "lightText"}
            ],
            "paragraph1": "Worked as a team in school to create a web page that acts as a student all-in-one study assistant. The website included a calendar, flash cards, to-do list, and note taking.",
            "bullets": [
                "Created the Calendar frontend and backend",
                "Added a system for changing the website color theme",
                "Setup the website technology stack",
                "Helped with the Home page and Navbar",
                "Hosted the project on Digital Ocean"
            ]
        },
        {
            "title": "Portfolio Website",
            "size": 1,
            "technology": [
                { "class": 'react', "text": "ReactJS", "color": "darkText"},
                { "class": 'css', "text": "CSS", "color": "lightText"},
                { "class": 'figma', "text": "Figma", "color": "lightText"}
            ],
            "paragraph1": "Created this portfolio website with React and CSS with reusable components for future expansion.",
            "bullets": [
                "Tested layouts and colors in Figma",
                "Took design inspiration from portfolio templates",
                "Supports mobile formats",
                "Deployed to Vercel"
            ]
        },
        {
            "title": "Bookstore Storefront",
            "size": 2,
            "technology": [
                { "class": 'php', "text": "PHP", "color": "darkText"},
                { "class": 'bootstrap', "text": "Bootstrap", "color": "lightText"},
                { "class": 'mysql', "text": "MySQL", "color": "darkText"}
            ],
            "paragraph1": "My partner and I developed a bookstore website for browsing and purchasing books. Users can go through the whole process of creating and logging into an account, browsing the books, then adding their books to the cart and checking out.",
            "bullets": [
                "Built the web form for users to query the database",
                "Built the cart and checkout systems",
                "Designed the database schema",
                "Collected data from Amazon to populate MySQL database of books",
                "Hosted the project on Digital Ocean"
            ]
        }
    ]


    return (
        <div className='homeProjectSection'>

            {/* Section Header */}
            <div className={`homeProjectHeader ${theme}`}>Recent <span className={`highlight ${theme}`}>Projects</span></div>

            {/* Loop to add the Project Blocks */}
            {projectData.map((block, index) => (
                <HomeProjectBlock
                    key = {index}
                    size = {block.size}
                    projectTitle = {block.title}
                    technology = {block.technology}
                    para1 = {block.paragraph1}
                    bullets = {block.bullets}
                />
            ))}

        </div>
    )
}

export default homeProjectSection
