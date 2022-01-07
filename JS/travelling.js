function loadingCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayingCountries(data))
}

loadingCountries()

const displayingCountries = countries => {
    const countriesContainer = document.getElementById('displaying-countries')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('countries')
        div.innerHTML =
            `<h2>Country Name: ${country.name.official}</h2>
            <h5>Country Capital: ${country.capital}</h5>
            <p>Continental: ${country.continents[0]}<p>
            <button onclick="countryDetails('${country.name.common}')">Country Details</button>
            `;
        countriesContainer.appendChild(div)
    })
}

const countryDetails = (country) => {
    const url = `https://restcountries.com/v3.1/name/${country}`;
    fetch(url)
        .then(res => res.json())
        .then(data => countryByName(data));

}

function countryByName(countries) {
    const countryDetails = document.getElementById('country-details');
    countryDetails.textContent = '';
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>Country Name: ${country.name.common}</h3>
        <h5>Region: ${country.region}<h5>
        <p>Poopulation: ${country.population}</p>
       <img src="${country.flags.png}"> `;
        countryDetails.appendChild(div)
    })
}