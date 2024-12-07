'use client'

import { useState } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import GoogleIdTokenGenerator from '@/app/tools/components/GoogleIdTokenGenerator'
import OktoAuthTokenGenerator from '@/app/tools/components/OktoAuthTokenGenerator'
import AbiEncoder from '@/app/tools/components/AbiEncoder'

interface Tool {
  title: string
  description: string
  link?: string
  component?: JSX.Element
}

const tools: Tool[] = [
  {
    title: 'API Explorer',
    description: 'Interactive tool to explore and test our SDK\'s API endpoints.',
    link: '/api-docs',
  },
  {
    title: 'Google ID Token Generator',
    description: 'Generate Google ID Tokens for testing purposes.',
    component: <GoogleIdTokenGenerator />,
  },
  {
    title: 'Okto OAuth Token Generator',
    description: 'Generate Okto Auth Tokens using your Google ID Token.',
    component: <OktoAuthTokenGenerator />,
  },
  {
    title: 'Okto Quickstart CLI',
    description: 'Step-by-step guide to properly configure the SDK for your project.',
    link: 'https://www.npmjs.com/package/create-okto-app',
  },
  {
    title: 'ABI Encoder',
    description: 'Encode smart contract function calls using ABI.',
    component: <AbiEncoder />,
  },
  {
    title: 'Advanced Technical Reference',
    description: 'Detailed documentation for advanced usage.',
    link: '/tools/technical-reference',
  },
]

export default function ToolsPage() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  const handleOpenChange = (open: boolean, dialogId: string) => {
    setOpenDialog(open ? dialogId : null)
  }

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Okto Dev Tools</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Explore our collection of powerful tools designed to enhance your experience with our SDK.
          These tools will help you develop, test, and optimize your integration efficiently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) =>
            tool.component ? (
              <Dialog
                key={index}
                open={openDialog === tool.title}
                onOpenChange={(open) => handleOpenChange(open, tool.title)}
              >
                <DialogTrigger asChild>
                  <Card className="transition-all duration-300 hover:shadow-md h-[200px] flex flex-col cursor-pointer">
                    <CardHeader className="flex-grow">
                      <CardTitle className="flex justify-between items-center">
                        {tool.title}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ArrowRight className="h-4 w-4" />
                          <span className="sr-only">Open {tool.title}</span>
                        </Button>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl w-full">
                  <DialogHeader>
                    <DialogTitle>{tool.title}</DialogTitle>
                  </DialogHeader>
                  {tool.component}
                </DialogContent>
              </Dialog>
            ) : (
              <Link href={tool.link || '#'} key={index} className="group">
                <Card className="transition-all duration-300 hover:shadow-md h-[200px] flex flex-col">
                  <CardHeader className="flex-grow">
                    <CardTitle className="flex justify-between items-center">
                      {tool.title}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowRight className="h-4 w-4" />
                        <span className="sr-only">Go to {tool.title}</span>
                      </Button>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  )
}
