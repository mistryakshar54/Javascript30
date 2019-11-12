document.getElementById("ErrorMsg").innerText = "Fetching Data..";
const countriesList = [];
const countriesPromise = fetch(
  "https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json"
);
countriesPromise.then( resp => resp.json() )
.then( respData => {
    countriesList.push(...respData);
    document.getElementById("ErrorMsg").innerText = "";
})
.catch( respError => {console.log(respError)
    document.getElementById("ErrorMsg").innerText="Error Fetching Data!";
});

function searchData(searchKey) {
  //perform throttling here...
  if (searchKey.length > 2) {
    filterSearch(searchKey);
  }
}

function filterSearch(searchKey) {
    const countryList = countriesList.filter(country =>
      country.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    const htmlToSet = countryList.map(country => {
        return `<li class="list-item">${country.name} - ${country.code}</li>`
    });
    document.getElementById("searchInputList").innerHTML = htmlToSet.join('');
}