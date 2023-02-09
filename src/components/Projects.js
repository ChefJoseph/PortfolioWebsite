import React from 'react'
import project2 from '../assets/img/primetime.png'
import project1 from '../assets/img/Olio.png'
import project3 from '../assets/img/LinkedinUI.png'
import project4 from '../assets/img/web3.png'

function Projects() {
  return (
    <section className="projects-section " id="projects">
        <div className="container px-4 px-lg-5">
            <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div className="img-container col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={project1} alt="..." /></div>
                <div className="col-xl-4 col-lg-5">
                    <div className="featured-text text-center text-lg-left">
                        <h4 className="text-white">Olio, The Olive Oil Store</h4>
                        <p className="text-white-50 mb-0">TypeScript/Rails - A TypeScript E-commerce App for an olive oil specialty store designed with Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container px-4 px-lg-5">
            <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={project2} alt="..." /></div>
                <div className="col-xl-4 col-lg-5">
                    <div className="featured-text text-center text-lg-left">
                        <h4 className="text-white">Primetime, Fullstack Food Delivery App</h4>
                        <p className="text-white-50 mb-0">React Native/Rails - A web app created for ordering food at live sporting events, designed with accessibility in mind.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container px-4 px-lg-5">
            <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={project3} alt="..." /></div>
                <div className="col-xl-4 col-lg-5">
                    <div className="featured-text text-center text-lg-left">
                        <h4 className="text-white">LinkedIn UI Clone</h4>
                        <p className="text-white-50 mb-0">React - This project is a UI replica of the LinkedIn landing page and homepage using Styled-Components</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container px-4 px-lg-5">
            <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={project4} alt="..." /></div>
                <div className="col-xl-4 col-lg-5">
                    <div className="featured-text text-center text-lg-left">
                        <h4 className="text-white">Web3 Solidity App</h4>
                        <p className="text-white-50 mb-0">A React app that connects to a wallet, writes data and writes contracts on the Ethereum blockchain</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects