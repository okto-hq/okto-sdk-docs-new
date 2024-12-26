'use client'

import { Accordion, AccordionItem } from "@nextui-org/react";
import { useTheme } from "next-themes";

const faqs = [
  {
    question: `Why do I receive an "Unauthorized: vendor of provided apiKey does not exist" error?`,
    answer: "This error occurs when the API key or client ID is incorrect or mismatched. Ensure that you are using the correct API key provided by Okto and verify your environment variables."
  },
  {
    question: "What should I do if I encounter a \"504 Gateway Timeout\" error while executing a raw transaction?",
    answer: "Verify your transaction payload and ensure all required parameters are included. If the issue persists, contact Okto support on Discord with the trace ID for further investigation."
  },
  {
    question: "Why are my token transfers failing on different networks?",
    answer: "Make sure that the minimum transaction value is 1 USD. On some chains, your transaction may fail if the value is too low. Verify your transaction payload, ensure required parameters are included, and contact support with the trace ID if needed."
  },
  {
    question: "Why does my transaction fail with \"Nonce expired\" on Solana Devnet?",
    answer: "Connect with the Okto team to help you with this issue."
  },
  {
    question: "Why does my sponsored order fail due to insufficient balance in the sponsor wallet?",
    answer: "Sponsored orders require sufficient balance in the sponsor wallet to complete the transaction. Ensure the wallet has the necessary balance and confirm transaction type compatibility."
  },
  {
    question: "What is the minimum order value for transactions, and why does my order fail if it is too low?",
    answer: "Transactions with a value less than 1 USD are not supported. Increase the transaction value to meet the minimum requirement."
  },
  {
    question: "How can I resolve issues with JWT authentication and IP address whitelisting?",
    answer: "Ensure your JWT token is correctly generated and not expired, and confirm that your application server's IP address is whitelisted. You will need to contact Okto support to get your IP address whitelisted."
  },
  {
    question: "Why are my NFT transfers failing?",
    answer: "NFT transfers on Okto require you to get your collection whitelisted. Connect with the Okto team to help you with this issue."
  },
  {
    question: "What should I do if I suspect an Okto API issue?",
    answer: "Collect relevant details such as network name, transaction payload, and error message. Contact Okto support on our Discord server with this information for further investigation."
  }
];

export default function FAQPage() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-[#1A1A1E]' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">
          Frequently Asked Questions
        </h1>
        <Accordion showDivider={true} variant="bordered" selectionMode="single">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              aria-label={faq.question}
              title={faq.question}
            >
              <p className="text-foreground-600">
                {faq.answer}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
