import {log} from 'node:console';
import { createServer } from 'node:http';
import pageselect from './pageselect.js';
import {IncomingForm} from 'formidable';
import { copyFile, existsSync,mkdir,rm } from 'node:fs';
import postdatahtml from './userdatahandle.js';
createServer((req,res)=>{
    if(req.method ==='POST'){
        const userdata = new IncomingForm();
        userdata.parse(req,(err,feilds,files)=>{
            if(err){
                log(err);
                res.end(postdatahtml("error"));
            }else{
                console.log("user data feilds",feilds);
                log("user data files",files.userfiles[0].originalFilename);
                const currentfilepath =files.userfiles[0].originalFilename;
                const destfilepath = `upload${files.userfiles[0].originalFilename}`;
                if(existsSync("upload")){
                    copyFile(currentfilepath,destfilepath,(err)=>{
                        log(err);
                    })
                    rm(currentfilepath,(err)=>{
                        if(err){
                            log(err);
                        }else{
                            log("file deleted");
                        }
                    });
                }else{
                    mkdir("upload",(err)=>{
                        if(err){
                            log(err);
                        }else{
                            copyFile(currentfilepath,destfilepath,(err)=>{
                                log(err);
                            })
                            rm(currentfilepath,(err)=>{
                                if(err){
                                    log(err);
                                }else{
                                    log("file deleted");
                                }
                            });
                        }
                    })
                }


            }
            res.end(postdatahtml("ok"))
        })
    }else if(req.method === 'GET'){
        res.end(postdatahtml());
    }
    
}).listen(4001,()=> log("server runnung "));