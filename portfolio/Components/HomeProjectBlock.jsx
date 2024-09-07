/* eslint-disable react/prop-types */ 

const HomeProjectBlock = ( { projectTitle, technology, para1, para2 } ) => {

    return (
        <div className='homeProjectBlock'>
            <div className='projectHeader'>{projectTitle}</div>

            <div className='line'><div></div></div>

            <div className='projectTechnology'>
                {technology.map((tech, index) => (
                    <div key={index} className={`projectBubble ${tech.class} ${tech.color}`}>
                        {tech.text}
                    </div>
                ))}
            </div>

            <div className='projectDetail'>
                {para1}
            </div>

            <div className='spacer'></div>

            <div className='projectDetail'>
                {para2}
            </div>
        </div>
    )
}

export default HomeProjectBlock