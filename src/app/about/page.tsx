import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function About() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <p>About</p>
    </>
  );
}
