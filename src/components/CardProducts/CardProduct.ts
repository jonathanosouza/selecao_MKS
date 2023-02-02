import styled from 'styled-components'

export const ItemContainer = styled.div`
display: flex;
flex-direction: column; 
justify-items: center;
align-items: center;
margin-top: 1rem;
justify-content: center;
`

export const ListItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-items: center;
width: 13.55rem;
height: 17.85rem;
background: ${(props) => props.theme['white']};
border-radius: 8px;
padding: 1rem;
margin:1rem;


h1 {
  font-size: 1rem;
  flex-wrap: wrap;
  padding: 10px;
  font-style: normal;
  font-family: 'Montserrat';
  margin-left: 1px;
  line-height: 19px;
  max-width: 500px
}

> p{
  margin-left: 10px;
  line-height: 1rem;
  font-size: 10px;
  color: ${(props) => props.theme['gray-400']};
}

img{
  width: 111px;
  height:138px
}

`

export const TagContainer = styled.div`
font-size:10px;
margin-right: 2px;
display: flex;
justify-content: center;
align-items: center;
background: ${(props) => props.theme['gray-600']};
color: ${(props) => props.theme['white']};
font-size: 15px;
font-weight: 700;
border-radius: 9px;
padding: 12px;
width: 86px;
height:26px;
`

export const CountPrice = styled.div`
display: flex;
flex-direction: column;
width: 217px;

p{
  font-size: 14px;
  font-family: 'Montserrat';
}

> button{
background: ${(props) => props.theme['blue-100']};
border: 0;
color: ${(props) => props.theme['white']};
border-radius: 0px 0px 10px 10px ;
}
`

export const PriceContainer = styled.strong`
font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 32.1px;

color: ${(props) => props.theme['black-10']};
`


export const InfoProduct = styled.strong`
display: flex;
align-items: center;
justify-items: flex-end;
justify-content: space-between;
width: 100%;

h1 {
  flex-wrap: wrap;
  font-style: normal;
  font-size: 1.30rem;
  font-weight: 400;
  margin-top: -15px;
  line-height: 19px;
  font-family: 'Montserrat';
}
`



