

/* Global Variables */
const dataProject = {};
// newarray=[];
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();

let baseURL = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = 'cc474e43c42b08786423a1f823150663';
let cityName = document.getElementById('city');
let feel = document.getElementById('feelings');
// let countryCode = document.getElementById('countryCode').value;
console.log(cityName)


const weatherInfo = async (baseURL, city, key) => {
  // let cityName = document.getElementById('city').value;
  // const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}`)
  const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=${apiKey}`) //country name   

  try {
    const data = await req.json();
    let temperature = data.main.temp;
    console.log(data)
    console.log(temperature);
    postData('/post', { temp: temperature, feeling: feel.value, date: newDate })

    getData()

    return temperature;

  } catch (error) {
    console.log("error", error);
    // appropriately handle the error 
  }

}

console.log(dataProject)

const postData = async (url = '', data = {}) => {
  console.log(data);

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

  try {
    const something = await response.json();
    console.log(something);
    return something;
  }
  catch (error) {
    console.log('error1', error);
  }
}




const getData = async () => {
  const response = await fetch('/get')
  try {

    const something = await response.json();
    console.log(something);


    const tempUI = document.getElementById('temp')
    tempUI.innerHTML = something.temp;
    tempUI.classList.add('active')
    document.getElementById('content').innerHTML = something.feels;
    document.getElementById('date').innerHTML = something.date;
    // newarray.push(something)
    // console.log(newarray)
    // Last= newarray[newarray.length-2]
    // console.log(Last)
    return something;

  }
  catch (error) {
    console.log('error2', error);
  }
}
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
  if (document.getElementById('city').value == '') { alert('wrong or empty city name') }
  else {
    weatherInfo(baseURL, cityName.value, apiKey)

      .then((data) => postData)
    //   console.log(data);

    // })
  }
}


