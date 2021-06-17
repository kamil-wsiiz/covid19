# COVID-19 API

NodeJS (+ TypeScript), MongoDB (mongoose)

Dane pobierane są codziennie o 12 z API ministerstwa zdrowia

## Endpointy

Przypadki:

    GET https://covidwsiiz.herokuapp.com/cases
    GET https://covidwsiiz.herokuapp.com/cases/from/2021-01-01
    GET https://covidwsiiz.herokuapp.com/cases/to/2021-06-01
    GET https://covidwsiiz.herokuapp.com/cases/from/2021-01-01/to/2021-06-01

Szczepienia:

    GET https://covidwsiiz.herokuapp.com/vaccinations
    GET https://covidwsiiz.herokuapp.com/vaccinations/from/2021-01-01
    GET https://covidwsiiz.herokuapp.com/vaccinations/to/2021-06-01
    GET https://covidwsiiz.herokuapp.com/vaccinations/from/2021-01-01/to/2021-06-01