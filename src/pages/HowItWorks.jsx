import React from 'react';
import { RocketIcon, UploadIcon, DollarSignIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { link } from 'framer-motion/client';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const steps = [
  {
    icon: <UploadIcon className="w-10 h-10 text-pink-600" />,
    title: 'Upload License',
    description: 'Submit your software license details securely with just a few clicks.',
    link: '/upload-license'
  },
  {
    icon: <RocketIcon className="w-10 h-10 text-pink-600" />,
    title: 'Get Valuation',
    description: 'We assess the value of your license and send you a fair quote.',
    link: '/get-valuation'
  },
  {
    icon: <DollarSignIcon className="w-10 h-10 text-pink-600" />,
    title: 'Get Paid',
    description: 'Once accepted, receive payment directly and quickly.',
    link: '/get-paid'
  }
];

const HowItWorks = () => {
  return (
    <section id="howitworks" className="bg-white dark:bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {steps.map((step, index) => {
            const content = (
              <div className="bg-pink-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-400 mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            );

            return (
              <motion.div key={index} variants={item}>
                {step.link ? <Link to={step.link}>{content}</Link> : content}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
