import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { LoginDialog } from "./LoginDialog";
import { ProfileDropdown } from "./ProfileDropdown";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <div className="sticky inset-x-0 top-0 z-50 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center gap-8 p-4">
        <Link href="/" className="mr-auto font-bold">
          Reach
        </Link>
        {session ? (
          <>
            <ProfileDropdown />
          </>
        ) : (
          <>
            <LoginDialog />
          </>
        )}
      </nav>
    </div>
  );
}
