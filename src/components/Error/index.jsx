import styled from 'styled-components'


const StyledH = styled.h1 `
font-weight: 700;
font-size: 31px;
line-height: 36px;
text-align: center;
color: #2F2E41;
`

const StyledDiv = styled.div `
  display : flex;
  flex-direction : column;
  flex-wrap : wrap,
  justify-content : space-between;
  align-items : space-between;
  margin-top : 5vh;
  margin-left: 5vw;
  margin-right: 5vw;
  border-radius: 30px; 
`

function Error() {
  return (
    <StyledDiv>
      <StyledH>Oups... </StyledH>
      <StyledH>Cette page n'existe pas ! </StyledH>
    </StyledDiv>
  )
}

export default Error
