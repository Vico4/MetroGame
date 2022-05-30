import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/index'
import styled from 'styled-components'
import colors from '../../utils/style/colors'


const StyledDiv = styled.div `
  display: flex;
  align-items : center;
  flex-direction : column;
  `
const StyledNext = styled(Link) `
  margin: 5px;
  color: ${colors.primary}
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const nextQuestionNumber = questionNumberInt + 1

  return (
    <StyledDiv>
    {questionNumberInt > 10 ? null :
      <h1> Devinez la station, attention chaque indice révélé vous coute des points ! </h1>}
      <Card number={questionNumberInt}></Card>
      {questionNumberInt > 10 ? null : (
        <StyledNext to={`/survey/${nextQuestionNumber}`}>Suivant</StyledNext>
      )}
    </StyledDiv>
  )
}

export default Survey
