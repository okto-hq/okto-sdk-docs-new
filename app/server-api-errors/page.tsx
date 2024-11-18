'use client';

import * as React from "react"
import { AlertCircle, Code } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const apiErrors = [
  {
    name: "User Authentication API",
    description: "Handles user authentication and authorization processes.",
    errors: [
      { 
        code: "AUTH001", 
        message: "Invalid credentials", 
        description: "The provided username and password combination is incorrect or does not exist in our system."
      },
      { 
        code: "AUTH002", 
        message: "Token expired", 
        description: "The authentication token has expired. Please request a new token to continue."
      },
      { 
        code: "AUTH003", 
        message: "User not found", 
        description: "The requested user account does not exist in our database."
      },
    ],
  },
  {
    name: "Data Retrieval API",
    description: "Manages data retrieval operations from our databases.",
    errors: [
      { 
        code: "DATA001", 
        message: "Database connection failed", 
        description: "Unable to establish a connection with the database. This could be due to network issues or database server downtime."
      },
      { 
        code: "DATA002", 
        message: "Query timeout", 
        description: "The database query took too long to execute and timed out. This may indicate a need for query optimization."
      },
      { 
        code: "DATA003", 
        message: "Invalid data format", 
        description: "The data retrieved does not match the expected format or schema."
      },
    ],
  },
  {
    name: "Network Operations API",
    description: "Handles network-related operations and diagnostics.",
    errors: [
      { 
        code: "NET001", 
        message: "Network unreachable", 
        description: "The target network or host is currently unreachable. This could be due to network outages or firewall restrictions."
      },
      { 
        code: "NET002", 
        message: "DNS resolution failed", 
        description: "Unable to resolve the domain name to an IP address. This could indicate DNS server issues or an invalid domain name."
      },
      { 
        code: "NET003", 
        message: "Connection refused", 
        description: "The target host actively refused the connection attempt. This may be due to the service being down or blocked."
      },
    ],
  },
]

export default function APIErrorPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Server Error Reference</h1>
      <p className="text-muted-foreground mb-8">
        This page lists out potential errors that can occur when using our Server APIs. 
        Each section details specific errors for different API categories.
      </p>
      
      <div className="space-y-8">
        {apiErrors.map((api) => (
          <Card key={api.name} className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl">{api.name}</CardTitle>
              <CardDescription className="text-base">{api.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {api.errors.map((error, index) => (
                  <AccordionItem value={`item-${index}`} key={error.code}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        <span className="font-semibold">{error.code}: {error.message}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">{error.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">
                            <Code className="mr-1 h-3 w-3" />
                            Error Code
                          </Badge>
                          <span className="text-sm font-mono">{error.code}</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}