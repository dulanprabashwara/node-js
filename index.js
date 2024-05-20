import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import log from  'node:console';
import inquirer from 'inquirer';
import writeFile  from 'node:fs';
import cardGen from './htmlcardGen.js';
import join  from 'node:path';
__dirname = fileURLToPath(import.meta.url);
__filename = dirname(__dirname);
const studentInfo = [];
(async()=> {
    let allcard = '';
    do{
        const data = await inquirer.prompt([
            {
                type: 'input',
                message: 'enter student name',
                name: 'name'
            },{
                type: 'number',
                message: 'enter student age',
                name: 'age'
            },{
                type: 'input',
                message: 'enter student city',
                name: 'city'
            },{
                type: 'list',
                message : 'enter student class',
                name: 'stuclass',
                choices: ['class1','class2','class3','class4']
            },{
                type: 'checkbox',
                message: 'enter your subject',
                name: 'subject',
                choices: ['java','python','golang','dart']
            },{
                type:'confirm',
                message: 'have more students',
                name: 'check'
            }
        ])
        const {check,...infor}= data;
        studentInfo.push(infor);
        if(!check ){
            break;
        }
    }while(true);
    
    studentInfo.forEach(({name,age,stuclass,subject})=>{
        allcard+= cardGen(name,age,stuclass,subject)
    })
    console.log(allcard);
    const htmlcontent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="index.css"/>
    </head>
    <body>
        ${allcard}
    </body>
    </html> ` 
    writeFile(join(__dirname,'index.html'),htmlcontent,(d)=>log(d));
})();