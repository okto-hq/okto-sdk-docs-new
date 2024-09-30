"use client";

import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import { ReactNode } from "react";

interface DocCardPropType {
  icon: ReactNode;
  title: string;
  body: string;
  link: string;
  linkText: string;
}

export default function DocCard({ icon, title, body, link, linkText }: DocCardPropType) {
  return (
    <Card
      className="py-2 px-4 w-full no-underline"
      style={{
        color: "var(--doc-card-text) !important",
      }}
      disableRipple
      isPressable
      as={Link}
      href={link}
    >
      <CardHeader className="flex-col items-start">
        <Button isIconOnly variant="ghost" disabled>
          {icon}
        </Button>
        <p className="font-bold text-md">
          {title} <br/>
        </p>
        <span className="text-sm">
          {body}
        </span>
      </CardHeader>
      {/* <CardFooter className="text-sm">
        {body}
      </CardFooter> */}
      {/* <CardFooter className="text-sm">
        <Link href={link} className="flex items-center gap-1 text-sm no-underline text-[#5166EE]">
          <span>{linkText}</span> <ArrowRight size={"1rem"} />
        </Link>
      </CardFooter> */}
    </Card>
  );
}
