import { fileread } from "./libs/read-files.js";
import { selectcontenttype } from "./libs/select-content-type.js";

export const server=(req,res)=>{
    if(req.url ==='/' && req.method ==='GET'){
        fileread("public/index.html",res,'text/html')

    }else if(req.method ==='GET'){
        const file= String(req.url).split(".")
        const contentype=selectcontenttype(file[file.length-1])
        fileread(`public/${req.url}`,res,contentype)
    }
    }