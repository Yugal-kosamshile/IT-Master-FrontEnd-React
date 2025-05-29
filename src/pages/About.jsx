import React from "react";

const AboutUs = () => {
    return (
        <div className="about-page">

            {/* Section 1 */}
            <section className="section-about bg-light">

                <div className="my-0">
                    <div className="mb-5 welcome-about position-relative overflow-hidden">

                        {/* Video Background */}
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="video-bg"
                        >
                            <source src="/bg.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Content */}
                        <div className="text-center position-relative z-1">
                            <h1 className="about-heading mb-5">Welcome To Where Possibilities Begin</h1>
                            <img
                                src="/topicon.png"
                                alt="logo"
                                style={{ height: "250px", width: "auto" }}
                                className="mb-3 mx-auto d-block"
                            />
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row align-items-center">

                        {/* Who we are section */}
                        <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                            <h1 className="about-heading mt-4">Who We Are</h1>
                            <blockquote className="about-quote">
                                "Empowering learners everywhere, one course at a time."
                            </blockquote>
                            <p>
                                Welcome to the Online Course Management System! Our platform is
                                dedicated to making education accessible, engaging, and effective
                                for everyone.
                            </p>
                            <p>
                                Whether you're a student eager to learn new skills or an instructor
                                passionate about sharing knowledge, our system provides the tools
                                you need to succeed.
                            </p>
                            <p><strong>Features:</strong></p>
                            <ul>
                                <li>Browse and enroll in a variety of courses</li>
                                <li>Track your learning progress</li>
                                <li>Interactive lessons and resources</li>
                                <li>Connect with instructors and peers</li>
                            </ul>
                            <p>
                                Join us on this journey to transform the way you learn and teach.
                                Together, we can build a brighter future through education!
                            </p>
                        </div>
                        {/* image section */}
                        <div className="col-12 col-lg-6 text-center">
                            <img
                                src="https://i.pinimg.com/1200x/4d/a3/7f/4da37f4c3bd17e344cf93b5ea4ca73dc.jpg"
                                alt="Online Course"
                                className="img-fluid about-image rounded"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="section-skills text-white">
                <div className="container text-center">

                    <h2 className="about-heading text-light">Skills are the Key to Unlocking Potential</h2>
                    <p className="mt-3">
                        Whether you want to learn a new skill, train your teams, or share what
                        you know with the world, you’re in the right place. As a leader in
                        online learning, we’re here to help you achieve your goals and
                        transform your life.
                    </p>
                    <img
                        src="https://i.pinimg.com/1200x/c5/1a/f9/c51af9c54384f79166751cfe24abc79c.jpg"
                        alt="Skills Learning"
                        className="img-fluid rounded my-4 skills-image"
                    />
                </div>
            </section>

            {/* Section 3 */}
            <section className="section-impact bg-white py-5">
                <div className="container text-center">
                    <h2 className="about-heading">Creating Impact Around the World</h2>
                    <p className="mb-4">
                        With our global catalog spanning the latest skills and topics,
                        people and organizations everywhere are able to adapt to change and thrive.
                    </p>

                    <div className="impact row p-5">
                        <div className="col-12 col-md-4 mb-4">
                            <h3>79M+</h3>
                            <p>Learners</p>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <h3>85K</h3>
                            <p>Instructors</p>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <h3>250K</h3>
                            <p>Courses</p>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <h3>1.1B+</h3>
                            <p>Enrollments</p>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <h3>75</h3>
                            <p>Languages</p>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <h3>17K+</h3>
                            <p>Enterprise Clients</p>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default AboutUs;
