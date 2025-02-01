'use client';

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as ULink, Image, Chip } from "@nextui-org/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { ChevronDown } from 'lucide-react';
import { FaReact } from "react-icons/fa6";
import { TbBrandReactNative, TbApi } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import { useTheme } from "next-themes";
import GitHubButton from "./GithubButton";
import DiscordButton from "./DiscordButton";
import { Button as SCButton } from "@/components/ui/button";
import Link from "next/link";
import { Sun, Moon } from 'lucide-react';

const poppins = Poppins({ subsets: ['latin'], weight: '500', display: 'swap' });
const poppinsLight = Poppins({ subsets: ['latin'], weight: '400', display: 'swap' });
// const poppins = Poppins({ subsets: ['latin'], weight: '500', display: 'swap' });


export default function NavbarComponent() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = (isSelected: boolean) => {
    setTheme(isSelected ? 'dark' : 'light');
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  const navItems = [
    { href: "/docs/introduction-to-okto", label: "Intro", subpath: '/okto-universe' },
    { href: "/docs/developer-admin-dashboard", label: "Using Dashboard", subpath: '/overview' },
    { href: "/blogs", label: "Blog", subpath: '' },
    { href: "/showcase", label: "Showcase", subpath: '' },
    { href: "/api-docs", label: "API Reference", subpath: '' },
  ];

  const sdkOptions = [
    { href: "/docs/react-sdk", label: "React", subpath: '/', icons: <FaReact /> },
    { href: "/docs/react-native-sdk", label: "React Native", subpath: '/', icons: <TbBrandReactNative /> },
    { href: "/docs/flutter-sdk", label: "Flutter", subpath: '/', icons: <SiFlutter /> },
    { href: "/docs", label: "Unity", subpath: '/unity-sdk', icons: <FaUnity /> },
  ];

  const getFrameworkLabel = () => {
    if (pathname.startsWith('/docs/react-sdk')) return 'React';
    if (pathname.startsWith('/docs/react-native-sdk')) return 'React Native';
    if (pathname.startsWith('/docs/flutter-sdk')) return 'Flutter';
    return 'SDKs';
  };

  useEffect(() => {
    const updateActiveItem = () => {
      const activeNavItem = [...navItems, ...sdkOptions].find(item => pathname.startsWith(item.href));
      setActiveItem(activeNavItem ? activeNavItem.href : "");
    };

    updateActiveItem();
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isFrameworkSelected = sdkOptions.some(option => pathname.startsWith(option.href));

  return (
    <Navbar isBordered className="nav-spacing border-b border-gray-200 dark:border-gray-700">
      <NavbarBrand className={`${poppins.className} gap-20 flex items-center`}>
        <ULink href="/docs" color="foreground" className="no-underline">
          <NavbarItem className="flex gap-2 items-center">
            <Image src="/logo/okto-icon.png" alt="Okto Logo" width={30} height={30} className="display-logo"/>
            <p className="text-2xl">okto</p>
            <Chip className="bg-[#F5F6FE] dark:bg-gray-700 text-[#5166EE] dark:text-[#7C8FFF] h-[22px] w-[55px] text-[14px]">
              Docs
            </Chip>
          </NavbarItem>
        </ULink>
        <NavbarContent className="hidden sm:flex gap-8" justify="start">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <ULink
                href={`${item.href}${item.subpath}`}
                color="foreground"
                className={`text-md ${pathname.startsWith(item.href)
                  ? "text-blue-600"
                  : `${poppinsLight.className}`
                  } pb-1`}
              >
                {item.label}
              </ULink>
            </NavbarItem>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SCButton variant="ghost" className={`text-md flex hover:bg-transparent hover:text-inherit items-center gap-1 p-0 ${pathname.startsWith('/docs/react-sdk') || pathname.startsWith('/docs/react-native-sdk') || pathname.startsWith('/docs/flutter-sdk') ? "text-blue-600 hover:text-blue-600" : `${poppinsLight.className} hover:text-inherit` }`}>
                {getFrameworkLabel()} <ChevronDown className="h-5 w-5 font-normal" />
              </SCButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-lg p-2">
              {sdkOptions.map((option) => (
                <DropdownMenuItem key={option.label} asChild>
                  <Link
                    href={`${option.href}${option.subpath}`}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    {option.icons}
                    <span>{option.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </NavbarContent>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <DiscordButton />
        </NavbarItem>
        <NavbarItem>
          <GitHubButton />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <SCButton variant="outline" className="rounded-full flex gap-1 hover:bg-[#F5F6FE] dark:hover:bg-gray-700 hover:text-[#5166EE] dark:hover:text-[#7C8FFF]">
            <Link href="https://oktohq.notion.site/Okto-Grants-Program-13f8d0b09e5b8075a646d5dbaa394eeb" target="_blank">Grants</Link>
            <MdOutlineArrowOutward size={".9rem"} />
          </SCButton>
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">
          <SCButton variant="outline" className="rounded-full flex gap-1 hover:bg-[#F5F6FE] dark:hover:bg-gray-700 hover:text-[#5166EE] dark:hover:text-[#7C8FFF]">
            <Link href="https://demo.okto.tech">Demo</Link>
            <MdOutlineArrowOutward size={".9rem"} />
          </SCButton>
        </NavbarItem> */}
        <NavbarItem className="hidden lg:flex">
          <SCButton variant="outline" className="rounded-full flex gap-1 hover:bg-[#F5F6FE] dark:hover:bg-gray-700 hover:text-[#5166EE] dark:hover:text-[#7C8FFF]">
            <Link href="https://dashboard.okto.tech/" target="_blank">Dashboard</Link>
            <MdOutlineArrowOutward size={".9rem"} />
          </SCButton>
        </NavbarItem>
        <NavbarItem>
          {mounted && (
            <SCButton
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="border-none hover:bg-[#F5F6FE] dark:hover:bg-gray-700"
            >
              {resolvedTheme === "light" ? (
                <Sun className="hover:text-[#5166EE]" />
              ) : (
                <Moon className="hover:text-[#7C8FFF]" />
              )}
            </SCButton>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}