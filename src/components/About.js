import React from 'react'

function About() {
  return (
    <section className="about-section text-center" id="about-scroll">
        <div className="container px-4 px-lg-5">
            <div className="d-flex flex-column  justify-content-center" >
                <div className="">
                    <h1 className="text-white mb-4">About</h1>
                    <div className="text-start">
                        <h2 className="text-white-50 mt-4">Technical Skills</h2>
                        <p className="text-white mb-3">
                            Frontend: JavaScript, TypeScript, React, HTML, React Native, Swift, Redux, Context API
                        </p>
                        <p className="text-white mb-3">
                            Backend: Ruby, Ruby on Rails, SQL, SQLite, PostgreSQL, REST, JSON
                        </p>
                        <p className="text-white mb-3">
                            Styling: CSS, Tailwind, Bootstrap, Sass, Styled-Components, Figma
                        </p>    
                        <p className="text-white mb-4">
                            Currently learning: Python, Flask, Web3, Data structures and Algorithms, Machine learning, Testing
                        </p>  
                        <h2 className="text-white-50 mt-4">Education</h2>
                        <p className="text-white mb-1" >
                            Flatiron School, Fullstack Software Engineering
                        </p>  
                        <p className="text-white">
                            UCLA, BA
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About