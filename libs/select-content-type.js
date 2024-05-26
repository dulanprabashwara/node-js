export const selectcontenttype=(extension)=>{
    let content;
    switch(extension){

        case 'pdf':
            content = 'application/pdf';
            break
        case 'jpeg' :
            content = 'image/jpeg'  ; 
            break
        case 'mp3':
            content = 'audio/mp3';
            break   
        case 'jpg':
            content = 'image/jpg';
            break             
        case 'png':
            content = 'image/png';
            break
        case 'html':
            content = 'text/html';
            break        
        case 'css':
            content = 'text/css';
            break 
        default:
            content = 'text/html'       
    }return content;

}