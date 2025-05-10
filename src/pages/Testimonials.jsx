import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Sarah Malik',
    role: 'IT Manager',
    company: 'TechNova',
    quote: 'SoftSell made it incredibly easy to offload our unused software. We got paid fast and the process was seamless!'
  },
  {
    name: 'James Carter',
    role: 'Procurement Lead',
    company: 'BrightSoft Solutions',
    quote: 'Great service and even better support. I was impressed by how quickly we received a valuation and payout.'
  },
  {
    name: 'Ava Martinez',
    role: 'IT Manager',
    company: 'BlueTech Solutions',
    quote: 'SoftSell made it incredibly easy to turn our unused licenses into extra revenue. Super quick and professional!'
  },
  {
    name: 'Liam Patel',
    role: 'Operations Lead',
    company: 'Nimbus Corp',
    quote: 'The process was smooth and transparent. I’d highly recommend SoftSell to anyone with spare licenses.'
  },
  {
    name: 'Ava Martinez',
    role: 'IT Manager',
    company: 'BlueTech Solutions',
    quote: 'SoftSell made it incredibly easy to turn our unused licenses into extra revenue. Super quick and professional!'
  },
  {
    name: 'Sophia Johnson',
    role: 'CFO',
    company: 'GreenTech Innovations',
    quote: 'I was skeptical at first, but SoftSell delivered on their promises. Fast payment and great customer service!'
  },
  {
    name: 'Noah Brown',
    role: 'Software Asset Manager',
    company: 'CloudWave',
    quote: 'A fantastic experience from start to finish. The team was responsive and the payout was quick.'
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 500;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col justify-center h-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="flex justify-center">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-hidden no-scrollbar scroll-smooth px-2 w-full"
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] w-full bg-pink-50 dark:bg-gray-800 p-6 rounded-lg shadow-md shrink-0"
              >
                <p className="text-lg sm:text-xl italic text-gray-700 dark:text-gray-300 mb-4">"{t.quote}"</p>
                <h4 className="font-semibold text-pink-700 dark:text-pink-400 text-lg sm:text-xl">{t.name}</h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {t.role}, {t.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
