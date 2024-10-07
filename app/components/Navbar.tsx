'use client';

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as ULink, Button, Image, Chip, DropdownItem } from "@nextui-org/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { ChevronDown } from 'lucide-react';
import { FaReact } from "react-icons/fa6";
import { TbBrandReactNative, TbApi } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { useTheme } from "next-themes";
import GitHubButton from "./GithubButton";
import DiscordButton from "./DiscordButton";
import { Button as SCButton } from "@/components/ui/button";
import Link from "next/link";
import { Sun, Moon } from 'lucide-react';

const poppins = Poppins({ subsets: ['latin'], weight: '500', display: 'swap' });

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
    { href: "/showcase", label: "Showcase", subpath: '' },
    { href: "/api-docs", label: "API Reference", subpath: '' },
  ];

  const sdkOptions = [
    { href: "/docs/react-sdk", label: "React", subpath: '/getting-started/overview-okto-react', icons: <FaReact/> },
    { href: "/docs/react-native-sdk", label: "React Native", subpath: '/getting-started/overview-okto-react-native', icons: <TbBrandReactNative/> },
    { href: "/docs/flutter-sdk", label: "Flutter", subpath: '/getting-started/overview-okto-flutter', icons: <SiFlutter/> },
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
    <Navbar className="nav-spacing">
      <NavbarBrand className={`${poppins.className} gap-20 flex items-center`}>
        <ULink href="/docs" color="foreground" className="no-underline">
          <NavbarItem className="flex gap-2 items-center">
            <Image src="/logo/okto-icon.png" alt="Okto Logo" width={30} height={30} />
            <p className="text-2xl">okto</p>
            <Chip className="bg-[#F5F6FE] text-[#5166EE] h-[22px] w-[55px] text-[14px]">
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
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
                  } pb-1`}
              >
                {item.label}
              </ULink>
            </NavbarItem>
          ))}
          {/* <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-md ${isFrameworkSelected
                  ? "text-blue-600"
                  : ""
                  } pb-1`} // Apply styles when a framework is selected
                variant="light"
                radius="sm"
                endContent={<ChevronDown />}
              >
                {getFrameworkLabel()}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Framework options" items={sdkOptions}>
              {(item) => (
                <DropdownItem
                  key={item.label}
                  href={`${item.href}${item.subpath}`}
                  startContent={item.label === 'React' ? <FaReact /> : item.label === 'React Native' ? <TbBrandReactNative /> : item.label === 'Flutter' ? <SiFlutter /> : <TbApi />}
                >
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SCButton variant="ghost" className="text-md flex gap-1 p-0">
                {getFrameworkLabel()} <ChevronDown size={20} />
              </SCButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-lg p-2">
              {sdkOptions.map(option => (
                <DropdownMenuItem key={option.label} className="cursor-pointer">
                  <Link href={`${option.href}${option.subpath}`} className="flex gap-1 items-center">
                    {option.icons} {option.label}
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
          <SCButton variant="outline" className="rounded-full flex gap-1 hover:bg-[#F5F6FE] hover:text-[#5166EE]">
            <Link href="https://teamcoindcx.typeform.com/to/CvPAQNAU">Grants</Link>
            <MdOutlineArrowOutward size={".9rem"} />
          </SCButton>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <SCButton variant="outline" className="rounded-full flex gap-1 hover:bg-[#F5F6FE] hover:text-[#5166EE]">
            <Link href="https://okto-sdk-demo-app-weld.vercel.app/">Demo</Link>
            <MdOutlineArrowOutward size={".9rem"} />
          </SCButton>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <SCButton variant="outline" className="rounded-full flex gap-1 hover:bg-[#F5F6FE] hover:text-[#5166EE]">
            <Link href="https://dashboard.okto.tech/">Dashboard</Link>
            <MdOutlineArrowOutward size={".9rem"} />
          </SCButton>
        </NavbarItem>
        <NavbarItem>
          {mounted && (
            <SCButton
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="border-none"
            >
              {resolvedTheme === "light" ? (
                <Sun />
              ) : (
                <Moon />
              )}
            </SCButton>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}