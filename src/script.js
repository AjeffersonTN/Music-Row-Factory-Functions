const jumpStopRecords = []
const chattenRecords = []
const polarRecords = []

const createCountryArtist = (name, age) => ({
    "name": name,
    "age": age,
})
const createBlueGrassArtist = (name, age) => ({
    "name": name,
    "age": age,
})
const createFunkArtist = (name, age) => ({
    "name": name,
    "age": age,
})
const createRapArtist = (name, age) => ({
    "name": name,
    "age": age,
})
const createPopArtist = (name, age) => ({
    "name": name,
    "age": age,
})
chattenRecords.push(createCountryArtist("Bruce Atikins", "23"))
polarRecords.push(createPopArtist("Jensen Brown", "20"))
jumpStopRecords.push(createFunkArtist("Dre Funkz", "25"))
jumpStopRecords.push(createRapArtist("Dusta Grimes", "21"))
chattenRecords.push(createBlueGrassArtist("Bartholomew Danielson", "23"))
chattenRecords.push(createCountryArtist("Avilee Dallas", "19"))
polarRecords.push(createPopArtist("Austin Kinkaid", "22"))
jumpStopRecords.push(createRapArtist("Loyoncé Branis", "27"))

console.log(jumpStopRecords, chattenRecords, polarRecords)