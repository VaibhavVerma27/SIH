import { currentProfile } from "@/lib/current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    { params }: { params: { ticketId: string } }
) {
    try {
        const profile = currentProfile();
        const { searchParams } = new URL(req.url);
        const count = searchParams.get("count");
        const countInt = Number(count);

        if (!profile) {
            return new NextResponse("Unauthorized", { status: 403 });
        }
        
        console.log(params.ticketId);
        
        const ticket = await db.tickets.findUnique({
            where: {
                id: params.ticketId,
            },
        });

        if (!ticket) {
            return new NextResponse("Ticket not found", { status: 404 });
        }

        if (ticket.ticketAvailable < countInt) {
            return new NextResponse("Requested count exceeds available tickets", { status: 403 });
        }

        const updatedTicket = await db.tickets.update({
            where: { id: params.ticketId },
            data: { 
                ticketAvailable: ticket.ticketAvailable - countInt,
            }

        });
        console.log(updatedTicket.name);
        return new NextResponse(JSON.stringify(updatedTicket), { status: 200 });

    } catch (error) {
        console.error(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
