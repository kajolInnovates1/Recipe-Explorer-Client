import React from 'react';

const testimonials = [
    {
        name: "Sarah Ahmed",
        review: "This recipe app changed how I cook every day! Super easy and fun to use.",
        location: "Dhaka, Bangladesh",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "John Karim",
        review: "Loved the offline access feature! Saved me during load-shedding 😅",
        location: "Chattogram, Bangladesh",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Lima Hossain",
        review: "I tried the mango cheesecake recipe — amazing! Highly recommended app.",
        location: "Sylhet, Bangladesh",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

const Testimonials = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">“{testimonial.review}”</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
