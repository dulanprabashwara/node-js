import NotFound from "./pages/notfound.js";
import contact from './pages/contact.js';
import About from './pages/about.js';
import Home from "./pages/home.js";
import {URL} from 'node:url'
const pageselect =(url,res)=>{
    const urlparams = new URL(`http://localhost:4000${url}`);
    log(urlparams.searchParams);

    if(url === '/'){
        res.end(Home());
    }else if( url === '/about'){
        res.end(About());
    }else if(url ==='/contact'){
        res.end(contact());
    }else {
        res.end(NotFound());
    }}

export default pageselect;    