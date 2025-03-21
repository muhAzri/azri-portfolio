// config/navigation.ts
import { Icons } from "@/components/icons";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavItem[];
    }
);

export const mainNavItems: MainNavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerLinks = [
  {
    title: "Social",
    items: [
      {
        title: "GitHub",
        href: "https://github.com/muhAzri",
        external: true,
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/muh-azri/",
        external: true,
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Resume",
        href: "/resume.pdf",
        external: true,
      },
      {
        title: "Blog",
        href: "/blog",
      },
    ],
  },
];