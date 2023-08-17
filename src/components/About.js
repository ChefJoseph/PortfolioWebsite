import React from 'react'

function About() {
  return (
    <section className="about-section text-center" id="about-scroll">
        <div className="container px-4 px-lg-5">
            <div className="d-flex flex-column  justify-content-center" >
                <div className="">
                    <h1 className="text-white mb-4">About me</h1>
                    <div className="text-start">
                        <h2 className="text-white-50 mt-4 mb-4">Technical Skills</h2>
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
                        <h2 className="text-white-50 mt-4 mb-4">Professional Experience</h2>
                        <p className="text-white mb-3" >
                            Software Engineer - Japanese American National Museum, discovernikkei.org
                        </p>  
                        <p className="text-white mb-4">
                                Working remotely on an international team to redesign, update, and debug the discovernikkei.org website
                        </p>
                        <p className="text-white mb-4">
                                Contributing to the development and migration to a dynamic website by utilizing design on Figma to code JS/HTML templates, implementing acceptance testing, deploying, ensuring its maintenance, and managing version control.
                        </p>
                        <p className="text-white mb-4">
                                Technologies: Python/Django, HTML template, Redis, Docker, Postgresql, AWS, Google Analytics, Sass, Figma, Git
                        </p>
                        <h2 className="text-white-50 mt-4 mb-4">Education</h2>
                        <p className="text-white mb-3" >
                            Flatiron School, Fullstack Software Engineering
                        </p>  
                        <p className="text-white mb-4">
                            UCLA, BA, History
                        </p>
                        <h2 className="text-white-50 mt-4 mb-4">Hobbies</h2>
                        <p className="text-white mb-3" >
                            Cooking: Italian, Japanese, Korean, Mexican, Latin, Middle East, Indian cuisines
                        </p>  
                        <p className="text-white mb-3" >
                            History nerd: political, economical, and social impacts across cultures; maps and geography
                        </p>  
                        <p className="text-white mb-3" >
                            Rooting for LA-based sports teams
                        </p>
                        <p className="text-white mb-3" >
                            The outdoors: beach, mountain, nature
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
