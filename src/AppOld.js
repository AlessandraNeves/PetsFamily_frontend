import React from "react"
//import GlobalStyle from "./styles/global"
import RoutesApp from "./routes"
//import { AuthProvider } from "./contexts/auth"

const App = () => {
    return (
        <RoutesApp />
    )
}

export default App

// import React from "react"
// import GoogleLogin from 'react-google-login'


// //import RoutesApp from "./routes"
// // import { AuthProvider } from "./contexts/auth"

// // const App = () => {
// //     return (
// //          <AuthProvider>
// //             <RoutesApp />
// //          </AuthProvider> 
// //     )
// // }


// //import { useNavigate } from 'react-router-dom';

// const App = () => {
//     const responseGoogle = (response) => {
//         console.log(response)
//         // const { profileObj: {name, email, imageUrl}} = response
//         // setName(name)
//         // setEmail(email)
//         // setProfilePic(imageUrl)
    
//         // const res = signin(email, '123')
    
//         // if (res) {
//         //     setError(res)
//         //     return navigate("/Pets")
//         // }
//     }
    
//     return (
//         <div className="google-container">
//             <div></div>
//             <GoogleLogin
//                 //clientId={LOGIN_CLIENT_ID}
//                 buttonText='Faça seu login com Google'
//                 onSuccess={responseGoogle}
//                 //onSuccess={() => navigate('/pages/Pets')}
//                 onFailure={responseGoogle}
//             />
//         </div>
//     )
// }

// export default App

