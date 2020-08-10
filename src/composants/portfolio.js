import React from 'react'

const Porfolio = () => {
    return (
        <div>
            <div className="top-bar">
                <h1>portfolio</h1>
                <p><a href="#">Home</a> / Portfolio</p>
            </div>

            <div className="main-container portfolio-inner clearfix">
                <div className="portfolio-div">
                    <div className="portfolio">
                        <div className="categories-grid wow fadeInLeft">
                            <nav className="categories text-center">
                                <ul className="portfolio_filter">
                                    <li><a href="" className="active" data-filter="*">All</a></li>
                                    <li><a href="" data-filter=".photography">Photography</a></li>
                                    <li><a href="" data-filter=".logo">Logo</a></li>
                                    <li><a href="" data-filter=".graphics">Graphics</a></li>
                                    <li><a href="" data-filter=".ads">Advertising</a></li>
                                    <li><a href="" data-filter=".fashion">Fashion</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="no-padding portfolio_container clearfix">
                            <div className="col-md-4 col-sm-6  fashion logo">
                                <a href="single-project.html" className="portfolio_item">
                                    <img src="img/portfolio/01.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info">
                                                <span>Mockups in seconds</span>
                                                <em>Fashion / Logo</em>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 ads graphics">
                                <a href="single-project.html" className="portfolio_item">
                                    <img src="img/portfolio/03.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info">
                                                <span>Floating mockups</span>
                                                <em>Ads / Graphics</em>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-12 photography">
                                <a href="single-project.html" className="portfolio_item">
                                    <img src="img/portfolio/02.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info">
                                                <span>Photorealistic smartwatch</span>
                                                <em>Photography</em>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 fashion ads">
                                <a href="single-project.html" className="portfolio_item">
                                    <img src="img/portfolio/04.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info">
                                                <span>Held by hands</span>
                                                <em>Fashion / Ads</em>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 graphics ads">
                                <a href="single-project.html" className="portfolio_item">
                                    <img src="img/portfolio/05.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info">
                                                <span>Mobile devices</span>
                                                <em>Graphics / Ads</em>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-12 photography">
                                <a href="single-project.html" className="portfolio_item">
                                    <img src="img/portfolio/010.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info">
                                                <span>Photorealistic smartwatch</span>
                                                <em>Photography</em>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 graphics ads">
                                <a href="single-project.html" className="portfolio_item">
                                    <img src="img/portfolio/06.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info">
                                                <span>Mobile devices</span>
                                                <em>Graphics / Ads</em>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 graphics ads">
                                <a href="single-project.html" className="portfolio_item">
                                    <img src="img/portfolio/07.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info">
                                                <span>Mobile devices</span>
                                                <em>Graphics / Ads</em>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4 col-sm-6 graphics ads">
                                <a href="single-project.html" className="portfolio_item">
                                    <img src="img/portfolio/08.jpg" alt="image" className="img-responsive" />
                                    <div className="portfolio_item_hover">
                                        <div className="portfolio-border clearfix">
                                            <div className="item_info">
                                                <span>Mobile devices</span>
                                                <em>Graphics / Ads</em>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Porfolio