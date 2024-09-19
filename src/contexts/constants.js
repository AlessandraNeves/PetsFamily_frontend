export const LOGIN_CLIENT_ID = `1056869302283-kkth400508pp2rs9860b5vsfeeb83bh6.apps.googleusercontent.com`
export const GRAPHQL_API = `http://localhost:8000/graphql`
export const GRAPHQL_GET_PET_QUERY = 
`query {
    allPets: allPets{
        id
        name
        birthday
        domain
        breed
        weight
        microchip
        photo
    }
}`
export const GRAPHQL_GET_PET_SEARCH = 
`query SearchPet($termo: String!) {
    searchPet(queryInput: { termo: $termo }) {
      id
      name
      birthday
      domain
      breed
      weight
      microchip
      photo
    }
}`

