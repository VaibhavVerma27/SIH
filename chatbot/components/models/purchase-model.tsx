'use client'
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { formSchema } from "@/schemas/formSchema";
import { useModelStore } from "@/hooks/use-model-store";


export const PurchaseModel = () =>{
    const{data,onClose,type} =useModelStore();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          amount: "",
        },
    });
    if(type !== 'purchaseTicket'){
        return null; 
    };
    
    const router = useRouter();
    const isLoading = form.formState.isSubmitting;
    const onSubmit = async(values:z.infer<typeof formSchema>) =>{
        try {
            await axios.post(`/api/purchase-ticket/${data?.ticket?.id}`,values);
            form.reset();
            router.refresh();
            onClose();
        } catch (error) {
           console.error(error);
        }
    }
    return(
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} 
                className='space-y-8'>
                    <div className='space-y-8 px-6'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                  <FormLabel
                                  className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'
                                  >Museam Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                    disabled={isLoading}
                                    className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                    placeholder='Enter Museam name'
                                    {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                        />
                    </div>
                    <div className='space-y-8 px-6'>
                        <FormField
                            control={form.control}
                            name='amount'
                            render={({ field }) => (
                                <FormItem>
                                  <FormLabel
                                  className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'
                                  >Ticket Amount</FormLabel>
                                  <FormControl>
                                    <Input 
                                    disabled={isLoading}
                                    className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
                                    placeholder='Enter amount of tickets needed'
                                    {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                        />
                        <Button disabled={isLoading}>
                        {isLoading ? "Purchasing..." : "Purchase"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}