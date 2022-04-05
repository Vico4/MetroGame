import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledDiv = styled.div `
  display : flex;
  flex-direction : column;
  flex-wrap : wrap;
  align-items : center;
  margin-top : 5vh;
  margin-left: 5vw;
  margin-right: 5vw;
  padding: 5vw;
  border-radius: 50px; 
  background-color: ${colors.backgroundLight}
`

const StyledLink = styled(Link)`
  padding: 15px;
  padding-left : 25px;
  padding-right : 25px;
  color: #8186a0;
  text-decoration: none;
  font-size: 34px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const StyleH = styled.h1 `
  font-weight: 700;
  font-size: 3rem;
  color: #2F2E41;
`

const StyledP = styled.p `
    font-size: 1.5rem;
`

const StyleFooter = styled.p `
    font-size: 0.5rem;
`

function Home() {
  return (
    <StyledDiv>
      <StyleH>Connaissez-vous bien le métro parisien ?</StyleH>
      <StyledP> Essayez de deviner la station en utilisant le moins d'indices possibles </StyledP>
      <StyledLink to="/survey/1" $isFullLink>
        Jouer
      </StyledLink>
    </StyledDiv>
  )
}

export default Home
