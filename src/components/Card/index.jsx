import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Clue from '../Clue/index'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content : space-around;
  align-items : center;
  padding: 25px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
`

const StyledP = styled.p `

`

// récup les indices via un fetch et les passer en props 
// gérer les points avec un state et un onclick 
// gérer le résultat avec un onSubmit 

function Card() {
  return (
    <CardWrapper>
      <p>Points : 3/3</p>
      <Clue clueName="Frequentation"></Clue>
      <Clue clueName="Lignes"></Clue>
      <Clue clueName="Ville/Arrondissement"></Clue>
      <form>
        <label for="answer"> Réponse : </label>
        <input name="answer"></input>
        <input type="submit"></input>
      </form>
    </CardWrapper>
  )
}

export default Card
