import React from 'react';
import { Card, CardContent } from "@/components/ui/card"

interface PersonaDescriptionCardProps {
  iconPath?: string;
  title?: string;
  description?: string;
  whatItDoes?: string[];
  whatItIs?: string[];
  howToIdentify?: string[] | null;
}

export default function PersonaDescriptionCard({
  iconPath = "/images/okto-persona-description.svg",
  title = "Okto",
  description = "Okto refers to our company, our platform, and the suite of services we provide",
  whatItDoes = [
    "Provides the underlying infrastructure for blockchain interactions",
    "Offers tools, APIs, and wallet functionalities",
    "Acts as a bridge connecting Vendors and Users",
    "Manages the orchestration layer that simplifies blockchain complexity"
  ],
  whatItIs = [
    "Okto is the foundation of the ecosystem",
    "We handle the complex aspects of blockchain technology",
    "Our goal is to make Web3 accessible to both developers and end-users"
  ],
  howToIdentify = null
}: PersonaDescriptionCardProps) {
  return (
    <Card className="w-full max-w-4xl bg-[#F5F6FE] dark:bg-[#121212] rounded-2xl shadow-sm border-none mx-auto">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 md:w-1/3">
            <div className="flex-col mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img src={iconPath} className="m-0 w-10 h-10" alt={title} />
              </div>
              <p className="text-3xl font-bold mt-2 mb-2 dark:text-white">{title}</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 m-0">{description}</p>
          </div>
          <div className="flex-grow md:w-2/3 space-y-6">
            <div className="bg-white dark:bg-[#0D0D0D] px-3 py-1 rounded-xl">
              <p className="text-lg font-semibold mb-2 dark:text-white">What does it do?</p>
              <ul className="list-disc list-inside space-y-1 text-sm dark:text-gray-300">
                {whatItDoes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-[#0D0D0D] px-3 py-1 rounded-xl">
              <p className="text-lg font-semibold mb-2 dark:text-white">What is it?</p>
              <ul className="list-disc list-inside space-y-1 text-sm dark:text-gray-300">
                {whatItIs.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            {howToIdentify && (
              <div className="bg-white dark:bg-[#0D0D0D] px-3 py-1 rounded-xl">
                <p className="text-lg font-semibold mb-2 dark:text-white">How to identify a {title.toLowerCase()}?</p>
                <ul className="list-disc list-inside space-y-1 text-sm dark:text-gray-300">
                  {howToIdentify.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}