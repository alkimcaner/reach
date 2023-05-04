"use client";

import {
  CreditCard,
  Github,
  LifeBuoy,
  LogOut,
  Settings,
  User,
  Loader2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useMemo } from "react";

export function ProfileDropdown() {
  const { data: session } = useSession();
  const initials = useMemo(
    () =>
      session?.user?.name
        ?.split(" ")
        .reduce((prev, value) => prev + value[0], ""),
    [session]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {session ? (
          <Avatar className="cursor-pointer">
            {session.user?.image && (
              <AvatarImage src={session.user?.image} alt="avatar" />
            )}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        ) : (
          <Loader2 className="animate-spin" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <Link href="/settings">
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alkimcaner/"
        >
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
        </a>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
