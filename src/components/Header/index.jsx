import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import darklogo from '../../assets/dark-logo.png'

const StyledNav = styled.nav `
  display : flex;
  justify-content : flex-end;
  `

const StyledContainer = styled.div `
  display : flex;
  justify-content : space-between;
  align-items : center;
  padding-right: 5vw;
  padding-left: 5vw;
  `

const StyledLink = styled(Link)`
  padding: 15px;
  margin: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

function Header() {
  return (
    <StyledContainer>
      <img src={darklogo}  alt="shiny logo" />
    <StyledNav> 
      <StyledLink to="/"> A propos </StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Jouer
      </StyledLink>
    </StyledNav>
    </StyledContainer>
  )
}

export default Header
