document.addEventListener('DOMContentLoaded', (event) => 
{
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json")
    .then((response) => response.json())
    .then((countryExchange) => 
    {
        displayCountryRate(countryExchange)
        calculateRate(countryExchange)
    })
    
})










function displayCountryRate(country)
{
    const amount = document.getElementById("amount")
    console.log(amount)
    console.log(country)
}

function calculateRate(country)
{
    console.log(country)
    const form = document.getElementById("calculator-form")
    form.addEventListener("submit", (event) =>
    {
        event.preventDefault()
        console.log("clicky")
    })
}