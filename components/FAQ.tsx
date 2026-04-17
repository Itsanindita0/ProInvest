"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const items = [
  { 
    value: "item-1",
    question: "How much money do I need to invest in property?",
    answer: "It depends on the type of investment and location, but generally you can start with a small capital and scale over time.",
  },
  {
    value: "item-2",
    question: "Where can i find cash investors?",
    answer:
      "Question number five, I'm asked all the time is where can I find cash investors? Now these are people who've got money sitting in the bank doing nothing for them. You can work with these people through a Joint Venture or a Private Loan.",
  },
  { 
    value: "item-3",
    question: "How quickly can i replace my income?",
    answer: "This depends on your strategy, consistency, and reinvestment approach.",
  },
  { 
    value: "item-4",
    question: "What kind of properties do you source?",
    answer: "We source residential, commercial, and off-market investment opportunities.",
  },
  { 
    value: "item-5",
    question: "Do all properties require refurbishment works?",
    answer: "Not all properties, but some may require minor or major improvements.",
  },
  {
    value: "item-6",
    question: "What if the sale falls through?",
    answer: "We have backup strategies and support to minimize risks in such cases.",
  },
];

const FAQ = () => {
  return (
    <div className="bg-gray-100 py-24 flex justify-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl px-6"
      >

        {/* 🔥 TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm">
            Everything you need to know about our services
          </p>
        </div>

        {/* 🔥 ACCORDION */}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="space-y-4"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={item.value}
                className="bg-white rounded-2xl px-5 shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
              >
                <AccordionTrigger className="text-left text-base font-medium py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="text-sm text-gray-500 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

      </motion.div>
    </div>
  );
};

export default FAQ;