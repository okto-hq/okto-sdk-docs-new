import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// -- Interfaces ----------------------------------------------------------------
interface Token {
  name: string;
  icon: string;
}

interface Resources {
  [linkName: string]: string;
}

interface Testnet {
  [linkName: string]: string;
}

interface NetworkDetail {
  name: string;
  confirmations: string;
  blockInterval: string;
}

// -- Props Interface -----------------------------------------------------------
interface SupportedChainCardProps {
  chainIcon?: string;
  chainName?: string;
  tokens?: Token[];
  whitelistNote?: string;
  resources?: Resources;
  supportedTestnet?: Testnet;
  networkInfo?: NetworkDetail[];
}

// -- Component -----------------------------------------------------------------
export default function SupportedChainCard({
  chainIcon = "/images/polygon-logo.svg",
  chainName = "Polygon",
  tokens = [
    { name: "POL (Native)", icon: "/images/polygon-logo.svg" },
    { name: "USDT (Default)", icon: "/images/usdt-icon.svg" },
    { name: "USDC (Default)", icon: "/images/usdc-icon.svg" },
  ],
  whitelistNote,
  resources = {
    Solidity: "#",
    Remix: "#",
    Hardhat: "#",
    OpenZeppelin: "#",
  },
  supportedTestnet = {
    "Polygon Amoy Testnet": "#",
  },
  networkInfo = [
    {
      name: "Polygon Mainnet",
      confirmations: "7",
      blockInterval: "2.3s",
    },
    {
      name: "Polygon Amoy Testnet",
      confirmations: "1",
      blockInterval: "3s",
    },
  ],
}: SupportedChainCardProps) {
  return (
    <Card className="bg-[#F5F6FE] dark:bg-[#121212] rounded-2xl shadow-sm border-none mx-auto w-full">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start">
          {/* Left (Chain Logo & Name) */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
            <img
              src={chainIcon}
              alt={`${chainName} logo`}
              className="w-14 h-14 m-0 pb-2"
            />
            <div className="text-xl sm:text-2xl font-semibold">
              {chainName}
            </div>
          </div>

          {/* Right (Tokens, Testnets, Resources, Network Info) */}
          <div className="w-full sm:w-3/4 flex flex-col gap-4">
            {/* Supported Tokens */}
            <div className="bg-white dark:bg-[#0D0D0D] rounded-xl p-4">
              <div className="text-base sm:text-lg font-semibold mb-4">
                Supported Tokens
              </div>

              {/* Token Boxes in a Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {tokens.map((token, index) => {
                    const isNative = token.name.toLowerCase().includes("(native)");
                    const isDefault = token.name.toLowerCase().includes("(default)");

                    // Extract the base token name by removing "(Native)" or "(Default)"
                    const tokenBaseName = token.name
                    .replace(/\(native\)|\(default\)/gi, "")
                    .trim()
                    .replace(/\(\)/g, "")
                    .trim();

                    return (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center 
                                    gap-1 p-2 rounded-md border border-gray-200 dark:border-gray-700 
                                    bg-gray-50 dark:bg-[#1a1a1a] min-h-[48px] max-h-[64px]"
                        >
                        {/* Icon and Token Name in the same row */}
                        <div className="flex items-center gap-2">
                            <img
                                src={token.icon}
                                alt={tokenBaseName}
                                className="w-6 h-6 object-contain"
                            />
                            <span className="font-medium text-xs sm:text-sm leading-none">
                                {tokenBaseName}
                            </span>
                            {isNative && (
                                <span className="inline-block bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full text-[10px] leading-none">
                                    Native
                                </span>
                            )}
                            {isDefault && (
                                <span className="inline-block bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-[10px] leading-none">
                                    Default
                                </span>
                            )}
                        </div>
                    </div>
                    );
                })}
                </div>

              {/* Whitelist Note */}
              {whitelistNote && (
                <p className="text-xs mt-4 text-gray-600 dark:text-gray-400">
                  {whitelistNote}
                </p>
              )}
            </div>

            {/* Network Info: confirmations & block interval */}
            {networkInfo.length > 0 && (
              <div className="bg-white dark:bg-[#0D0D0D] rounded-xl p-3">
                <div className="text-base sm:text-lg font-semibold mb-2">
                    Supported Chains
                </div>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-[#1a1a1a]">
                      <th className="p-1 text-left border border-gray-200 dark:border-gray-700">
                        Network
                      </th>
                      <th className="p-1 text-center border border-gray-200 dark:border-gray-700">
                      No. of Blocks Needed for confirmation
                      </th>
                      <th className="p-1 text-center border border-gray-200 dark:border-gray-700">
                      Avg Block Interval
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {networkInfo.map((net, idx) => (
                      <tr
                        key={idx}
                        className="bg-gray-50 dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors"
                      >
                        <td className="p-1 border border-gray-200 dark:border-gray-700">
                          {net.name}
                        </td>
                        <td className="p-1 text-center border border-gray-200 dark:border-gray-700">
                          {net.confirmations}
                        </td>
                        <td className="p-1 text-center border border-gray-200 dark:border-gray-700">
                          {net.blockInterval}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Note:</strong> For transactions to be confirmed on Okto, a minimum number of blocks must be confirmed on the chain. 
                    The total confirmation time can be estimated by multiplying the number of blocks by the average block interval.
                </div>
              </div>
            )}

            {/* Resources */}
            <div className="bg-white dark:bg-[#0D0D0D] rounded-xl p-4">
              <div className="text-base sm:text-lg font-semibold mb-2">
                Resources
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(resources).map(([name, link], index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="rounded-full flex gap-1 dark:bg-[#0D0D0D]"
                    size="sm"
                  >
                    <Link
                      href={link}
                      className="py-1 no-underline dark:text-white bg-white dark:bg-[#0D0D0D] text-black rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center"
                    >
                      {name}
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
