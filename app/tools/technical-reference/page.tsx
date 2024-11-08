import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const EnumValue = ({ value }: any) => {
  const getColor = () => {
    switch (value.toLowerCase()) {
      case 'withdrawal':
      case 'transfer':
        return 'bg-blue-500'
      case 'success':
        return 'bg-green-500'
      case 'failed':
        return 'bg-red-500'
      case 'running':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <Badge className={`${getColor()} text-white`}>{value}</Badge>
  )
}

export default function Component() {
  const tokens = [
    {
      token_name: "SOL_DEVNET",
      token_address: "",
      network_name: "SOLANA_DEVNET"
    },
    {
      token_name: "ETH_GOERLI",
      token_address: "0x7af963cF6D228E564e2A0aA0DdBF06210B38615D",
      network_name: "ETHEREUM_GOERLI"
    },
    {
      token_name: "USDC_GOERLI",
      token_address: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
      network_name: "ETHEREUM_GOERLI"
    }
  ]

  const networks = [
    {
      network_name: "BASE",
      chain_id: "8453"
    },
    {
      network_name: "ETHEREUM_MAINNET",
      chain_id: "1"
    },
    {
      network_name: "SOLANA_DEVNET",
      chain_id: ""
    }
  ]

  const enumData = [
    {
      key: "ORDER_TYPE",
      keyDesc: "Specifies the type of order.",
      apiUrls: [
        "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/orders",
        "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/nft/order_details"
      ],
      values: [
        { value: "MINT", desc: "Indicates that the order is for minting a new NFT." },
        { value: "NFT_TRANSFER", desc: "Indicates that the order is for transferring an NFT to another address." },
        { value: "TOKEN_TRANSFER_EXECUTE", desc: "Indicates that the order is for executing a token transfer transaction." },
        { value: "EXECUTE_RAW_TX", desc: "Indicates that the order is for executing a raw blockchain transaction." }
      ]
    },
    {
      key: "OPERATION_TYPE",
      keyDesc: "Specifies the type of operation being performed.",
      apiUrls: [
        "https://docs.okto.tech/api-docs#tag/client/POST/api/v1/nft/transfer"
      ],
      values: [
        { value: "MINT", desc: "Indicates that the order is for minting a new NFT." },
        { value: "NFT_TRANSFER", desc: "Indicates that the order is for transferring an NFT to another address." },
        { value: "TOKEN_TRANSFER_EXECUTE", desc: "Indicates that the order is for executing a token transfer transaction." },
        { value: "EXECUTE_RAW_TX", desc: "Indicates that the order is for executing a raw blockchain transaction." }
      ]
    },
    {
      key: "STATUS",
      keyDesc: "Represents the current status of the order or transaction.",
      apiUrls: [
        "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/orders",
        "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/nft/order_details",
        "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/rawtransaction/status"
      ],
      values: [
        { value: "WAITING_INITIALIZATION", desc: "The order is in queue and has not yet started processing." },
        { value: "CREATED", desc: "The order has been initialized and is ready for processing." },
        { value: "RUNNING", desc: "The transaction is being processed on the blockchain." },
        { value: "WAITING_FOR_SIGNATURE", desc: "The system is in the process of signing the transaction payload." },
        { value: "REJECTED", desc: "The order was rejected and will not be processed further." },
        { value: "SUCCESS", desc: "The order was successfully processed and confirmed on the blockchain." },
        { value: "FAILED", desc: "The order failed during processing." }
      ]
    },
    {
      key: "ENTITY_TYPE",
      keyDesc: "Defines the type of NFT or asset involved in the transaction.",
      apiUrls: [
        "https://docs.okto.tech/api-docs#tag/client/GET/api/v1/nft/order_details"
      ],
      values: [
        { value: "ERC721", desc: "An ERC-721 standard NFT on EVM-compatible blockchains." },
        { value: "ERC1155", desc: "An ERC-1155 standard NFT on EVM-compatible blockchains." },
        { value: "NFT", desc: "An NFT on non-EVM blockchains." }
      ]
    }
  ]

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Advanced Technical Reference</h1>
        <p className="text-muted-foreground mb-8">A comprehensive overview of tokens, networks, and enum values</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Token Information</CardTitle>
            <CardDescription>A list of all available tokens and their properties</CardDescription>
          </CardHeader>
          <CardContent>
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
                    <TableCell>{token.token_address || "N/A"}</TableCell>
                    <TableCell>{token.network_name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Network Information</CardTitle>
            <CardDescription>A list of all available networks and their properties</CardDescription>
          </CardHeader>
          <CardContent>
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

      <Card>
        <CardHeader>
          <CardTitle>Enum Values</CardTitle>
          <CardDescription>Possible values for selected types</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {enumData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                {section.apiUrls.length > 0 && (
                  <div className="space-y-2">
                    {section.apiUrls.map((url, urlIndex) => (
                      <p key={urlIndex} className="text-sm text-blue-500">
                        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                      </p>
                    ))}
                  </div>
                )}
                <h3 className="font-semibold">{section.key}</h3>
                <p className="text-sm text-gray-600">{section.keyDesc}</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Key</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {section.values.map((item, itemIndex) => (
                      <TableRow key={itemIndex}>
                        <TableCell>{section.key}</TableCell>
                        <TableCell>{item.value}</TableCell>
                        <TableCell>{item.desc}</TableCell>
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
  )
}