import {io} from "socket.io-client"

const socket = io("http://localhost:3000", {
    withCrediential:true,
    autoConnect:false
});

export default socket;