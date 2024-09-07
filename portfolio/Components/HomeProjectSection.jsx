/* eslint-disable react/prop-types */ 

import HomeProjectBlock from "./HomeProjectBlock"

const homeProjectSection = () => {

    const projectData = [
        {
            "title": "DivDat iPhone App",
            "technology": [
                { "class": 'swift', "text": "Swift", "color": "lightText"},
                { "class": 'uikit', "text": "UiKit", "color": "lightText"},
                { "class": 'xcode', "text": "XCode", "color": "lightText"}
            ],
            "paragraph1": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.",
            "paragraph2": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu."
        },
        {
            "title": "DivDat AI Web Form",
            "technology": [
                { "class": 'anthropic', "text": "Anthropic", "color": "darkText"},
                { "class": 'fastapi', "text": "FastAPI", "color": "lightText"},
                { "class": 'react', "text": "ReactJS", "color": "darkText"},
                { "class": 'css', "text": "CSS", "color": "lightText"}
            ],
            "paragraph1": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.",
            "paragraph2": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu."
        },
        {
            "title": "Portfolio Website",
            "technology": [
                { "class": 'react', "text": "ReactJS", "color": "darkText"},
                { "class": 'css', "text": "CSS", "color": "lightText"},
                { "class": 'figma', "text": "Figma", "color": "lightText"}
            ],
            "paragraph1": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.",
            "paragraph2": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu."
        },
        {
            "title": "Student All-In-One Web App",
            "technology": [
                { "class": 'fastapi', "text": "FastAPI", "color": "lightText"},
                { "class": 'react', "text": "ReactJS", "color": "darkText"},
                { "class": 'tailwindcss', "text": "TailwindCSS", "color": "darkText"},
                { "class": 'mongodb', "text": "MongoDB", "color": "lightText"}
            ],
            "paragraph1": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.",
            "paragraph2": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu."
        },
        {
            "title": "Bookstore Storefront",
            "technology": [
                { "class": 'php', "text": "PHP", "color": "darkText"},
                { "class": 'bootstrap', "text": "Bootstrap", "color": "lightText"},
                { "class": 'mysql', "text": "MySQL", "color": "darkText"}
            ],
            "paragraph1": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.",
            "paragraph2": "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu."
        }
    ]


    return (
        <div className='homeProjectSection'>
            <div className='homeProjectHeader'>Recent <span className='highlight'>Projects</span></div>

            {projectData.map((block, index) => (
                <HomeProjectBlock
                    key = {index}
                    projectTitle = {block.title}
                    technology = {block.technology}
                    para1 = {block.paragraph1}
                    para2 = {block.paragraph2}
                />
            ))}

        </div>
    )
}

export default homeProjectSection