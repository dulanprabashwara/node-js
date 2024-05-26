import {createServer} from 'node:http';
import { log } from 'node:console';
import {server} from './server.js';
const port = process.env.PORT || 4034;
createServer((req,res)=>{
    server(req,res);
}).listen(port,()=>log("server running"));