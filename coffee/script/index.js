const{ log } = console
log('Is this thing on?')


// create empty unordered list
const section = document.createElement('section');
section.classList.add('emails')
document.body.appendChild(section)

const ul = document.createElement('ul');
section.appendChild(ul)

// create list of clickable orders
const main = document.createElement('main')
main.classList.add('all-orders')
document.body.appendChild(main)
const ul2 = document.createElement('ul');
main.appendChild(ul2)

// create list of details of an order
const details = document.createElement('div')
details.classList.add('order-details')
document.body.appendChild(details)





// store customers API in local
const setEmail = (el) => {
    const allCustomers = JSON.stringify(el.results);
    localStorage.setItem('customers', allCustomers);
    // log(allCustomers)
    // log(el.results)
}

// store orders API in local
const setOrder = (el) => {
    const allOrders = JSON.stringify(el.results);
    localStorage.setItem('orders', allOrders);
    // log(allOrders)
    log(el.results)
}

// store drinks API in local
const setDrink = (el) => {
    const allDrinks = JSON.stringify(el.results);
    localStorage.setItem('drinks', allDrinks);
    log(el.results)
}


// use data to print email on page
const getEmail = () => {
    const customers = JSON.parse(localStorage.getItem('customers'))
    //add list items with each element
    customers.forEach(el => {
        const li = document. createElement('li');
        li.innerHTML = `<strong>${el.name}:</strong> ${el.email}`
        ul.appendChild(li)
    });
}

// use data to make list on page
const getOrders = () => {
    const orders = JSON.parse(localStorage.getItem('orders'))
    const drinks = JSON.parse(localStorage.getItem('drinks'))
    const customers = JSON.parse(localStorage.getItem('customers'))
    // add list items with each element
    orders.forEach(el => {
        const li = document. createElement('li');
        li.innerHTML = `order #${el.id}`
        ul2.appendChild(li)
    // make it look like a menu..sorta
        ul2.style.display = 'flex';
        ul2.style.listStyle = 'none';
        li.style.padding = "10px";
    // make items clickable
        li.addEventListener('click', () => {
            details.innerHTML = `order <strong>#${el.id}</strong> is <strong>${el.size}</strong> of drink <strong>#${el.drink_id}</strong> for customer <strong>#${el.customer_id}</strong> on <strong>${el.date}</strong>.`
        }
    )});
}


const orders = `https://meanmom.jonathan-ray.com/orders`;
const customers = `https://meanmom.jonathan-ray.com/customers`;
const drinks = `https://meanmom.jonathan-ray.com/drinks`;


async function fetchMyData() {
    const fetchOrders = await fetch(orders);
    const jsonFO = await fetchOrders.json();
    
    const fetchCustomers = await fetch(customers);
    const jsonFC = await fetchCustomers.json();

    const fetchDrinks = await fetch(drinks);
    const jsonFD = await fetchDrinks.json();

    setEmail(jsonFC);
    setOrder(jsonFO);
    setDrink(jsonFD);
    getEmail();
    getOrders();
    


    // setGetName(jsonFData);
    // setBG();
    
}

fetchMyData();