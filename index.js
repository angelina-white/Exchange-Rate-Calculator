document.addEventListener('DOMContentLoaded', (event) => 
{
    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json")
    .then((response) => response.json())
    .then((element) => console.log(element.eur))
})

function countryList(country) {
    const newImage = document.createElement('img')
    newImage.src = country.image
    
    newImage.addEventListener('click', () => displayCountyRate(country))
    countryList.append(newImage)
}
