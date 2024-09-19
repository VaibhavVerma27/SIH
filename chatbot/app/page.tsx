import { initialProfile } from "@/lib/initial-profile";
import Bot from "@/components/bot/bot";

export default async function Home() {
  const intialProfile = await initialProfile();

  return(
    <Bot/>
  );
}
