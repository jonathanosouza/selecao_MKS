import styled from "styled-components"



export const SelectedCoffee = styled.div `
display: flex;
flex-direction: column;
justify-items: space-between;
align-items: flex-end;
padding: 10px;
gap: 28px;
width: 100%;
border-radius: 6px 48px;

`

export const SelectedCoffeContainer = styled.div `
background: white;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
padding: 10px;
width: 40rem;
border-radius: 10px;
justify-content: space-around;
align-items: center;

img{
  width: 5rem;
}
> span{
  flex-wrap : wrap;
  width: 1rem;
}

@media (max-width: 300px)
{
  width: 25rem;
  margin-left: 15rem;
  margin-top: 1.5rem;
  img{
  width: 3rem;
}
> span{
  flex-wrap : wrap;
  width: 1rem;
}
}

@media only screen 
    and (device-width: 428px) 
    and (device-height: 926px) 
    and (-webkit-device-pixel-ratio: 3) { 
      width: 25rem;
  margin-left: 12rem;
  margin-top: 1.5rem;
  img{
  width: 4rem;
}
> span{
  flex-wrap : wrap;
  width: 1rem;
    }
}
`
export const AddOrRemoveContainter = styled.div `
display: flex;
gap: 10px;
justify-content: center;
align-items: center;

`
export const AddToCartChekout = styled.div`
display: flex;
height: 38px;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 3px;
width: 80px;
border-radius: 12px;
background: ${(props) => props.theme['gray-30']};

button{
  border: 0;
  background: none;
  color: ${(props) => props.theme['purple']};
}

button:hover{
  border: 0;
  background: none;
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

}

span{
  display: flex;
  
  font-size: 14px;
}
`
export const RemoveToCartChekout = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: absolute;
margin-left:29rem;
margin-top: -6rem;
padding: 10px;
gap: 4px;
width: 2rem;
height: 2rem;
border-radius: 50%;
background: ${(props) => props.theme['black-10']};
border: none;
cursor: pointer;


button{
  border: 0;
  background: none;
  color: ${(props) => props.theme['purple']};
}

button:hover{
  border: 0;
  background: none;
  color: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

}

span{
  display: flex;
    font-size: 14px;
}

@media (max-width: 500px)
{
    margin-right: 8rem;
}

@media only screen 
    and (device-width: 428px) 
    and (device-height: 926px) 
    and (-webkit-device-pixel-ratio: 3) { 
      margin-right: 8rem;
}
`

export const TotalConfirmed = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 gap: 1rem;
 margin-top: 30rem;

 div{
  display: flex;
  justify-content: space-between;
  
  h3 { 
    font-family: 'Baloo2';
  }
 }

 button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: orange;
  margin-top:1rem;

 }

 a{
  text-decoration: none;
  color: white;
 }

 @media (max-width: 500px)
{
  width: 75%;
  button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: orange;
    max-width: 100%;
 }
   }

   
   @media only screen 
    and (device-width: 428px) 
    and (device-height: 926px) 
    and (-webkit-device-pixel-ratio: 3) { 
      width: 60%;
  button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: orange;
    max-width: 100%;

 }
}




`