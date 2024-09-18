import {createGlobalStyle} from 'styled-components'
//@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'PET_FAMILY_NAV';
  src: url(../assets/fonts/Light.ttf);
 }
 
* {
    margin: 0;
    padding: 0;
}

body {
    width: 100vw
    height: 100vh
    background-color: #000000
    font-family: Arial
}

header {
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0px;
    background: black;
  }
  
  .user {
    position: absolute;
    width: 120px;
    height: 40px;
    right: 0px;
    top: 4px;
    background: url(../assets/img/user.png);
    background-repeat: no-repeat;
    background-position: 60px;
    display: flex;
    align-items: center;
  }
  
  .user span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #FFFFFF;
    margin: 0px 2px;
  }
  

  
  .home-card {
  
    justify-content: center;
    align-items: center;
    min-height: inherit;
    max-width: inherit;
    margin: 30px;
  }
  
  .h1 {
    font-size: 30px;
    font-family: 'Roboto';
    color: white;
    text-align: center;
    margin-bottom: 15px;
  }
  
  .h5 {
    font-size: 13px;
    font-family: 'Roboto';
    color: #3D6B42;
    text-align: left;
  }
  
  .container img {
    object-fit: contain;
  }

  .content-login {
    width: 300px;
    height: 280px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 5% 0;
    /* box-shadow: 1px 2px 10px rgba(255, 255, 255, 0.478), 3px 6px 20px black; */
    padding: 20px;
  }
  
  /*
  input {
    width: 100%;
    height: 30px;
    /* background: transparent;  */
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    color: white;
  }*/
  
  .input-field {
    position: relative;
    margin-bottom: 15px;
    font-size: 13px;
    font-weight: 500;
  }
  
  .label {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-family: 'Roboto';
    font-size: 18px;
    transform: translateY(18px);
    transition: .25s ease-in-out;
  }
  
  input:focus {
    border-bottom: 1px solid #3D6B42;
    box-shadow: 0 1px 0 0#3D6B42;
  
  }
  
  input:focus + label{
    transform: translateY(-14px) scale(.8);
    color:  #3D6B42;
    font-weight: bold;
  }
  
  input:not(:placeholder-shown) + label{
    transform: translateY(-14px) scale(.8);
    color:  #3D6B42;
    font-weight: bold;
  }
  
  input:not(:placeholder-shown){
    border-bottom: 2px solid #3D6B42;
    box-shadow: 0 1px 0 0 #3D6B42;
  }
  
  input::placeholder{
    color: transparent;
  }
  
  .button-login{
    padding: 15px;
  } 
`

export default GlobalStyle
