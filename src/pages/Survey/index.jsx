import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/index'
import styled from 'styled-components'

const StyledDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items : center;
  flex-direction : column;
  flex-wrap : wrap,
  `

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const nextQuestionNumber = questionNumberInt + 1

  return (
    <StyledDiv>
      <h1> Devinez la station, attention chaque indice révélé vous coute des points ! </h1>
      <h2>Question {questionNumber}</h2>
      <Card number={questionNumberInt}></Card>
      {questionNumberInt > 10 ? null : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </StyledDiv>
  )
}

export default Survey
