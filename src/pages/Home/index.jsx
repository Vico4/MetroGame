import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const StyledDiv = styled.div `
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 5vh;
  margin-left: 5vw;
  margin-right: 5vw;
  border-radius: 50px; 
  background-color: ${colors.backgroundLight}
`

const StyledLink = styled(Link)`
  padding: 15px;
  padding-left : 25px;
  padding-right : 25px;
  margin: 15px;
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

const StyledFooter = styled.p `
    font-size: 0.8rem;
`

function Home() {
  return (
    <StyledDiv>
      <StyleH>Connaissez-vous bien le métro parisien ?</StyleH>
      <StyledP> Essayez de deviner la station en utilisant le moins d'indices possibles </StyledP>
      <StyledLink to="/survey/1" $isFullLink>
        Jouer
      </StyledLink>
      <StyledFooter> Je m'appelle Vic et j'apprends à coder, voilà mon <a href="https://tourmaline-wormhole-b64.notion.site/Victoire-Stahl-59406772ff9547d1b1e8b35214f3745a">portfolio</a> </StyledFooter>
      <StyledFooter> Ce jeu utilise un jeu de données <a href='https://data.ratp.fr/explore/dataset/trafic-annuel-entrant-par-station-du-reseau-ferre-2021/information/'> open data RATP </a></StyledFooter>
    </StyledDiv>
  )
}

export default Home
