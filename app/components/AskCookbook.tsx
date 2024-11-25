"use client"

import React from "react";
import BaseAskCookbook  from "@cookbookdev/docsbot/react";

const COOKBOOK_PUBLIC_API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmY0NTc5OGJkODc1Y2E3NmUwMGFmOWYiLCJpYXQiOjE3MjcyODkyNDAsImV4cCI6MjA0Mjg2NTI0MH0.jjwNwuxA0WhC8yuHDgXLmFfKj83_qUoiYj7FoCKx88k";

export default function AskCookbook() {
  return <BaseAskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />;
}