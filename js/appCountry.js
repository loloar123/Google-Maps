import { declareEvents } from "./countryForm.js";
import { doApi } from "./countryList.js";
const urlParams = new URLSearchParams(window.location.search);

const init = () => {
    console.log(urlParams.get("q"));
    if(!urlParams.get("q")){ 
        doApi('israel');
    }
    checkQueary();
    declareEvents();
}


const checkQueary  = () => {
    if(urlParams.get("q")){
        // console.log(urlParams.get('q'));        
        doApi(urlParams.get("q"))        
    }
}


init();