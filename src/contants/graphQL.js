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
        gender
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
      gender
      breed
      weight
      microchip
      photo
    }
}`

// Definindo a mutation para adicionar um pet
export const GRAPHQL_ADD_PET_MUTATION = 
`mutation AddPet(
    $name: String!,
    $birthday: String!,
    $breed: String!,
    $domain: String!,
    $gender: String!,
    $microchip: Int!,
    $photo: String!,
    $weight: Float!,
    $adoption: String!,
    $adoptionInfo: String!
  ) {
    addPet(
      name: $name,
      birthday: $birthday,
      breed: $breed,
      domain: $domain,
      gender: $gender,
      microchip: $microchip,
      photo: $photo,
      weight: $weight,
      adoption: $adoption,
      adoptionInfo: $adoptionInfo
    ) {
      ... on Pet {
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
      ... on PetExists {
        message
      }
    }
  }
`;

//
export const GRAPHQL_UPDATE_PET_MUTATION = 
`mutation UpdatePet($id: Int!, $edits: PetDataInput!) {
  editPet(id: $id, edits: $edits) {
    ... on Pet {
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
    ... on PetExists {
      message
    }
  }
}
`;

// Definindo a mutation para remover um pet
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
