const { log } = console;
log("Is grit thing on?")

// write function call makebreakfast
// log(eggs);


// const makeBreakfast = (bacon) => {
//     const pancakes = bacon.results[0].name;
//     localStorage.setItem('grit', pancakes);

//     const oatMeal = localStorage.getItem('grit');
//     log(oatMeal);

//     const URL = bacon.results[6].image;
//     log(URL)
//     document.body.style.backgroundImage = `url(${URL})`
// }



const setGetName = (bacon) => {
    const pancakes = JSON.stringify(bacon.results[19]);
    localStorage.setItem('grit', pancakes)
    log(pancakes)
    log(bacon.results)
    
}

const setBG = () => {
    const URL = JSON.parse(localStorage.getItem('grit'))
    document.body.style.backgroundImage = `url(${URL.image})`
    log(URL.image)
}

// fetch something
// 3 step process
// go to URL
// get promise
// JSON object
const userInput = 'character'
const URL = `https://rickandmortyapi.com/api/${userInput}`;
const fetchThis = fetch(URL)
// .then((response) => {
//     return response.json();
// })
// .then((bacon) => {
//     setGetName(bacon);
//     setBG();
// })



async function fetchMyData() {
    const fetchedData = await fetch(URL);
    const jsonFData = await fetchedData.json()
    setGetName(jsonFData);
    setBG();
    
}

fetchMyData();


log(fetchThis);