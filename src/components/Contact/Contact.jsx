import React from 'react';

export default function Contact() {
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Add your custom form submission logic here
        console.log('Form submitted'); // Example: Log form submission
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center min-vh-100 align-items-center bg-white">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-md-6 p-4 bg-light rounded-lg mb-3">
                            <h1 className="text-xxl text-gray-800 font-extrabold">
                                Get in touch:
                            </h1>
                            <p className="text-md text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="d-flex align-items-center mt-4 text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-gray-500"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {/* SVG Content */}
                                </svg>
                                <div className="ml-4">
                                    Acme Inc, Street, State, Postal Code
                                </div>
                            </div>

                            <div className="d-flex align-items-center mt-3 text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-gray-500"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {/* SVG Content */}
                                </svg>
                                <div className="ml-4">+44 1234567890</div>
                            </div>

                            <div className="d-flex align-items-center mt-3 text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-gray-500"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {/* SVG Content */}
                                </svg>
                                <div className="ml-4">info@acme.org</div>
                            </div>
                        </div>

                        <form
                            className="col-md-6 p-4 bg-light rounded-lg mb-3"
                            onSubmit={handleSubmit} // Attach submit handler
                        >
                            <label htmlFor="name" className="visually-hidden">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="form-control mb-3"
                            />

                            <label htmlFor="email" className="visually-hidden">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="form-control mb-3"
                            />

                            <label htmlFor="tel" className="visually-hidden">
                                Telephone Number
                            </label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="Telephone Number"
                                className="form-control mb-3"
                            />

                            <button
                                type="submit"
                                className="btn btn-primary btn-lg btn-block mt-3"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
