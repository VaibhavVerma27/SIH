"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import React from "react";
import {cn} from "@/lib/utils";
import {useAdminStore} from "@/state/adminStore";
import addTicket from "@/actions/addTicket";
import {redirect} from "next/navigation";


export default function AddTicket() {
  const { isAdmin } = useAdminStore.getState();

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [tickets, setTickets] = React.useState(0);
  const [notAdded, setNotAdded] = React.useState(false);

  return (
    <>
      <div
        className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Add Ticket
        </h2>

        <form
          className="my-8"
          onSubmit={() => {
            const email = useAdminStore.getState().user.email;

            const isAdded = addTicket({name, date, price, tickets, email});

            if (!isAdded) {
              setNotAdded(true);
            } else {
              redirect("/admin-home/current-tickets")
            }
          }
          }>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Museum Name</Label>
            <Input id="name" placeholder="Delhi National Museum" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="tickets">Tickets Available</Label>
            <Input id="tickets" type="number" value={tickets} onChange={(e) => setTickets(Number(e.target.value))}/>
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Add Ticket
            <BottomGradient/>
          </button>
          {notAdded && <div>Failed to add ticket</div>}
        </form>
      </div>


    </>
  )
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className,}: { children: React.ReactNode; className?: string; }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
