function filterByTerm(inputArr, searchTerm) {
    searchTerm = searchTerm.toLowerCase()
    return inputArr.filter(function (arrayElement) {
        return arrayElement.url.toLowerCase().match(searchTerm)
    })
}
function filterByTerm2(inputArr, searchTerm) {
    searchTerm = searchTerm.toLowerCase()
    return inputArr.filter(function (arrayElement) {
        return arrayElement.planeta.toLowerCase().match(searchTerm)
    })
}
describe("Funkcja filtrująca", () => {
    test("filtrowanie na podstawie wyszukiwanego terminu (link) toLowerCase", () => {
        const input = [
            { id: 1, planeta: "Merkury", url: "https://pl.wikipedia.org/wiki/Merkury" },
            { id: 2, planeta: "Wenus", url: "https://pl.wikipedia.org/wiki/Wenus" },
            { id: 3, planeta: "Ziemia", url: "https://pl1.wikipedia.org/wiki/Ziemia" }
        ]

        const output = [{ id: 3, planeta: "Ziemia", url: "https://pl1.wikipedia.org/wiki/Ziemia" }]

        expect(filterByTerm(input, "ziemia")).toEqual(output)
    })
    test("filtrowanie na podstawie wyszukiwanego terminu (link) toLowerCase planet", () => {
        const input = [
            { id: 1, planeta: "Merkury", url: "https://pl.wikipedia.org/wiki/Merkury" },
            { id: 2, planeta: "Wenus", url: "https://pl.wikipedia.org/wiki/Wenus" },
            { id: 3, planeta: "Ziemia", url: "https://pl1.wikipedia.org/wiki/Ziemia" }
        ]

        const output = [{ id: 3, planeta: "Ziemia", url: "https://pl1.wikipedia.org/wiki/Ziemia" }]

        expect(filterByTerm(input, "ziemia")).toEqual(output)
    })
})
