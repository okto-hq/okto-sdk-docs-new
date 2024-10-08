"use client";

import { Button, Card, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { ReactNode } from "react";

interface DocCardPropType {
  icon: ReactNode;
  title: string;
  body: string;
  link: string;
  linkText: string;
}

export default function DocCard({ icon, title, body, link }: DocCardPropType) {
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
    </Card>
  );
}
