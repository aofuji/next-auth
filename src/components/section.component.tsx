"use client"

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const Section = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
          redirect("/api/auth/signin");
        },
      });
    
      if (status === "loading") {
        return <p>Loading....</p>;
      }
    return (
        <section>teste de compnent</section>
    )
}