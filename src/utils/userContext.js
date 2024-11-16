import { createContext} from "react"

const userContext = createContext({
    username: "Sabyasachi",
    loginStatus:true
}); 

export default userContext