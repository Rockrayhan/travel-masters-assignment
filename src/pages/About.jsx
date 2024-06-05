import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto p-6">
            <section className="text-center my-10">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Welcome to our blog! We are passionate about sharing knowledge, insights, and stories
                    that inspire and inform. Our team is dedicated to providing you with high-quality content
                    that enriches your mind and soul.
                </p>
            </section>

            <section className="my-10 bg-gray-100 p-10 rounded-lg shadow-lg">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Our History</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Founded in 2010, our blog started as a small project to share personal stories and insights.
                    Over the years, it has grown into a platform with a diverse range of topics and a vibrant community
                    of readers. Our journey has been fueled by passion, dedication, and the continuous support of our audience.
                </p>
            </section>

            <section className="my-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Our Team</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        { name: 'John Doe', role: 'Editor-in-Chief', image: 'https://via.placeholder.com/150', bio: 'John is a seasoned writer with over 10 years of experience in the industry.' },
                        { name: 'Jane Smith', role: 'Senior Writer', image: 'https://via.placeholder.com/150', bio: 'Jane specializes in technology and innovation, bringing you the latest updates.' },
                        { name: 'Mark Johnson', role: 'Content Strategist', image: 'https://via.placeholder.com/150', bio: 'Mark is the brains behind our content strategy, ensuring we deliver value.' },
                    ].map((member, index) => (
                        <div key={index} className="card w-80 bg-base-100 shadow-xl transition-transform transform hover:scale-105">
                            <figure className="px-10 pt-10">
                                <img src={member.image} alt={member.name} className="rounded-full w-24 h-24"/>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="card-title text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                                <p className="text-gray-600">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-10 bg-gray-100 p-10 rounded-lg shadow-lg">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Testimonials</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        { name: 'Alice Brown', feedback: 'This blog has been a tremendous source of inspiration for me. The content is always insightful and engaging.' },
                        { name: 'Michael Green', feedback: 'I love the variety of topics covered here. There is always something new to learn.' },
                        { name: 'Sarah Wilson', feedback: 'The community around this blog is amazing. I have made many friends and learned a lot from the discussions.' },
                    ].map((testimonial, index) => (
                        <div key={index} className="card w-80 bg-base-100 shadow-xl p-6 transition-transform transform hover:scale-105">
                            <p className="text-lg text-gray-600 mb-4 italic">"{testimonial.feedback}"</p>
                            <h4 className="text-md font-bold text-gray-800">{testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </section>

            <section className="my-10 text-center">
                <h2 className="text-4xl font-semibold text-gray-800 mb-6">Join Our Community</h2>
                <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
                    Be a part of our growing community of like-minded individuals. Subscribe to our newsletter,
                    follow us on social media, and join the conversation.
                </p>
                <button className="btn btn-primary btn-lg">Subscribe Now</button>
            </section>
        </div>
    );
};

export default About;
