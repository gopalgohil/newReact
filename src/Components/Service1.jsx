import React from 'react';

const services = [
    {
        title: "Web Development",
        description: "Creating responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, React, and more.",
        icon: "💻",
    },
    {
        title: "UI/UX Design",
        description: "Designing user-friendly interfaces that deliver great user experiences, making your website both attractive and easy to use.",
        icon: "🎨",
    },
    {
        title: "Frontend Development",
        description: "Developing high-quality frontends for web applications using React and other modern libraries.",
        icon: "🖥️",
    },
    {
        title: "Responsive Design",
        description: "Ensuring that websites work well on all screen sizes, from mobile to desktop.",
        icon: "📱",
    },
];

const Service1 = () => {
    return (
        <div className="bg-purple-50 min-h-screen py-16 mt-8">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-purple-600">My Services</h1>
                    <p className="text-lg text-gray-700">
                        As a junior web developer, I offer a variety of services to help bring your ideas to life.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out">
                            <div className="text-4xl mb-4 text-purple-500">{service.icon}</div>
                            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <h3 className="text-3xl font-semibold mb-4">Interested in working with me?</h3>
                    <p className="text-lg mb-6 text-gray-700">
                        Whether you need a website built from scratch or updates to an existing project, I'm here to help!
                    </p>
                    <a href="#contact" className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-500 transition duration-300 ease-in-out">
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Service1;
