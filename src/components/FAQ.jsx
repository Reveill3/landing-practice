import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from 'phosphor-react';
import React from 'react';

const questions = [
  {
    question: 'What is a website?',
    answer:
      'A website is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Notable examples are wikipedia.org, google.com, and amazon.com.',
  },
  {
    question: 'What is a website?',
    answer:
      'A website is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. Notable examples are wikipedia.org, google.com, and amazon.com.',
  },
];

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <div className='flex flex-col w-full'>
      <div
        className='flex justify-between cursor-pointer'
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <h2 className='subtitle'>{question}</h2>
        <CaretDown size={32} />
      </div>
      <AnimatePresence>
        {showAnswer ? (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            variants={{
              open: { opacity: 1, height: 'auto' },
              closed: { opacity: 0, height: 0 },
            }}
            exit={{ opacity: 0, height: 0 }}
            animate={showAnswer ? 'open' : 'closed'}
          >
            {answer}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className='flex flex-col bg-black justify-center items-center'>
      <div className='flex flex-col w-full max-w-4xl justify-center gap-5 items-center text-white px-10 md:px-20 py-10'>
        <h2 className='subtitle'>Frequently Asked Questions</h2>
        {questions.map((question, index) => (
          <Question key={index} {...question} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
