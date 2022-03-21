import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'


const StyledClue = styled.div `
  background-color : ${colors.primary};
  border-radius: 30px;
  padding: 15px;
  margin: 10px; 
  color: white;
`
// gérer le hidden / revealed avec un state 

function Clue({clueName, clueRevealed}) {
  return (
    <StyledClue>
      {clueName}
    </StyledClue>
  )
}


export default Clue
