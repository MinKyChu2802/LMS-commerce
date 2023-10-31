import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { SidebarItemProps } from "./sidebar-item";

export const SidebarItem = ({ icon: Icon, href, label }: SidebarItemProps) => {
const pathname = usePathname();
const router = useRouter();

const isActive = (pathname === "/" && href === "/") ||
pathname === href ||
pathname?.startsWith(`${href}/`);

const onClick = () => {
router.push(href);
};

return (
<button
type="button"
onClick={onClick}
className={cn(
"flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 ",
transition - all, hover, text - slate - 600, hover, bg - slate - 300 / 20, ""
)}
>
{" "}
</button>
);
};
