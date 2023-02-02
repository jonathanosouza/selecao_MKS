import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display:flex;
  position:fixed;
  justify-content: space-between;
  top:0;
  left:0;
  width:100%;
  background:white;
  text-align:center;
  padding: 20px 0;
  background: ${(props) => props.theme['blue-100']};

  div{
    display: flex;
    gap: 0.35rem;
    padding-left: 4.51%;;
    strong{ 
      color: ${(props) => props.theme['white']};
      font-weight: 600;
      font-family: 'Montserrat';
      font-size: 40px
    }
    span{
      margin-top: 1rem;
      color: ${(props) => props.theme['white']};
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      mix-blend-mode: normal;
      font-size: 20px;
      line-height: 19px;
    }
  }

  img{
    margin-left: 8rem;
  }
  
`


export const LocationContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
margin-right: 5rem;


a{
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 6px;
  background: ${(props) => props.theme['white']};
  border-radius: 5px;
  color: ${(props) => props.theme['black-10']};
  font-size: 18px;
  font-weight: 700;
  font-family: 'Montserrat';
  strong{ 
      color: ${(props) => props.theme['black-10']};
      font-weight: 800;
      font-size: 18px;
      font-style:normal ;
    }
}

nav {
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white']};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-top: -25px;
  margin-left: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.600rem;
}

/* a::before{
  content:'';
  height: 15px;
  width: 15px;
  background: red;
  position: absolute;
  border-radius: 50%;
  margin-left: 15px;
  margin-top: -10px;
} */


span{
  font-family:  'Roboto', sans-serif;
  font-weight: 400;
}




`

export const Location = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 4px;
width: 9rem;
height: 2rem;
border-radius: 5px;;
background: ${(props) => props.theme["gray-20"]};
color: ${(props) => props.theme['purple']};

a {
}

`