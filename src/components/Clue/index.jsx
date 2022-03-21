import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useState } from 'react'


const StyledClue = styled.div `
  background-color : ${colors.primary};
  border-radius: 30px;
  padding: 15px;
  margin: 10px; 
  color: white;
`
// remettre le state en hidden quand on envoie une réponse
// afficher le next seulement quand on envoie une réponse

function Clue({clueName, clueRevealed}) {
const [clueState, revealClue] = useState(false);

  return (
    <StyledClue onClick={revealClue}>
      {clueState ? clueRevealed : clueName}
    </StyledClue>
  )
}


export default Clue
