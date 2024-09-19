"use server"

import {db} from "@/lib/db";

export default async function addTicket({name, date, price, tickets, email} : {name: string, date: string, price: number, tickets: number, email: string}) {
  if (!tickets || !date || !name) return false;

  // @ts-ignore
  const newTicket = await db.tickets.create({
    // @ts-ignore
    data : {
      name: name,
      amount: price,
      ticketAvailable: tickets,
      eventDate: date,
      addedById: email,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  });

  if (!newTicket) return false;

  return true;
}