import React from 'react';

import './App.scss';

export default function About()
{
    return (
        <section id="about" className="content-section bg-light">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>Introduction</h2>
                        <p className="lead mb-5">
                            I am a father of two toddlers aged three and two and
                            I currently work as a Lead Software Engineer at CGG.
                        </p>
                        <p className="mb-5">
                            I am driven by technology challenges and a strong desire to solve problems and implement good, well-designed solutions. I am a technology enthusiast with a current interest in home automation and IoT.
                        </p>
                        <p className="mb-5">
                            In the past I have contributed to various projects as a reverse engineer and exploit hunter for older Android devices. I have a strong interest in security and enjoy implementing good security mechanisms as much as acting a penetration tester and seeking out security weaknesses.
                        </p>
                        <p className="mb-5">
                            I am a highly competent full stack engineer with a preference to create and architect backend solutions that increase the efficiency of other developers and make their job easier and more enjoyable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}