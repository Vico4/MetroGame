import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/index'

// est-ce que je fetch les 10 cartes d'un coup ou une par une ?

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const nextQuestionNumber = questionNumberInt + 1

  return (
    <div>
      <h1> Devinez la station, attention chaque indice révélé vous coute des points ! </h1>
      <h2>Question {questionNumber}</h2>
      <Card number={questionNumberInt}></Card>
      <p>Total des points : </p>
      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  )
}

export default Survey
