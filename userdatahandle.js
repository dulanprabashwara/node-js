const postdatahtml = (status)=>{
    const message = (status === "ok")? " data sent": " server error";
    return `
    <html>
    <head> <title> file upload</title></head>
    <body>
    <h1> ${ message}</h1>
    </body>
    </html>`
}
export default postdatahtml;