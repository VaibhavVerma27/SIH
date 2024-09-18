'use client'
import React from "react";
import { useModelStore } from "@/hooks/use-model-store";

interface TicketCardProps {
    id: string;
    name: string;
    amount: number;
    ticketAvailable: number;
}

const AvailableTickets: React.FC<TicketCardProps> = ({ id, name, amount, ticketAvailable }) => {
    const {setTicketData}= useModelStore();

    const handlePurchase = () => {
        // @ts-ignore
        setTicketData({ id, name, amount,ticketAvailable});
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-gray-700">Amount: {amount}</p>
            <p className="text-gray-700">Available: {ticketAvailable}</p>
            <button 
                className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
                onClick={handlePurchase}
            >
                Purchase
            </button>
        </div>
    );
};

export default AvailableTickets;
