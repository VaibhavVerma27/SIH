import { currentProfile } from '@/lib/current-user';
import { auth } from '@clerk/nextjs/server';
import React from 'react'

interface TicketIdPageProps{
    params:{
        ticketId:string;
    }
}


const PurchaseTicket = async ({params}:
    TicketIdPageProps
) => {
    const profile = await currentProfile();

    if (!profile) return auth().redirectToSignIn();

    return(
        // <div>{params.ticketId}</div>
        <></>
    )
}

export default PurchaseTicket;
