function populateUFs()  {
    const ufselect =  document.querySelector("select[name=estado]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res =>  res.json())
    .then( states => {
      for (const state of states) {
          ufselect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`}
   })
  }

  populateUFs()
  
  
  function getCities(event){
      const citySelect =  document.querySelector("select[name=cidade]")
      const stateInput =  document.querySelector("input[name=state]")
      const ufValue = event.target.value
      
      const   indexOfSelectstate = event.target.selectedIndex

     stateInput.value = event.target.options[indexOfSelectstate].text
    
      const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

      citySelect.innerHTML = "<option value> Selecione a cidade</option>"
      citySelect.disabled = true

      fetch(url)
      .then( res =>  res.json())
      .then( cities => {
        for (const city of cities) {
          citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`}
          citySelect.disabled = false
     })
  }


  document
  .querySelector ("select[name=estado]")
  .addEventListener ("change", getCities )

  var input    = document.getElementById("my-file"),
    fileName = document.getElementById("file-name");

input.addEventListener("change", function(){
  fileName.textContent = this.value;
  console.log(fileName);
});