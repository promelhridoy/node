import { createServer, IncomingMessage, ServerResponse } from "http";
import routeHandler from "./routes/route";

const server = createServer((req: IncomingMessage,
     res: ServerResponse) => {

  routeHandler(req, res);
    
    
})

server.listen(5000, () => {
    console.log("Server is running successfully!");
    
})