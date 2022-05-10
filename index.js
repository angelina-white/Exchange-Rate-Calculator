// //does every function after loaded
document.addEventListener('DOMContentLoaded', (event) => 
{
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json")
    .then((response) => response.json())
    .then((country) => 
    {
        countryList(country.eur)
        toggle()
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

//toggles between exchange rate and calculator
function toggle()
{
    document.querySelector('#form-toggle').addEventListener('click', (e) => {
        document.querySelector('#exchange-display').classList.toggle('hidden')
        document.querySelector('#calculator-display').classList.toggle('hidden')
        e.target.textContent === 'Toggle to Exchange'? e.target.textContent = 'Toggle to Calculator':e.target.textContent = 'Toggle to Exchange'
    })
}

//displays country name, 1 euro to exchange rate
function displayCountryRate(name, country)
{
    const nameTitle = document.getElementById("nameHeader")
    nameTitle.innerHTML = name.toUpperCase()
    const amount = document.getElementById("amountDisplayed")
    amount.innerText = country[name]  
}


//displays country name, euros input form, amount of euros inputted to exchanged rate for country chosen
function calculateRate(name, country)
{
    const nameTitle = document.getElementById("nameHeader2")
    nameTitle.innerHTML = name.toUpperCase()

    const form = document.getElementById("calculator-form")
    form.addEventListener("submit", (event) =>
    {
        event.preventDefault()

        //variable for amount inputted
        const input = document.getElementById("amountOfEuros")
        const euros = document.getElementById("eurosAmount")
        euros.innerText = "Euros Amount: " + input.value

        //variable for exchange rate
        const rate = country[name]

        //take amount inputted and multiply by exchange rate
        const result = input.value * rate

        //variable for amount display
        const amount = document.getElementById("amountDisplayed2")
        amount.innerText = result
    })
}

