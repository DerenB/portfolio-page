/* eslint-disable react/prop-types */ 

const HomeProjectBlock = ( { projectTitle, size, technology, para1, bullets } ) => {

    return (
        <div className='homeProjectBlock'>
            
            {/* Project Title */}
            <div className='projectHeader'>{projectTitle}</div>

            {/* Line */}
            <div className='line'><div></div></div>

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

            {/* Paragraph 1 */}
            <div className='projectDetail'>
                {para1}
            </div>

            <div className='spacer'></div>

            {/* Paragraph 2 */}
            <div className='projectDetail projectBullets'>
                {bullets.map((item, index) => (
                    <div key={index}> <span>&#10140;</span> {item}</div>
                ))}
            </div>

        </div>
    )
}

export default HomeProjectBlock