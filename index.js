//does every function after loaded
document.addEventListener('DOMContentLoaded', (event) => 
{
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json")
    .then((response) => response.json())
    .then((country) => 
    {
        countryList(country.eur)
        toggle(country)
    })
    
})

//displays list of country names
function countryList(country) {
    const countryList = document.querySelector('#country-list')
    countryList.textContent = ''
    Object.keys(country).forEach((name) => 
    {
        const li = document.createElement('li')
        li.textContent = name.toUpperCase()
        li.addEventListener('click', () => displayCountryRate(name, country))
        li.addEventListener('click', () => calculateRate(name, country))
        countryList.append(li)
    })
}
document.querySelector('#form-toggle').addEventListener('click', (e) => {
    document.querySelector('#main').classList.toggle('hidden')
    document.querySelector('#calculator-form').classList.toggle('hidden')
    e.target.textContent === 'Toggle to Calculator Form'? e.target.textContent = 'Toggle to Main':e.target.textContent = 'Toggle to Calculator Form'

})
//toggles between exchange rate and calculator
function toggle(country)
{
    // console.log(country)
}

//displays country name, 1 euro to exchange rate
function displayCountryRate(name, country)
{
    const newName = document.getElementById("country-name")
    newName.innerText = "Country Code: " + name.toUpperCase()
    const amount = document.getElementById("amountDisplayed")
    amount.innerText = country[name]  
}

//displays country name, euros input form, amount of euros inputted to exchanged rate for country chosen
function calculateRate(country)
{
    console.log("from calculate function" + country)
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
