"use client"
import { useAdminStore } from "@/state/adminStore";
import { useUserStore } from "@/state/userStore";
import {redirect} from "next/navigation";

export default async function Home() {
  const { isAdmin } = useAdminStore.getState();
  const { isUser } = useUserStore.getState();

  if (isAdmin) {
    redirect("/admin-home");
  } else if (isUser) {

  } else redirect("/sign-in")
}
