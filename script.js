function $(id){
    return document.getElementById(id)
}

const pokemonNameInput = $("pokemonName")
const searchButton = $("searchButton")
const pokemonNameDisplay = $("pokemonNameDisplay")
const pokemonImage = $("pokemonImage")
const pokemonType = $("pokemonType")
const pokemonHeight = $("pokemonHeight")
const pokemonWeight = $("pokemonWeight")

searchButton.addEventListener("click", async () =>{
    const pokemonName = pokemonNameInput.value.toLowerCase()

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if (!response.ok){ throw new Error(`Pokemon não encontrado: ${response.status}`)}
        
        const data = await response.json()
        console.log(data)
         pokemonNameDisplay.textContent = data.name
         pokemonImage.src = data.sprites.front_default

         pokemonType.textContent = `Tipo: ${data.types.map(type => type.type.name).join(", ")}`;

         pokemonHeight.textContent = `Altura: ${data.height / 10}m.`
         pokemonWeight.textContent = `Peso: ${data.weight / 10}kg.`

    } catch (error) {
       alert(`Erro ao buscar Pokemon: , ${error}`)

       pokemonNameDisplay.textContent = "POKÉMON NÃO ENCONTRADO"
       pokemonImage.src = ""
       pokemonType.textContent = ""
       pokemonHeight.textContent = ""
       pokemonWeight.textContent = ""
    }






      })