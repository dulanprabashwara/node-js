import {readFile} from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const fileread= async (path,res,contentype)=>{
    try{
        const data = await readFile(join(__dirname,"../",path))
        res.writeHead(200, {'Content-Type': contentype });
        res.end(data);

    }catch(error){
        const data = await readFile(join(__dirname,"../","public/404.html"))
        res.writeHead(404,{'content-Type': contentype});
        res.end(data);
        
    }

}