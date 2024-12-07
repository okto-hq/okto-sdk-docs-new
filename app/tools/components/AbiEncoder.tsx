'use client'

import React, { useState } from 'react'
import { ethers, Contract, JsonRpcProvider } from 'ethers'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Select from '@/components/ui/select'

const providerOptions = {
  'Polygon Mainnet':'https://rpc.ankr.com/polygon',
  'Base Mainnet':'https://rpc.ankr.com/base',
  'Polygon Amoy Testnet':'https://rpc.ankr.com/polygon_amoy',
}

export default function AbiEncoder() {
  const [abi, setAbi] = useState('')
  const [contractAddress, setContractAddress] = useState('')
  const [functionName, setFunctionName] = useState('')
  const [parameters, setParameters] = useState('')
  const [providerUrl, setProviderUrl] = useState('')
  const [encodedData, setEncodedData] = useState('')
  const [error, setError] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const handleEncodeData = async () => {
    try {
      if (!abi || !contractAddress || !functionName || !providerUrl) {
        setError('Please fill in all required fields.')
        return
      }

      const abiArray = JSON.parse(abi);
      const provider = new JsonRpcProvider(providerUrl);
      const contract = new Contract(contractAddress, abiArray, provider);

      // Parse the comma-separated parameters into an array
      let paramsArray: any[] = []
      if (parameters) {
        paramsArray = parameters.split(',').map((param) => param.trim())
      }

      // Encode the function call data
      const data = contract.interface.encodeFunctionData(functionName, paramsArray)
      setEncodedData(data)
      setError('')
      console.log('Encoded Data:', data)
    } catch (err: any) {
      console.error('Encoding Error:', err)
      setError(`An error occurred while encoding the data: ${err.message}`)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const codeSnippet = `const { ethers } = require('ethers');

const iface = new ethers.Interface(ABI);
const data = iface.encodeFunctionData("function_name", [arg1, arg2, arg3, ...]);`

  const abiPlaceholder = `[
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "num",
          "type": "uint256"
        }
      ],
      "name": "store",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]`

  return (
    <div className="space-y-4 max-w-full">
      {error && (
        <div className="text-red-500 bg-red-100 p-2 rounded-md">{error}</div>
      )}
      <div>
        <Label htmlFor="abi-json">ABI JSON</Label>
        <Textarea
          id="abi-json"
          placeholder={abiPlaceholder}
          rows={5}
          value={abi}
          onChange={(e) => setAbi(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="contract-address">Contract Address</Label>
        <Input
          id="contract-address"
          placeholder="Enter Contract Address"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="function-name">Function Name</Label>
        <Input
          id="function-name"
          placeholder="Enter Function Name"
          value={functionName}
          onChange={(e) => setFunctionName(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="parameters">Parameters (comma-separated)</Label>
        <Input
          id="parameters"
          placeholder="Enter Parameters"
          value={parameters}
          onChange={(e) => setParameters(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="provider-url">Provider URL</Label>
        <Select
          id="provider-url"
          value={providerUrl}
          onChange={(e) => setProviderUrl(e.target.value)}
          options={Object.entries(providerOptions).map(([name, url]) => ({
            label: name,
            value: url,
          }))}
          placeholder="Select Provider URL"
          className="text-sm w-full"
        />
      </div>
      <Button type="button" onClick={handleEncodeData}>
        Encode Data
      </Button>
      {encodedData && (
        <div className="mt-4 space-y-3">
          <div className="my-3 p-2 bg-gray-100 dark:bg-slate-800 rounded-md break-all max-w-full overflow-x-auto text-sm">
            {encodedData}
          </div>
          <Button type="button" onClick={() => copyToClipboard(encodedData)}>
            {isCopied ? 'Copied!' : 'Copy Encoded Data to Clipboard'}
          </Button>
        </div>
      )}

      {/* Code Snippet Section */}
      <div className="mt-6 space-y-2">
        <h3 className="text-lg font-semibold">Dynamic Hex Encoding Snippet</h3>
        <div className="relative bg-gray-100 dark:bg-slate-800 p-2 rounded-md overflow-x-auto text-sm">
          <pre className="font-mono whitespace-pre">
{codeSnippet}
          </pre>
          <Button
            type="button"
            onClick={() => copyToClipboard(codeSnippet)}
            className="absolute top-2 right-2"
            size="sm"
            variant="secondary"
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
      </div>
    </div>
  )
}
