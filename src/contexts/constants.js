export const LOGIN_CLIENT_ID = `333612867576-apfbcmsl9mubidi0q5bomn71rmii7pe2.apps.googleusercontent.com`
export const GRAPHQL_API = `http://localhost:8000/graphql`

export const GRAPHQL_GET_PET_QUERY = 
`query {
    animals: allPets{
        id
        name
        birthday
        domain
        breed
        weight
        microchip
    }
}`