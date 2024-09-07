/* eslint-disable react/prop-types */ 

const HomeProjectBlock = ( { projectTitle, technology, para1, para2 } ) => {

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

            {/* Paragraph 1 */}
            <div className='projectDetail'>
                {para1}
            </div>

            <div className='spacer'></div>

            {/* Paragraph 2 */}
            <div className='projectDetail'>
                {para2}
            </div>
            
        </div>
    )
}

export default HomeProjectBlock