import React from 'react';


const HeroSection = () => {
    return (
        <div className="hero-section">
            {/* Top Section */}
            <div className="top-section">
                <div className="text-content">
                    <h1>Consultation, <br /> Design,  <br />& Marketing</h1>
                </div>
                <div className="form-box">
                    <h3>Get a Free <br />Consultation</h3>
                    <form>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email Address" />
                        <input type="text" placeholder="Phone Number" />
                        <input type="text" placeholder="Service" />
                        <button type="submit">Schedule Now</button>
                    </form>
                </div>
            </div>

            {/* Middle Section */}
            <div className="middle-section">
                <div className="middleLeft">
                    <h2>Not Your Average Realtor</h2>
                    <p>
                        We’ll work with you to design marketing services <br />
                        tailored specifically to your audience, ensuring you <br />
                        get the results you’re looking for.
                    </p>
                </div>

                <div className="image-container">
                    <div className="main-image">
                        <img src="/images/ThreeCircle1.svg" alt="Main Realtor" />
                    </div>
                    <div className="small-images">
                        <img src="/images/ThreeCircle2.svg" alt="Client 1" />
                        <img src="/images/ThreeCircle3.svg" alt="Client 2" />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bottom-section">

                <h2>Why Choose Us?</h2>

                <div className="underline"></div>

                <div className="features">
                    <div className="feature-item">
                        <div className="logoImg">
                            <img src="/images/paintbrush-2.svg" alt="" />
                        </div>

                        <i className="icon-placeholder" />
                        <h3>Potential ROI</h3>
                        <p>
                            With our services, we ensure a potential return on investment
                            that’s worth every penny.
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="logoImg">
                            <img src="/images/paintbrush-2.svg" alt="" />
                        </div>

                        <i className="icon-placeholder" />
                        <h3>Design</h3>
                        <p>
                            We design marketing campaigns that stand out from the competition
                            and attract the right audience.
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="logoImg">
                            <img src="/images/paintbrush-2.svg" alt="" />
                        </div>
                        
                        <i className="icon-placeholder" />
                        <h3>Marketing</h3>
                        <p>
                            Targeted marketing campaigns to generate quality leads and build a
                            strong brand presence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="background-elements">
                <div className="circle-large"></div>
                <div className="circle-small"></div>
                <div className="semi-circle"></div>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default HeroSection;
