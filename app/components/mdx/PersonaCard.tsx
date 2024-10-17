import { ArrowDownRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PersonaCardProps {
  icon: string
  title: string
  description: string
}

export default function PersonaCard({ 
  icon = "/images/okto-persona.svg",
  title = "Default Title",
  description = "This is a default description for the InfoCard component."
}: PersonaCardProps) {
  return (
    <Card className="w-full max-w-sm bg-[#F5F6FE] dark:bg-[#121212] border-none rounded-2xl shadow-sm">
      <CardHeader>
        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
          <img src={icon} width={60} className="m-0" alt={title} />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <h3 className="text-xl font-semibold my-0 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="p-0 h-auto text-[#5166EE] dark:text-[#7B8AFF] no-underline hover:no-underline">
          <Link href="#dive-deep-into-what--how-each-personas-work" className="no-underline flex items-center">
            Know more
            <ArrowDownRight className="ml-1 w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}