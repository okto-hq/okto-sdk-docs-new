import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Tool {
  title: string
  description: string
  link: string
}

const tools: Tool[] = [
  {
    title: "API Explorer",
    description: "Interactive tool to explore and test our SDK's API endpoints.",
    link: "/docs/api-reference"
  },
  {
    title: "Google ID Token Generator",
    description: "Automatically generate code snippets for common SDK operations.",
    link: "/tools/code-generator"
  },
  {
    title: "Okto OAuth Token Generator",
    description: "Analyze and optimize your SDK implementation's performance.",
    link: "/tools/performance-profiler"
  },
  {
    title: "Okto Quickstart CLI",
    description: "Step-by-step guide to properly configure the SDK for your project.",
    link: "/tools/config-wizard"
  },
  {
    title: "ABI Encoder",
    description: "Advanced logging and debugging tools for troubleshooting.",
    link: "/tools/debug-console"
  },
  {
    title: "Advanced Technical Reference",
    description: "Advanced logging and debugging tools for troubleshooting.",
    link: "/tools/technical-reference"
  }
]

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Okto Tools</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Explore our collection of powerful tools designed to enhance your experience with our SDK. 
        These tools will help you develop, test, and optimize your integration efficiently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Link href={tool.link} key={index} className="group">
            <Card className="transition-all duration-300 hover:shadow-md h-[200px] flex flex-col">
              <CardHeader className="flex-grow">
                <CardTitle className="flex justify-between items-center">
                  {tool.title}
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Go to {tool.title}</span>
                  </Button>
                </CardTitle>
                <CardDescription className="line-clamp-3">{tool.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}