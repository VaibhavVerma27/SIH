"use client"

import {db} from "@/lib/db";

interface ticket {
  id: string,
  name: string,
  amount: number,
  ticketAvailable: number,
  eventDate: string,
  addedById: string,
  createdAt: Date,
  updatedAt: Date
}

// @ts-ignore
export default async function getTickets(email: String) : ticket[] {
  try {
    if (!email) return [];


    const tickets = await db.tickets.findMany({
      where: {
        // @ts-ignore
        addedById: email
      }
    })

    if (!tickets) return [];

    return tickets;
  } catch (e) {

  }
}