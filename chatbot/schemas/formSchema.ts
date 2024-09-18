import { z } from "zod";

export const formSchema = z.object({
    name:z.string().min(1,{
        message:'Museam name is required'
    }),
    amount:z.string().min(0,{
        message:'Atleast book one ticket'
    })
    
})