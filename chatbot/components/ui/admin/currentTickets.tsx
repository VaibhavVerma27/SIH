"use client"

import {useAdminStore} from "@/state/adminStore";
import getTickets from "@/actions/getTickets";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

export default function CurrentTickets() {

  const email = useAdminStore.getState().user.email;
  const tickets = getTickets(email) || [];

  if (!Array.isArray(tickets) || !tickets || tickets.length === 0) {
    return (
      <>
        <div className="flex w-full h-screen flex-col items-center justify-center">
          No Tickets Found
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="flex w-full h-screen flex-col items-center">
          {tickets.map((ticket) => (
            <>
              <Card className={cn("w-[380px]")} >
                <CardHeader>
                  <CardTitle>Museum Name: {ticket.name}</CardTitle>
                  <CardTitle>Date: {ticket.eventDate}</CardTitle>
                  <CardTitle>Tickets Available: {ticket.ticketAvailable}</CardTitle>
                  <CardTitle>Price: {ticket.amount}</CardTitle>
                </CardHeader>
                <CardFooter>
                </CardFooter>
              </Card>
            </>
          ))}
        </div>
      </>
    )
  }
}