
let firstName=prompt("Enter your Name")
console.log("Enter your Name "+ firstName)
alert("Welcome "+firstName)
let age=prompt("Enter Your Age")
console.log("Enter Your Age "+age)
alert("may Allah save you")
let country=prompt("Enter your Country")
console.log("Enter your Country "+country)
alert("Niiiice country")
let city=prompt("Enter your city")
console.log("Enter your city "+city)
alert("I hope visit "+city)

let conf=confirm(`plz Tell me are these informations are correct ?\n 
your first name is : ${firstName}
your age is : ${age}
your country is :${country}
your city is :${city}

if the infromation is incorrect plz click cancle
`)

if(conf==false)
{
    alert("Oppss .. The browser will be roladed to try agian")
    window.location.reload()
}

let p_firstName=document.getElementById("firstName")
let p_age=document.getElementById("age")
let p_country=document.getElementById("country")
let p_city=document.getElementById("city")

function viewdata()
{
p_firstName.innerHTML=firstName
p_age.innerHTML=age
p_country.innerHTML=country
p_city.innerHTML=city
}

viewdata()