import {redirect} from "next/navigation";
import AdminButton from "@/components/ui/admin/admin-button";

const adminHomeLayout = ({
                      children,
                    }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="w-full mt-4 h-20 flex flex-row justify-around">
        <AdminButton text="Add Ticket" url="/admin-home/add-ticket" />
        <AdminButton text="Current Tickets" url="/admin-home/current-tickets" />
      </div>
      <div className="h-screen flex items-center justify-center mb-24">
        {children}
      </div>
    </>
  );
}

export default adminHomeLayout;