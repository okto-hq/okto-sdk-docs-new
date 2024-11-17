'use client';

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tokens, networks } from "../components/TokenNetworkInfo";
import { enumData } from "../components/EnumData";
import { Hash, Copy, Check, Terminal } from "lucide-react";
import { generateId } from "@/utils/generateId";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

interface EnumValueProps {
  value: string;
}

const EnumValue: React.FC<EnumValueProps> = ({ value }) => {
  return (
    <Badge className="text-white">
      {value}
    </Badge>
  );
};

// Utility to shorten addresses (e.g., "0x123456...7890")
const shortenAddress = (address: string): string => {
  return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "N/A";
};

interface CopyableTextProps {
  text: string;
}

const CopyableText: React.FC<CopyableTextProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <span>{shortenAddress(text)}</span>
      {text && (
        <button onClick={handleCopy} className="text-blue-500 hover:text-blue-700">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      )}
    </div>
  );
};

interface HeadingWithAnchorProps {
  children: React.ReactNode;
  id: string;
}

const HeadingWithAnchor: React.FC<HeadingWithAnchorProps> = ({ children, id }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <h3 id={id} className="font-semibold flex items-center group">
      {children}
      <a
        href={`#${id}`}
        onClick={handleCopy}
        className="ml-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center"
        aria-label={`Copy link to ${children}`}
      >
        {copied ? <Check size={16} /> : <Hash size={16} />}
      </a>
    </h3>
  );
};

const TokenAlert: React.FC = () => {
  return (
    <Alert className="bg-yellow-100 dark:bg-yellow-800 border-l-4 border-yellow-500 dark:border-yellow-300">
      <div className="flex items-start space-x-3">
        <Terminal className="h-5 w-5 text-yellow-500 dark:text-yellow-300 mt-1" />
        <div className="flex-1">
          <AlertTitle className="text-yellow-800 dark:text-yellow-200">Important!</AlertTitle>
          <AlertDescription className="text-yellow-700 dark:text-yellow-400">
            Native tokens on chains do not have a Token Address (N/A). Please use empty strings for these tokens wherever applicable.
          </AlertDescription>
        </div>
      </div>
    </Alert>
  );
};

const Component: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Advanced Technical Reference</h1>
        <p className="text-muted-foreground mb-8">A comprehensive overview of tokens, networks, and enum values</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Token Information</CardTitle>
            <CardDescription>A list of all available tokens and their properties</CardDescription>
          </CardHeader>
          <CardContent className="max-h-64 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Token Name</TableHead>
                  <TableHead>Token Address</TableHead>
                  <TableHead>Network Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tokens.map((token, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{token.token_name}</TableCell>
                    <TableCell><CopyableText text={token.token_address} /></TableCell>
                    <TableCell>{token.network_name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Network Information</CardTitle>
            <CardDescription>A list of all available networks and their properties</CardDescription>
          </CardHeader>
          <CardContent className="max-h-64 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Network Name</TableHead>
                  <TableHead>Chain ID</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {networks.map((network, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{network.network_name}</TableCell>
                    <TableCell>{network.chain_id || "N/A"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <TokenAlert />

      <Card>
        <CardHeader>
          <CardTitle>Possible Values for Custom Types</CardTitle>
          <CardDescription>Possible values for selected types</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {enumData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                <HeadingWithAnchor id={generateId(section.key)}>
                  {section.key}
                </HeadingWithAnchor>
                <p className="text-sm text-gray-600">{section.keyDesc}</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Value</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {section.values.map((value, valueIndex) => (
                      <TableRow key={valueIndex}>
                        <TableCell><EnumValue value={value.value} /></TableCell>
                        <TableCell>{value.desc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Component;
