document.addEventListener('DOMContentLoaded', (event) => 
{
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json")
    .then((response) => response.json())
    .then((country) => 
    {
        countryList(country)
        displayCountryRate(country)
        calculateRate(country)
    })
    
})

function countryList(country) {
    const countryList = document.querySelector('#country-list')
    countryList.textContent = ''
    country.forEach(country => {
        const li = document.createElement('li')
        li.textContent = country
        
    countryList.addEventListener('click', () => displayCountryRate(country))
    countryList.append(li)
})
}

function displayCountryRate(country)
{
    const amount = document.getElementById("amount")
    console.log(amount)
    console.log(country)
    //variable for exchange rate
    //set amount text for exchange rate
    
}

function calculateRate(country)
{
    console.log(country)
    const form = document.getElementById("calculator-form")
    form.addEventListener("submit", (event) =>
    {
        event.preventDefault()
        console.log("clicky")
        //variable for amount inputted
        //variable for exchange rate
        //take amount inputted and multiply by exchange rate
        //variable for result
        //variable for amount display
        //set text for amount display to result
    })
}
