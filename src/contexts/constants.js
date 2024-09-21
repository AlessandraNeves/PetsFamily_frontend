// Definindo o CLIENT ID para login com o GOOGLE
export const LOGIN_CLIENT_ID = `1056869302283-kkth400508pp2rs9860b5vsfeeb83bh6.apps.googleusercontent.com`

// Definindo URI do GRAPHQL
export const GRAPHQL_API = `http://localhost:8000/graphql`

// Definindo a query para listar os pet
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

// Definindo a query para pesquisar um pet
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

// Definindo a mutation para adicionar um pet
export const GRAPHQL_ADD_PET_MUTATION = 
`mutation AddPet($input: AddPetInput!) {
    addPet(input: $input) {
      id
      name
      birthday
      breed
      domain
      gender
      microchip
      photo
      weight
    }
  }
`

// Definindo a mutation para adicionar um pet
export const GRAPHQL_REMOVE_PET_MUTATION = 
`mutation RemovePet($id: Int!) {
    removePet(id: $id)
      {
 ... on PetRemoveMessage{
         message
       }
     }
  }
`;
