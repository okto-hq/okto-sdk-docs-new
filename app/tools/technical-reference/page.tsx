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

  const enumValues = {
    order_type: ["WITHDRAWAL", "TRANSFER"],
    status: ["SUCCESS", "FAILED", "RUNNING"]
  }

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
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(enumValues).map(([key, values]) => (
              <div key={key} className="space-y-2">
                <h3 className="font-semibold capitalize">{key.replace('_', ' ')}</h3>
                <div className="flex flex-wrap gap-2">
                  {values.map((value, index) => (
                    <EnumValue key={index} value={value} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}