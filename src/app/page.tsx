import PostWizard from "@/components/PostWizard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="mx-auto w-full max-w-5xl">
      Home page
      {session && <PostWizard />}
    </main>
  );
}
