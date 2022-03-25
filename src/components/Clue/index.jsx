import styled from 'styled-components'
import colors from '../../utils/style/colors'
// import { useState } from 'react'


const StyledClue = styled.div `
  background-color : ${colors.primary};
  border-radius: 30px;
  padding: 15px;
  margin: 10px; 
  color: white;
`
// remettre le state en hidden quand on envoie une réponse
// afficher le next seulement quand on envoie une réponse
// faire en sorte de pas avoir deux fois la même carte 

function Clue({id, clueName, clueRevealed, clueClick, clueState}) {
 
return (
    <StyledClue onClick={()=> {
      clueClick(clueName, id)}
      }>
      {clueState[id] === "show" ? clueRevealed : clueName}
    </StyledClue>
  )
}

export default Clue
