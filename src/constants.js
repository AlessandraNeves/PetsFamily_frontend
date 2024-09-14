export const GRAPHQL_GET_PET = `query {
    allPets{
        id
        name
        birthday
        domain
        breed
        weight
        microchip
    }
  }`