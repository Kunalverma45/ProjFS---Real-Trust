import React from 'react'

const NewsAndSubscription = () => {
    return (
        <footer className="footer">
            <div className="aboveFooter">
                <div className="content">
                    <h2>Learn more about our listing process, as well as <br /> our additional staging and design work.</h2>
                    <button className="learn-more-btn">Learn More</button>
                </div>
            </div>

            <div className="bluePart">
                <nav className="footer-nav">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contact</a>
                </nav>
                <div className="subscribe-section">
                    <label htmlFor="email">Subscribe Us</label>
                    <input type="email" id="email" placeholder="Enter Email Address" />
                    <button className="subscribe-btn">Subscribe</button>
                </div>

            </div>


            <div className="endPart">
                <div className="copyright">
                    <p>All Rights Reserved 2023</p>
                  
                </div>
                <div className="endLogo">
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div className="social-icons">
                <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>





        </footer>
    )

}

export default NewsAndSubscription
