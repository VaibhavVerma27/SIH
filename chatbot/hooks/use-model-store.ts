import { Tickets } from "@prisma/client" 
import {create}from "zustand"

export type ModelType = "purchaseTicket"
                        |"purchaseHistory"
                        |"availableTickets";

interface ModelData{
    ticket?:Tickets;
}

interface ModelStore{
    type: ModelType | null;
    data?: ModelData;
    isOpen: boolean;
    onOpen: (type: ModelType, data?: ModelData) => void;
    onClose: () => void;
    setTicketData: (ticket: Tickets) => void;
}

export const useModelStore = create<ModelStore>((set) => ({
    type: null,
    data:undefined,
    isOpen: false,
    onOpen: (type:ModelType, data?:ModelData) => {
      set({ type, data, isOpen: true });
    },
    onClose: () => {
      set({ type: null,data:undefined,isOpen: false });
    },
    setTicketData: (ticket: Tickets) => {
        set({ data: { ticket }, type: "purchaseTicket", isOpen: true });
    },
}));