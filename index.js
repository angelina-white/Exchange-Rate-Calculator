//does every function after loaded
document.addEventListener('DOMContentLoaded', (event) => 
{
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json")
    .then((response) => response.json())
    .then((country) => 
    {
        countryList(country.eur)
        toggle(country)
        displayCountryRate(country)
        calculateRate(country)
    })
    
})

//displays list of country names
function countryList(country) {
    const countryList = document.querySelector('#country-list')
    countryList.textContent = ''
    const countryNames = [...Object.keys(country)]
    countryNames.forEach((country) => 
    {
        const li = document.createElement('li')
        li.textContent = country
        countryList.append(li)
        //countryList.addEventListener('click', () => displayCountryRate(country))
    })
}

//toggles between exchange rate and calculator
function toggle(country)
{
    // console.log(country)
}

//displays country name, 1 euro to exchange rate
function displayCountryRate(country)
{
    const amount = document.getElementById("amount")
    // console.log(amount)
    // console.log(country)
    //variable for exchange rate
    //set amount text for exchange rate
    
}

//displays country name, euros input form, amount of euros inputted to exchanged rate for country chosen
function calculateRate(country)
{
    // console.log(country)
    const form = document.getElementById("calculator-form")
    form.addEventListener("submit", (event) =>
    {
        event.preventDefault()
        // console.log("clicky")
        //variable for amount inputted
        //variable for exchange rate
        //take amount inputted and multiply by exchange rate
        //variable for result
        //variable for amount display
        //set text for amount display to result
    })
}
