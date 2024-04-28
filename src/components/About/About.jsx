import React from 'react';

function About() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center min-vh-100 bg-white">
                <div className="col-lg-10">
                    <div className="p-4 bg-light rounded-lg mb-3 text-center">
                        <h1 className="text-3xl text-gray-800 font-extrabold mb-4">
                            About Us
                        </h1>
                        <div className="mx-auto" style={{ maxWidth: '800px' }}>
                            <div className="mt-4">
                                <h2 className="text-xl text-gray-700 font-semibold mb-3">
                                    Our Mission
                                </h2>
                                <p className="text-md text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet maximus
                                    metus, quis pulvinar nunc. Integer vitae ultrices odio, eget ullamcorper orci.
                                    Sed ullamcorper libero et nibh eleifend, quis lobortis est placerat. Nulla
                                    facilisi.
                                </p>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-xl text-gray-700 font-semibold mb-3">
                                    Our Values
                                </h2>
                                <p className="text-md text-gray-600">
                                    In eget lectus ut tortor ultrices bibendum. Maecenas consectetur eros et magna
                                    volutpat, vel tincidunt ligula efficitur. Integer sed urna est. Fusce malesuada
                                    turpis et lacus viverra, id cursus dolor commodo.
                                </p>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-xl text-gray-700 font-semibold mb-3">
                                    Our Vision
                                </h2>
                                <p className="text-md text-gray-600">
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                    Curae; Sed sagittis odio quis sapien pretium, vitae fermentum arcu consequat.
                                    Nulla lacinia, leo eget mollis malesuada, libero ligula fermentum elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
