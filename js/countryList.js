import Country from "./countryItem.js";

export const doApi = async (_country) => {
    console.log(_country);
    
    let url = `https://restcountries.com/v3.1/name/${_country}`;
    document.querySelector("#borders_div").innerHTML = `<h3>Countries in borders: </h3>`;
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        createCountry(data)
    }
    catch (err) {
        console.log(err);
        alert('The state your looking for does not exist');
        location.reload();
    }
}

const createCountry = (_ar) => {
    document.querySelector("#id_row").innerHTML = '';
        let newItem = new Country("#id_row", _ar[0], shortTofullCountry , doApi, initMap);
        newItem.render();
}

const initMap = (lat,lng) => {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: lat, lng: lng },
      mapTypeId: "terrain",
    });
    const marker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
      });
}  

const shortTofullCountry = async (code) => {

    let url = `https://restcountries.com/v3.1/alpha/${code}`;
    let resp = await fetch(url);
    let data = await resp.json();

    let fullCountry = data[0].name.common;
    return fullCountry;
}

