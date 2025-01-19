import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
      const session = await auth()
      const userEmail = session?.user?.email
      if(session){
        redirect('/admin')
      }
  return (
    <div>
      homePage
    </div>
  );
}
