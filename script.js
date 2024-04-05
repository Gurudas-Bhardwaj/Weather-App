let input=document.getElementById("input");
let search=document.getElementById("enter");
let temp=document.getElementById("temp");
let icon=document.getElementById("icon");
let city=document.getElementById("city");
let humidity=document.getElementById("humidity");
let speed=document.getElementById("speed");
let display=document.getElementById("display");
let logo=document.getElementById("logo");
let feels_like=document.getElementById("feels_like");
let Minimum=document.getElementById("Minimum");
let Maximum=document.getElementById("Maximum");
let middle_div=document.getElementById("middle_div");
let bottom_div=document.getElementById("bottom_div");

search.addEventListener("click",()=>{
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=0bf8be5950e492cebb1c9e665337fd18`;
    async function weather(){
        try{
            middle_div.style.display="flex";
            bottom_div.style.display="flex";
            logo.style.display="flex";
            display.style.display="flex";
            let data_of_api=await fetch(api);//fetched data from api
            let json_form_data=await data_of_api.json();//Data from api in array form

            let weather_data=json_form_data.main.temp;//main weather shows
            let weather_in_celcius=Math.round(weather_data-273.15);//changing kelvin to celcius
            temp.innerText=weather_in_celcius+"°c";//showing real temprature at ui

            city.innerText=input.value;//showing city name

            let feels_like_temperature=json_form_data.main.feels_like;//feels like temprature
            let real_feels_like=Math.round(feels_like_temperature-273.15);//changing kelvin to celcius
            feels_like.innerText=real_feels_like+"°c";//showing feels like temprature at ui

            let minimum_like_temperature=json_form_data.main.temp_min;//minimum temprature
            let temp_min_like_temperature=Math.round(minimum_like_temperature-273.15);//changing kelvin to celcius
            Minimum.innerText=temp_min_like_temperature+"°c";//showing feels like temprature at ui

            let maximum_like_temperature=json_form_data.main.temp_max;
            let temp_max_like_temprature=Math.round(maximum_like_temperature-273.15);
            Maximum.innerText=temp_max_like_temprature+"°c";

            let humid=json_form_data.main.humidity;//showing humidity
            humidity.innerText=humid+"%";

            let wind=json_form_data.wind.speed;//showing wind speed
            speed.innerText=wind+"Km/hr";

            let sky=json_form_data.weather[0].main;//changing image according to weather
            console.log(sky);
            if (sky=="Clouds"){
                logo.src="cloud.png";
            }else if(sky=="Haze"){
                logo.src="haze.png";
            }else if(sky=="Clear"){
                logo.src="sun.png";
            }else if(sky=="Rain"){
                logo.src="rain.png"
            }else if(sky=="Smoke"){
                logo.src="humidity.png"
            }else if(sky=="Snow"){
                logo.src="snow.png  "
            }
        } catch(err){
            logo.style.display="none"
            temp.innerText="City Not Found";
            middle_div.style.display="none";
            bottom_div.style.display="none";
            city.innerText=""

        }
        
    };
    weather()
})
