import { initialProfile } from "@/lib/initial-profile";

import Home from "../page";

const setupPage = async() => {

    const profile = await initialProfile()

    return <Home/>
}
 
export default setupPage;