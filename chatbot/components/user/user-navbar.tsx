'use client'
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { useModelStore } from "@/hooks/use-model-store";
import { PurchaseModel } from "@/components/models/purchase-model";

export function UserNavBar() {
  const { onOpen } = useModelStore();

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger
            onClick={() => onOpen("purchaseTicket")}
          >
            purchaseTicket
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>History</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Availability</MenubarTrigger>
        </MenubarMenu>
      </Menubar>

    </>
  );
}
