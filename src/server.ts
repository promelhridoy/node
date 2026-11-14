import { createServer, IncomingMessage, ServerResponse } from "http";

const server = createServer((req: IncomingMessage,
     res: ServerResponse) => {

    // console.log("request :", req.url);
    // console.log("request :", req.method);
    // console.log("Response :", res);

    const url = req.url
    const method = req.method

    if(url === "/" && method === "GET"){
        // console.log("This is root route");
        res.writeHead(200, 
            {
                "Content-Type": "application/json"
            }
        );
        res.end(JSON.stringify({message: "This is root route!!"}))
        
    }else if(url?.startsWith("/product")) {
         res.writeHead(200, 
            {
                "Content-Type": "application/json"
            }
        );
        res.end(JSON.stringify({message: "This is Products Route!!"}))
        
    }
    else{
        // console.log("This route is not defined");
        res.writeHead(404, 
            {
                "Content-Type": "application/json"
            }
        );
        res.end(JSON.stringify({message: "This route is not found"}))
    }
    
    
})

server.listen(5000, () => {
    console.log("Server is running successfully!");
    
})