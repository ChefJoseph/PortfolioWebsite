import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';

function Footer() {
  const popoverContent = (
    <Popover id="popover-basic">
      <Popover.Body>
       E-mail copied to clipboard
      </Popover.Body>
    </Popover>
  );
  return (
    <section className="contact-section bg-black" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="justify-content-center row gx-4 gx-lg-5">
                    <div className="col-md-5 mb-3 mb-md-0">
                        <div className="card py-1 h-100">
                            <div className="card-body text-center">
                                {/* <i className="fas fa-envelope text-primary mb-2"></i> */}
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-2 mx-auto" />
                                <div className="small text-black-50">
                                  <OverlayTrigger
                                    rootClose
                                    placement="bottom"
                                    trigger="click"
                                    overlay={popoverContent}>
                                    <Button variant="success" type="button"
                                    onClick={() =>  navigator.clipboard.writeText('jhirotsu@gmail.com')} 
                                     className="btn btn-light">
                                          JHIROTSU@GMAIL.COM
                                    </Button>
                                  </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joseph-hirotsu/" title="Linkedin">
                      <i className="fab fa-linkedin fa-xl" title="Linkedin"></i>
                    </a>
                    <a className="mx-2" target="_blank" rel="noreferrer" href="https://github.com/ChefJoseph" title="Github">
                      <i className="fab fa-github fa-xl" title="Github"></i>
                    </a>
                </div>
            </div>
        </section>
  )
}

export default Footer