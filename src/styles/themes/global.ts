import {createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
   
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background:#E5E5E5;
  }  
  
:focus{
  outline: 0;
}

  body, input , button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  
  
  @media only screen 
    and (device-width: 428px) 
    and (device-height: 926px) 
    and (-webkit-device-pixel-ratio: 3) { 
      body {
    display: flex;
  justify-content: center;
  align-items:center;
  margin-right:8rem  }
 }

@media only screen
and (width: 390px) 
and (-webkit-device-pixel-ratio: 3) { 

}


  `
