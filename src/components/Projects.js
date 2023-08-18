import React from 'react'
import { Button } from 'react-bootstrap'
import project2 from '../assets/img/primetime.png'
import project1 from '../assets/img/Olio.png'
import project3 from '../assets/img/LinkedinUI.png'
import project4 from '../assets/img/web3.png'

function Projects() {
  return (
    <section className="projects-section " id="projects">
        <div className="d-flex flex-column  justify-content-center" >
            <h1 className="text-white mb-5 mx-auto">Projects</h1>
            <div className="container px-4 px-lg-5">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center justify-content-center">
                    <div className="img-container col-md-10 col-xl-6 col-lg-5 justify-content-center">
                        <img className="img-fluid mb-3 mb-lg-0" src={project1} alt="..." />
                        <div className="middle">
                            <a href='https://github.com/ChefJoseph/OlioApp' target="_blank" rel="noreferrer" >
                                <Button className="text border border-0">Github</Button>
                            </a>
                        </div>
                    </div>
                    <div className=" col-md-10 col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4 className="text-white">Olio, The Olive Oil Store</h4>
                            <p className="text-white-50 mb-0">TypeScript/Rails - A TypeScript E-commerce App for an olive oil specialty store designed with Tailwind</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 px-lg-5">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center justify-content-center">
                    <div className="img-container col-md-10 col-xl-6 col-lg-5">
                        <img className="img-fluid mb-3 mb-lg-0" src={project2} alt="..." />
                        <div className="middle">
                            <a href='https://github.com/ChefJoseph/StadiumApp-Frontend' target="_blank" rel="noreferrer" >
                                <Button className="text border border-0">Github</Button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-10 col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4 className="text-white">Primetime, Mobile Fullstack Food Delivery App</h4>
                            <p className="text-white-50 mb-0">React Native/Rails - A web app created for ordering food at live sporting events, designed with accessibility in mind.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 px-lg-5">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center justify-content-center">
                    <div className="img-container col-md-10 col-xl-6 col-lg-5">
                        <img className="img-fluid mb-3 mb-lg-0" src={project3} alt="..." />
                        <div className="middle">
                            <a href='https://github.com/ChefJoseph/LinkedIn-UI' target="_blank" rel="noreferrer" >
                                <Button className="text border border-0">Github</Button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-10 col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4 className="text-white">LinkedIn UI Clone</h4>
                            <p className="text-white-50 mb-0">React - This project is a UI replica of the LinkedIn landing page and homepage using Styled-Components</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 px-lg-5">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center justify-content-center">
                    <div className="img-container col-md-10 col-xl-6 col-lg-5">
                        <img className="img-fluid mb-3 mb-lg-0" src={project4} alt="..." />
                        <div className="middle">
                            <a href='https://github.com/ChefJoseph/ETHSolidityDapp' target="_blank" rel="noreferrer" >
                                <Button className="text border border-0">Github</Button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-10 col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4 className="text-white">Web3 Solidity App</h4>
                            <p className="text-white-50 mb-0">A React app that connects to a wallet, writes data and writes contracts on the Ethereum blockchain</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects