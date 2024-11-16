import { createContext} from "react"

const userContext = createContext({
    username: "Admin",
    loginStatus:true
}); 

export default userContext