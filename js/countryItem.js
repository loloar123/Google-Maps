// import { doApi, doShortApi, shortTofullCountry } from "./countryList.js";
import { myFunction , checkXLocation } from "./googleMap.js";
let map = document.createElement('div');

export default class Country{

    constructor(_parent, _item, shortTofullCountry , doApi, initMap){
        this.parent = _parent;
        this.name = _item.name.common;
        this.population = Number(_item.population).toLocaleString();
        this.region = _item.region;
        this.language = Object.values(_item.languages);
        this.coin = Object.keys(_item.currencies);
        this.capital = _item.capital[0];
        this.flag = _item.flags.png;
        if(_item.borders != null){
        this.borders = Object.values(_item.borders);
        }
        this.doApi = doApi;
        this.shortTofullCountry = shortTofullCountry;
        this.lat = _item.latlng[0];
        this.lng = _item.latlng[1];
        this.initMap = initMap;
    }
    
    
    render(){        
        let art = document.createElement('article');
        document.querySelector(this.parent).append(art);
        art.className = 'changeColor text-dark p-2 my-4';
        art.innerHTML = `
        <img src="${this.flag}" class="me-2 flag float-start overflow-hidden" alt="${this.name}">
        <div class="centered_div">
        <h2>Country: ${this.name}</h2>
        <h4>Population: ${this.population}</h4>
        <h4>Region: ${this.region}</h4>
        <h4>Languages: ${this.language}</h4>
        <h4>Coin: ${this.coin}</h4>
        <h4>Capital: ${this.capital}</h4>
        </div>
        `;
        myFunction(checkXLocation,art.querySelector(".centered_div"));
        if(this.borders != null){
        this.borders.forEach(async (item,i) => {
            let check = this.borders[i];
            
            let borders_div = document.querySelector("#borders_div");
            document.querySelector("#holder").append(borders_div);
            check = await this.shortTofullCountry(check);
            let dash = ','; 
            if(i+1 == this.borders.length){
                dash = '';
            }
                let a = document.createElement('a');
                a.innerHTML = check + dash;
                a.style = "cursor: pointer; "
                borders_div.append(a);
                a.addEventListener('click', () => {
                    borders_div.innerHTML = '';
                    this.doApi(check);
                });   
        })
    }else{
        let borders_div = document.querySelector("#borders_div");
            document.querySelector("#holder").append(borders_div);
            borders_div.innerHTML = `${this.name} has no borders`
    }
        map.className ='col-md-5 col-12';
        map.style.height = "350px"
        map.style.borderRadius = "12px";
        map.style.marginTop = "20px";
        map.id = 'map';
        document.querySelector("#holder").append(map);
        this.initMap(this.lat, this.lng, map);
    }
    
    
}