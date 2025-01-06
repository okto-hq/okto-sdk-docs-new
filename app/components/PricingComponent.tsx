import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingComponent() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      mau: "1,000 MAWs",
      description: "For small-scale applications, or testing Okto",
      cta: "Get Started",
      features: ["All features", "All features", "All features"],
    },
    {
      name: "Basic",
      price: "$249",
      mau: "5,000 MAWs",
      description: "Growing applications with an expanding user base",
      cta: "Get Started",
      features: ["All features", "All featurese", "All features"],
    },
    {
      name: "Pro",
      price: "$399",
      mau: "10,000 MAWs",
      description: "Larger applications with a substantial user count",
      cta: "Get Started",
      features: ["All features", "All features", "All features"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      mau: "",
      description:
        "Enterprise-level applications with a large user base and personal support",
      cta: "Contact Sales",
      features: ["All features", "All features", "All features"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`rounded-lg py-6 px-5 ${
            tier.name === "Enterprise"
              ? "bg-gradient-to-b from-[#6246F5] via-[#5166EE] to-[#56B9F9] text-white"
              : "border-[1px] border-gray-300"
          }`}
        >
          <h3
            className={`text-2xl font-semibold mb-2 ${
              tier.name === "Enterprise" ? "text-white" : "text-[#5166EE]"
            }`}
          >
            {tier.name}
          </h3>
          <div className="flex-col mb-2">
            <span className="text-lg font-bold">{tier.price}</span>
            {tier.mau && (
              <>
                <span className="text-xs ml-1">/mo</span>
              </>
            )}
          </div>
          <div
            className={`text-xs ${
              tier.name === "Enterprise" ? "" : "text-[#5166EE]"
            }`}
          >
            {tier.mau}
          </div>
          <p className="text-sm mb-4">{tier.description}</p>
          <Button
            variant={"outline"}
            className={`w-full mb-4 rounded-full ${
              tier.name === "Enterprise"
                ? "bg-white text-purple-600 hover:bg-gray-100"
                : ""
            }`}
            asChild
          >
            {tier.name === "Enterprise" ? (
              <a
                className="no-underline hover:no-underline"
                href="mailto:devrel@coindcx.com"
              >
                {tier.cta}
              </a>
            ) : tier.name === "Free" ? (
              <a
                className="no-underline hover:no-underline"
                href="/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                {tier.cta}
              </a>
            ) : (
              <a
                className="no-underline hover:no-underline"
                href="https://coindcx.typeform.com/to/jskNWEIE"
                target="_blank"
                rel="noopener noreferrer"
              >
                {tier.cta}
              </a>
            )}
          </Button>
          <ul className="space-y-2">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <Check className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}