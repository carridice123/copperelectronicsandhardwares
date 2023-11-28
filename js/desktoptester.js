const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".home").classList.add('active')
}

if(pageName === "electronics.html"){
    document.querySelector(".electronicspage").classList.add('active')
}

if(pageName === "constructions.html"){
    document.querySelector(".constructionspage").classList.add('active')
}
if(pageName === "events.html"){
    document.querySelector(".eventspage").classList.add('active')
}
if(pageName === "rentals.html"){
    document.querySelector(".rentalcarspage").classList.add('active')
}

