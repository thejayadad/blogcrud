import { auth } from "@/auth";

export default async function Home() {
      const session = await auth()
      const userEmail = session?.user?.email

  return (
    <div>
      homePage
    </div>
  );
}
