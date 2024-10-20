const flexCountries = document.getElementsByClassName('flex-countries')[0]
const search =document.getElementsByTagName('input')[0]
const containCountries = document.getElementsByClassName('contain-countries')[0]
const nameSort = document.getElementsByClassName('name-sort')[0]
const capitalSort = document.getElementsByClassName('capital-sort')[0]
const populationSort =document.getElementsByClassName('population-sort')[0]
let countryStartFiltred = countries;
let isSorted = false
let isSortedCapital = false
let isPopulationSorted = false
let letters = ''
function sort(mas){
        flexCountries.innerHTML = ''
        for (country of mas){
            const flexCountryBox = document.createElement('div')
            flexCountryBox.className = 'flex-country'
            const flag = document.createElement('img')
            flag.src = country.flag
            const countryName = document.createElement('p')
            countryName.textContent = country.name
            countryName.className = 'country-name'
            countryName.style.textAlign = 'center'
            const capital = document.createElement('p')
            capital.textContent = `Capital: ${country.capital}`
            const languages = document.createElement('p')
            languages.innerHTML = `Languages: ${country.languages.join(', ')}<br>`;
            const population = document.createElement('p')
            population.textContent = `Population: ${country.population.toLocaleString('en-US')}`
            flexCountryBox.appendChild(flag)
            flexCountryBox.appendChild(countryName)
            flexCountryBox.appendChild(capital)
            flexCountryBox.appendChild(languages)
            flexCountryBox.appendChild(population)
            flexCountries.appendChild(flexCountryBox)
        }
}

for (country of countries){
    const flexCountryBox = document.createElement('div')
    flexCountryBox.className = 'flex-country'
    const flag = document.createElement('img')
    flag.src = country.flag
    const countryName = document.createElement('p')
    countryName.textContent = country.name
    countryName.className = 'country-name'
    countryName.style.textAlign = 'center'
    const capital = document.createElement('p')
    capital.textContent = `Capital: ${country.capital}`
    const languages = document.createElement('p')
    languages.innerHTML = `Languages: ${country.languages.join(', ')}<br>`;
    const population = document.createElement('p')
    population.textContent = `Population: ${country.population.toLocaleString('en-US')}`
    flexCountryBox.appendChild(flag)
    flexCountryBox.appendChild(countryName)
    flexCountryBox.appendChild(capital)
    flexCountryBox.appendChild(languages)
    flexCountryBox.appendChild(population)
    flexCountries.appendChild(flexCountryBox)
}

search.addEventListener('input', r =>{
    flexCountries.innerHTML = ''
    letters = search.value
    if (letters === ''){
        for (country of countries){
            const flexCountryBox = document.createElement('div')
            flexCountryBox.className = 'flex-country'
            const flag = document.createElement('img')
            flag.src = country.flag
            const countryName = document.createElement('p')
            countryName.textContent = country.name
            countryName.className = 'country-name'
            countryName.style.textAlign = 'center'
            const capital = document.createElement('p')
            capital.textContent = `Capital: ${country.capital}`
            const languages = document.createElement('p')
            languages.innerHTML = `Languages: ${country.languages.join(', ')}<br>`;
            const population = document.createElement('p')
            population.textContent = `Population: ${country.population.toLocaleString('en-US')}`
            flexCountryBox.appendChild(flag)
            flexCountryBox.appendChild(countryName)
            flexCountryBox.appendChild(capital)
            flexCountryBox.appendChild(languages)
            flexCountryBox.appendChild(population)
            flexCountries.appendChild(flexCountryBox)
        }
    }
    else{
        countryStartFiltred = countries.filter((country) => 
            country.name.toUpperCase().includes(letters.toUpperCase()) ||
            country.capital && country.capital.toUpperCase().includes(letters.toUpperCase())||
            country.languages.some((language) => language.toUpperCase().includes(letters.toUpperCase())));
        containCountries.innerHTML = ''
        const numberOf = document.createElement('p')
        numberOf.textContent = `${countryStartFiltred.length} countries satisfied the search criteria`
        numberOf.style.color = '#f2a93b'
        numberOf.style.marginBottom = '20px'
        containCountries.appendChild(numberOf)
        for (country of countryStartFiltred){
            const flexCountryBox = document.createElement('div')
            flexCountryBox.className = 'flex-country'
            const flag = document.createElement('img')
            flag.src = country.flag
            const countryName = document.createElement('p')
            countryName.textContent = country.name
            countryName.className = 'country-name'
            countryName.style.textAlign = 'center'
            const capital = document.createElement('p')
            capital.textContent = `Capital: ${country.capital}`
            const languages = document.createElement('p')
            languages.innerHTML = `Languages: ${country.languages.join(', ')}<br>`;
            const population = document.createElement('p')
            population.textContent = `Population: ${country.population.toLocaleString('en-US')}`
            flexCountryBox.appendChild(flag)
            flexCountryBox.appendChild(countryName)
            flexCountryBox.appendChild(capital)
            flexCountryBox.appendChild(languages)
            flexCountryBox.appendChild(population)
            flexCountries.appendChild(flexCountryBox)
        }
    }
})

nameSort.addEventListener('click', e => {
    if(isSorted === false){
        const sortedCountries = countryStartFiltred.sort((a, b) => b.name.localeCompare(a.name))
        sort(sortedCountries)
        nameSort.textContent = `NAME ${String.fromCodePoint(8593)}`;
        capitalSort.textContent = `CAPITAL`;
        populationSort.textContent = `POPULATION`
        isSorted = true
    }
    else{
        const sortedCountries = countryStartFiltred.sort((a, b) => a.name.localeCompare(b.name))
        sort(sortedCountries)
        isSorted = false
        nameSort.textContent = `NAME ${String.fromCodePoint(8595)}`;
        capitalSort.textContent = `CAPITAL`;
        populationSort.textContent = `POPULATION`
    }
})

capitalSort.addEventListener('click', e =>{
    if(isSortedCapital === false){
        const sortedCountries = countryStartFiltred.sort((a, b) => b.capital && b.capital.localeCompare(a.capital && a.capital))
        sort(sortedCountries)
        nameSort.textContent = `NAME`;
        capitalSort.textContent = `CAPITAL ${String.fromCodePoint(8593)}`;
        populationSort.textContent = `POPULATION`
        isSortedCapital = true
    }
    else{
        const sortedCountries = countryStartFiltred.sort((a, b) => a.capital && a.capital.localeCompare(b.capital && b.capital))
        sort(sortedCountries)
        isSortedCapital = false
        populationSort.textContent = `POPULATION`
        capitalSort.textContent = `CAPITAL ${String.fromCodePoint(8595)}`;
        nameSort.textContent = `NAME`;
    }
})

populationSort.addEventListener('click', e =>{
    if(isPopulationSorted === false){
        const sortedCountries = countryStartFiltred.sort((a, b) => b.population - a.population)
        sort(sortedCountries)
        nameSort.textContent = `NAME`;
        capitalSort.textContent = `CAPITAL`;
        populationSort.textContent = `POPULATION ${String.fromCodePoint(8595)}`
        isPopulationSorted = true
    }
    else{
        const sortedCountries = countryStartFiltred.sort((a, b) => a.population - b.population)
        sort(sortedCountries)
        isPopulationSorted = false
        nameSort.textContent = `NAME`;
        capitalSort.textContent = `CAPITAL`;
        populationSort.textContent = `POPULATION ${String.fromCodePoint(8593)}`;
    }
})


const graphWrapper = document.getElementsByClassName('graph-wrapper')
const graphButtons = document.getElementsByClassName('graph-buttons')
const populationButton = document.getElementsByClassName('population')
const tenMost = document.createElement('p')
populationButton[0].addEventListener('click', e =>{
    const countryWithArea = countryStartFiltred.filter((countr) => countr.population);
    console.log(countryWithArea) 
    const sortedCountries = countryWithArea.sort((a, b) => b.population - a.population); 
    const largestCountries = sortedCountries.slice(0, 10); 
    const sumOfPopulation = countries.reduce((acc, curr) => acc + curr.population, 0);
    largestCountries.unshift({name:'World',population:sumOfPopulation})
    graphWrapper[0].style.display = 'flex'
    graphWrapper[0].innerHTML = ''
    tenMost.textContent = '10 Most populated countries  in found countries'
    tenMost.style.fontSize = '20px'
    tenMost.style.fontWeight = '400'
    tenMost.style.marginTop = '30px'
    graphButtons[0].appendChild(tenMost)
    for (country of largestCountries){
        const bar = document.createElement('div')
        const barFlex = document.createElement('div')
        barFlex.style.display = 'flex'
        barFlex.style.flexDirection = 'row'
        barFlex.style.justifyContent = 'flex-start'
        barFlex.style.alignItems = 'center'
        barFlex.style.gap = '15px'
        const title = document.createElement('span')
        const population = document.createElement('span')
        title.textContent = country.name
        title.style.fontFamily = 'Montserrat'
        title.style.fontWeight = '500'
        title.style.fontSize = '20px'
        population.textContent = country.population.toLocaleString('en-US')
        population.style.fontFamily = 'Montserrat'
        population.style.fontWeight = '500'
        population.style.fontSize = '20px'
        bar.style.borderRadius = '5px'
        bar.style.backgroundColor = '#f4ad40'
        bar.style.width = `${(Number(country.population) * 100) / Number(sumOfPopulation)}%`
        bar.style.height = '35px'
        barFlex.appendChild(title)
        barFlex.appendChild(bar)
        barFlex.appendChild(population)
        graphWrapper[0].appendChild(barFlex)
        }
    })


const languageButton = document.getElementsByClassName('languages')
languageButton[0].addEventListener('click', e =>{
        const languages = {};
    for (let i = 0; i <  countryStartFiltred.length; ++i){
        for (const language of countryStartFiltred[i].languages) {
            const lowerCaseWord = language.toLowerCase();
            if (languages[lowerCaseWord]) {
                languages[lowerCaseWord]++;
            } else {
                languages[lowerCaseWord] = 1;
                }
            }
    }
    const frequentLanguages = Object.keys(languages).map(language => ({
        language: language,
        count: languages[language]
    }));

    const sumLanguage = frequentLanguages.reduce((acc, curr) => acc + Number(curr.count), 0);
    frequentLanguages.sort((a, b) => b.count - a.count);
    const tenLanguages = frequentLanguages.slice(0, 10);
    graphWrapper[0].style.display = 'flex'
    graphWrapper[0].innerHTML = ''
    tenMost.textContent = '10 Most spoken languages in found countries'
    tenMost.style.fontSize = '20px'
    tenMost.style.fontWeight = '400'
    graphButtons[0].appendChild(tenMost)
    for (language of tenLanguages){
        const bar = document.createElement('div')
        const barFlex = document.createElement('div')
        barFlex.style.display = 'flex'
        barFlex.style.flexDirection = 'row'
        barFlex.style.justifyContent = 'flex-start'
        barFlex.style.alignItems = 'center'
        barFlex.style.gap = '15px'
        const title = document.createElement('span')
        const population = document.createElement('span')
        title.textContent = language.language[0].toUpperCase() + language.language.slice(1, language.language.length)
        title.style.fontFamily = 'Montserrat'
        title.style.fontWeight = '500'
        title.style.fontSize = '20px'
        population.textContent = language.count
        population.style.fontFamily = 'Montserrat'
        population.style.fontWeight = '500'
        population.style.fontSize = '20px'
        bar.style.borderRadius = '5px'
        bar.style.backgroundColor = '#f4ad40'
        bar.style.width = `${(language.count * 100) / frequentLanguages.length}%`
        bar.style.height = '35px'
        barFlex.appendChild(title)
        barFlex.appendChild(bar)
        barFlex.appendChild(population)
        graphWrapper[0].appendChild(barFlex)
    }
})
