/* eslint-disable react/prop-types */ 

import { useTheme } from './Theme';

const HomeProjectBlock = ( { projectTitle, size, dates, technology, para1, bullets } ) => {

    const { theme, setThemeByName } = useTheme();

    return (
        <div className={`homeProjectBlock ${theme}`}>
            
            {/* Project Title */}
            <div className={`projectHeader ${theme}`}>{projectTitle}</div>

            {/* Line */}
            <div className={`line ${theme}`}><div></div></div>

            {/* Loop of Technology Bubbles */}
            <div className='projectTechnology'>
                {technology.map((tech, index) => (
                    <div key={index} className={`projectBubble ${tech.class} ${tech.color}`}>
                        {tech.text}
                    </div>
                ))}
            </div>

            {/* Team Size */}
            <div className='projectDetail'>
                Team Size: {size}
            </div>

            {/* Date */}
            <div className='projectDetail'>
                {dates}
            </div>

            {/* Paragraph 1 */}
            <div className='projectDetail'>
                {para1}
            </div>

            <div className='spacer'></div>

            {/* Paragraph 2 */}
            <div className={`projectDetail projectBullets ${theme}`}>
                {bullets.map((item, index) => (
                    <div key={index}> <span>&#10140;</span> {item}</div>
                ))}
            </div>

        </div>
    )
}

export default HomeProjectBlock