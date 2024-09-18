"use server"
import {db} from "@/lib/db";
import { useAdminStore } from "@/state/adminStore";

export default async function adminLogin(email: string, password: string) {
  try {
    // @ts-ignore
    const admin = await db.admin.findUnique({
      where: {
        email: email,
        password: password
      }
    });

    if (!admin) return;

    const { setAdmin }  = useAdminStore.getState();
    setAdmin({
      name: admin.name,
      email: admin.email
    })
  } catch (e) {

  }
}