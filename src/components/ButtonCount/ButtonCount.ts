import styled from 'styled-components'



// export const AddToCart = styled.div`
// display: flex;
// width: 38px;
// height: 38px;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 8px;
// width: 72px;
// height: 38px;
// border-radius: 12px;
// background: ${(props) => props.theme['gray-30']};
// button{
//   border: 0;
//   background: none;

// }

// button:hover{
//   border: 0;
//   background: none;
//   color: ${(props) => props.theme['purple-dark']};
//   cursor: pointer;

// }
// `

export const GoToCart = styled.button`
  display: flex; 
  justify-content: center;
  align-items: center;
  margin-top: -25px;
  width: 100%;
  height: 2rem;
  gap: 0.87rem;




  span{
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  };


  &:hover{
  background: ${(props) => props.theme['purple-dark']};
  cursor: pointer;
  transition: 0.2s;
  }
`
