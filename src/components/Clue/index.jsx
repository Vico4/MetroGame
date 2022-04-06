import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import { useState } from 'react'


const StyledClue = styled.div `
  background-color : ${colors.primary};
  border-radius: 30px;
  padding: 15px;
  margin: 10px; 
  color: white;
  ${(props) => props.$answer && `background-color : grey;
  padding : 5px`} 
`


function Clue({id, clueName, clueRevealed, clueClick, clueState}) {
 
return (
    <StyledClue onClick={()=> {
      clueClick(clueName, id)}
      }
      $answer = {id === 4 ? true : false}
      >
      {clueState[id] === "show" ? clueRevealed : clueName}
    </StyledClue>
  )
}

export default Clue
