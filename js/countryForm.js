import { doApi } from "./countryList.js";

export const declareEvents = () => {
    
    let israel = document.querySelector("#israel");
    israel.addEventListener('click', () => {
        doApi('israel');
    })
    let egypt = document.querySelector("#egypt");
    egypt.addEventListener('click', () => {
        doApi('egypt');
    })
    let thailand = document.querySelector("#thailand");
    thailand.addEventListener('click', () => {
        doApi('thailand');
    })
    let turkey = document.querySelector("#turkey");
    turkey.addEventListener('click', () => {
        doApi('turkey');
    })
    let france = document.querySelector("#france");
    france.addEventListener('click', () => {
        doApi('france');
    })
    let israel2 = document.querySelector("#israel2");
    israel2.addEventListener('click', () => {
        doApi('israel');
    })
    let egypt2 = document.querySelector("#egypt2");
    egypt2.addEventListener('click', () => {
        doApi('egypt');
    })
    let thailand2 = document.querySelector("#thailand2");
    thailand2.addEventListener('click', () => {
        doApi('thailand');
    })
    let turkey2 = document.querySelector("#turkey2");
    turkey2.addEventListener('click', () => {
        doApi('turkey');
    })
    let france2 = document.querySelector("#france2");
    france2.addEventListener('click', () => {
        doApi('france');
    })

    let form = document.querySelector("#id_form");
    let country_input = document.querySelector("#country_input");
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
         changeCountry(country_input);
        })
    
    let form2 = document.querySelector("#id_form2");
    let country_input2 = document.querySelector("#country_input2");
    form2.addEventListener('submit', async (e) => {
        e.preventDefault();
        changeCountry(country_input2);
    })
}

const changeCountry = async (input) => {
    if(input.value != ''){
        await doApi(input.value);
        input.value = '';
        input.focus();
    }
}