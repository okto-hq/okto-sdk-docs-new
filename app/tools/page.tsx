'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

interface Tool {
  title: string
  description: string
  link?: string
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
  },
  {
    title: "Okto OAuth Token Generator",
    description: "Analyze and optimize your SDK implementation's performance.",
  },
  {
    title: "Okto Quickstart CLI",
    description: "Step-by-step guide to properly configure the SDK for your project.",
    link: "https://www.npmjs.com/package/create-okto-app"
  },
  {
    title: "ABI Encoder",
    description: "Advanced logging and debugging tools for troubleshooting.",
  },
  {
    title: "Advanced Technical Reference",
    description: "Advanced logging and debugging tools for troubleshooting.",
    link: "/tools/technical-reference"
  }
]

export default function ToolsPage() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  const [appSecret, setAppSecret] = useState("")
  const [googleIdToken, setGoogleIdToken] = useState("")
  const [authToken, setAuthToken] = useState("")
  const [error, setError] = useState("")
  const [isCopied, setIsCopied] = useState(false)

  const handleOpenChange = (open: boolean, dialogId: string) => {
    setOpenDialog(open ? dialogId : null)
  }

  const handleGetOktoToken = async () => {
    if (!appSecret || !googleIdToken) {
      setError("Please enter both Okto App Secret and Google ID Token.")
      return
    }

    try {
      const response = await fetch("https://sandbox-api.okto.tech/api/v2/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": appSecret,
        },
        body: JSON.stringify({
          id_token: googleIdToken,
        }),
      })

      const data = await response.json()

      if (data.status === "success") {
        setAuthToken(data.data.auth_token)
        setError("")
      } else {
        setError(data.message || "Failed to get Okto token")
      }
    } catch (err) {
      setError("An error occurred while fetching the Okto token")
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(authToken)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Okto Tools</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Explore our collection of powerful tools designed to enhance your experience with our SDK.
        These tools will help you develop, test, and optimize your integration efficiently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          tool.title === "Google ID Token Generator" ||
            tool.title === "Okto OAuth Token Generator" ||
            tool.title === "ABI Encoder" ? (
            <Dialog key={index} open={openDialog === tool.title} onOpenChange={(open) => handleOpenChange(open, tool.title)}>
              <DialogTrigger asChild>
                <Card className="transition-all duration-300 hover:shadow-md h-[200px] flex flex-col cursor-pointer">
                  <CardHeader className="flex-grow">
                    <CardTitle className="flex justify-between items-center">
                      {tool.title}
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="h-4 w-4" />
                        <span className="sr-only">Open {tool.title}</span>
                      </Button>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{tool.description}</CardDescription>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{tool.title}</DialogTitle>
                  <DialogDescription>
                    {tool.description}
                  </DialogDescription>
                </DialogHeader>
                {tool.title === "Google ID Token Generator" && (
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="google-client-id">Google Client ID</Label>
                      <Input id="google-client-id" placeholder="123456789-abcdefghijklmnop.apps.googleusercontent.com" />
                    </div>
                    <div>
                      <Label htmlFor="google-client-secret">Google Client Secret</Label>
                      <Input id="google-client-secret" type="password" placeholder="GOCSPX-xxxxxxxxxxxxxxxxxxxxxxxx" />
                    </div>
                    <div>
                      <Label htmlFor="google-redirect-uri">Redirect URI</Label>
                      <Input id="google-redirect-uri" placeholder="https://your-app.com/auth/callback" />
                    </div>
                    <Button type="submit">Generate Token</Button>
                  </form>
                )}
                {tool.title === "Okto OAuth Token Generator" && (
                  <form className="space-y-4">
                    {error && <p className="text-red-500">{error}</p>}
                    <div>
                      <Label htmlFor="okto-client-secret">Okto App Secret</Label>
                      <Input
                        id="okto-client-secret"
                        type="password"
                        placeholder="Enter Okto App Secret"
                        value={appSecret}
                        onChange={(e) => setAppSecret(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="google-id-token">Google ID Token</Label>
                      <Input
                        id="google-id-token"
                        type="text"
                        placeholder="Enter Google ID Token"
                        value={googleIdToken}
                        onChange={(e) => setGoogleIdToken(e.target.value)}
                      />
                    </div>
                    <Button type="button" onClick={handleGetOktoToken}>Get Okto Auth Token</Button>
                    {authToken && (
                      <div className="mt-4">
                        <div className="my-3 p-2 bg-gray-100 dark:bg-slate-800 rounded-md break-all max-w-full overflow-x-auto">{authToken}</div>
                        <Button 
                          type="button" 
                          onClick={copyToClipboard}
                          className="flex items-center gap-2"
                        >
                          {isCopied ? <Check className="h-4 w-4" /> : null}
                          {isCopied ? 'Copied!' : 'Copy Okto Auth Token to Clipboard'}
                        </Button>
                      </div>
                    )}
                  </form>
                )}
                {tool.title === "ABI Encoder" && (
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="abi-json">ABI JSON</Label>
                      <Textarea
                        id="abi-json"
                        placeholder={`[{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]`}
                        rows={5}
                      />
                    </div>
                    <div>
                      <Label htmlFor="function-name">Function Name</Label>
                      <Input id="function-name" placeholder="store" />
                    </div>
                    <div>
                      <Label htmlFor="function-params">Function Parameters (comma-separated)</Label>
                      <Input id="function-params" placeholder="123" />
                    </div>
                    <Button type="submit">Encode ABI</Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          ) : (
            <Link href={tool.link || '#'} key={index} className="group">
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
          )
        ))}
      </div>
    </div>
  )
}