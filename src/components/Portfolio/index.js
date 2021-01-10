import React, { Component } from 'react';
import Project1 from '../../img/soma-kitchen.png';
import Project2 from '../../img/law-firm.png';
// import Project3 from '../../img/weather-dashboard.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Portfolio</h1>
                <div className="hr-line line2 glass">
                    <div className="inner2 inner3"/>
                </div>
                <div className="container">

                    <div className="work__img glass">
                        <div className="img-hover">
                            <img src={Project1} className="img-port" alt=""/>
                        </div>
                        
                        <div className="pic-info">
                            <div className="content">
                                <h4>Soma Kitchen</h4>
                                <p>A local restaurant in Downtown Los Angeles requested a new modern look for the site.</p>
                                <p><span className="tech-used">Tech Used:</span> JavaScript, jQuery, Restful API, Node.js, Express.js, MySQL </p>
                                <a href="https://github.com/zcorpuz/soma_kitchen" className="footer__icon"><i className='fab fa-github'></i></a>
                                <a href="https://protected-everglades-09109.herokuapp.com/" className="footer__icon"><i className='fas fa-external-link-alt'></i></a>
                            </div>
                        </div>
                    </div>


                    <div className="work__img glass">
                        <div className="img-hover">
                            <img src={Project2} alt=""/>
                        </div>
                        <div className="pic-info">
                            <div className="content">
                                <h4>Soma Kitchen</h4>
                                <p>A local restaurant in Downtown Los Angeles requested a new modern look for the site.</p>
                                <p><span className="tech-used">Tech Used:</span> JavaScript, jQuery, Restful API, Node.js, Express.js, MySQL </p>
                                <a href="https://github.com/zcorpuz/soma_kitchen" className="footer__icon"><i className='fab fa-github'></i></a>
                                <a href="https://protected-everglades-09109.herokuapp.com/" className="footer__icon"><i className='fas fa-external-link-alt'></i></a>
                            </div>
                        </div>
                    </div>


                    <div className="work__img glass">
                        <div className="img-hover">
                            <img src={Project2} alt=""/>
                        </div>
                        <div className="pic-info">
                            <div className="content">
                                <h4>Soma Kitchen</h4>
                                <p>A local restaurant in Downtown Los Angeles requested a new modern look for the site.</p>
                                <p><span className="tech-used">Tech Used:</span> JavaScript, jQuery, Restful API, Node.js, Express.js, MySQL </p>
                                <a href="https://github.com/zcorpuz/soma_kitchen" className="footer__icon"><i className='fab fa-github'></i></a>
                                <a href="https://protected-everglades-09109.herokuapp.com/" className="footer__icon"><i className='fas fa-external-link-alt'></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="work__img glass">
                        <div className="img-hover">
                            <img src={Project2} alt=""/>
                        </div>
                        <div className="pic-info">
                            <div className="content">
                                <h4>Soma Kitchen</h4>
                                <p>A local restaurant in Downtown Los Angeles requested a new modern look for the site.</p>
                                <p><span className="tech-used">Tech Used:</span> JavaScript, jQuery, Restful API, Node.js, Express.js, MySQL </p>
                                <a href="https://github.com/zcorpuz/soma_kitchen" className="footer__icon"><i className='fab fa-github'></i></a>
                                <a href="https://protected-everglades-09109.herokuapp.com/" className="footer__icon"><i className='fas fa-external-link-alt'></i></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
                        











/* 
                    <a href="https://github.com/zcorpuz/behlendorfLaw">
                        <img src={Project1} className="po1" alt="ramdom project pic"/>
                    </a>
                </div>
                <div className="port-out port2 glass">
                    <a href="https://github.com/zcorpuz/soma_kitchen">
                        <img src={Project2} className="po1" alt="ramdom project pic"/>
                    </a>
                </div>
                <div className="port-out port3 glass">
                    <a href="https://github.com/mairagee524/weather-dashboard">
                        <img src={Project3} className="po1" alt="ramdom project pic"/>
                    </a>
                </div>








                <section class="work section" id="portfolio">
                    <h2 class="section-title">My Portfolio</h2>
                    <h4 class="portfolio-blurb">If on a desktop, feel free to hover over each image to learn what each application does and what technologies were used. If you are on a mobile device, feel free to click on the image itself for more information about each application. </h4>
                    <div class="container bd-grid">
                        <div class="work__img">
                            <div class="img-hover">
                                <img src="assets/img/soma-kitchen.png" alt="">
                            </div>
                            <div class="pic-info">
                                <div class="content">
                                    <h4>Soma Kitchen</h4>
                                    <p>A local restaurant in Downtown Los Angeles requested a new modern look for the site.</p>
                                    <p><span class="tech-used">Tech Used:</span> JavaScript, jQuery, Restful API, Node.js, Express.js, MySQL </p>
                                    <a href="https://github.com/zcorpuz/soma_kitchen" class="footer__icon"><i class='bx bxl-github bx-tada-hover bx-md'></i></a>
                                    <a href="https://protected-everglades-09109.herokuapp.com/" class="footer__icon"><i class='bx bx-link bx-tada-hover bx-md'></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="work__img">
                            <div class="img-hover">
                                <img src="assets/img/law-firm.png" alt="">
                            </div>
                            <div class="pic-info">
                                <div class="content">
                                    <h4>Behlendor Law Offices</h4>
                                    <p>A local law firm seeks to increase online presence.</p>
                                    <p><span class="tech-used">Tech Used:</span> Materialize, JavaScript, jQuery, Twitter API, OpenLayer API</p>
                                    <a href="https://github.com/zcorpuz/behlendorfLaw" class="footer__icon"><i class='bx bxl-github bx-tada-hover bx-md'></i></a>
                                    <a href="https://zcorpuz.github.io/behlendorfLaw/" class="footer__icon"><i class='bx bx-link bx-tada-hover bx-md'></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="work__img">
                            <div class="img-hover">
                                <img src="assets/img/weather-dashboard.png" alt="">
                            </div>
                            <div class="pic-info">
                                <div class="content">
                                    <h4>Weather Dashboard</h4>
                                    <p>Enter a city and look at the forecast for the next 5 days.</p>
                                    <p><span class="tech-used">Tech Used:</span> JavaScript, jQuery, Web API (OpenWeatherMap), AJAX</p>
                                    <a href="https://github.com/mairagee524/weather-dashboard" class="footer__icon"><i class='bx bxl-github bx-tada-hover bx-md'></i></a>
                                    <a href="https://mairagee524.github.io/weather-dashboard/" class="footer__icon"><i class='bx bx-link bx-tada-hover bx-md'></i></a>
                                </div>
                            </div>
                        </div>

            </div> */ 



        )
    }
}
    
export default Portfolio;