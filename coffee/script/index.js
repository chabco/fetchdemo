const{ log } = console
log('Is this thing on?')


// create unordered list
const div = document.createElement('div');
document.body.appendChild(div)

const ul = document.createElement('ul');
div.appendChild(ul)

// create order ocf


const setEmail = (el) => {
    const allResults = JSON.stringify(el.results);
    localStorage.setItem('customers', allResults);
    // log(allResults)
    // log(el.results)
}

const getEmail = () => {
    const customers = JSON.parse(localStorage.getItem('customers'))
    //add list items with each element
    customers.forEach(el => {
        const li = document. createElement('li');
        li.innerHTML = `${el.email}`
        ul.appendChild(li)
    });
}




const orders = `https://meanmom.jonathan-ray.com/orders`;
const customers = `https://meanmom.jonathan-ray.com/customers`;
const drinks = `https://meanmom.jonathan-ray.com/drinks`;


async function fetchMyData() {
    // const fetchOrders = await fetch(orders);
    // const jsonFO = await fetchOrders.json()
    
    const fetchCustomers = await fetch(customers);
    const jsonFC = await fetchCustomers.json();

    // const fetchDrinks = await fetch(drinks);
    // const jsonFD = await fetchDrinks.json();

    setEmail(jsonFC);
    getEmail();
    


    // setGetName(jsonFData);
    // setBG();
    
}

fetchMyData();