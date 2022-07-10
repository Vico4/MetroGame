import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Clue from '../Clue/index'
import data from '../../datas/trafic.json'
import { useEffect } from 'react'
import { useState } from 'react'


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


const StyledInput = styled.input `
  height: 25px;
  font-size: 100%;
  border-radius: 50px;
  margin-top: 10px;
  margin-right : 5px;
  padding-left: 10px;

`


function Card({number}) {

 const [points, setPoints] = useState(10)
 const [station, getStation] = useState({})
 const [stationClue, setStationClue] = useState()
 const [clueState, reveal] = useState([])
 const [answer, setAnswer] = useState("")
 const [result, checkAnswer] = useState()
 const [totalPoints, calculatePoints] = useState(0)
 const [previousCards, setPrevious] = useState([])

 useEffect(()=> {

  if(number === 1) {
    calculatePoints(0)
  }

  let dataNum = Math.floor(Math.random() * 305)
  while(previousCards.includes(dataNum)) {
    dataNum = Math.floor(Math.random() * 305)
  }

  getStation(data[dataNum])

  const stationArr = data[dataNum].station.split('')
  stationArr.forEach((char, i, arr) => {
    if(i !== 0 && i !== arr.length-1 && char !== " " && char !== "-" && char !== "'") {
      arr[i] = "*"
    }
  })

  let previous_tmp = [...previousCards]
  previous_tmp.push(dataNum)
  setPrevious(previous_tmp)

  reveal(["","","","show",""])
  setPoints(10)
  setStationClue(stationArr.join(''))
  setAnswer('')
  checkAnswer('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]
  )

console.log(station)
console.log(data.length)

function clueClick(clueName, id) {
  const pointCost = [1, 2, 4]
  if(clueState[id] !== "show") {
    if (clueName === "Voir la réponse") {
      setPoints(0)
      const revealed = [...clueState]
      revealed[id] = "show"
      reveal(revealed);
    } 
    else if (points >= pointCost[id]) {
      setPoints(points - pointCost[id]);
      const revealed = [...clueState]
      revealed[id] = "show"
      reveal(revealed); 
    }
  }
}

function handleChange(e) {
  setAnswer(e.target.value)
}

function handleSubmit(e) {
  console.log("handling input" + answer)
  const ans = answer.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()
  if(ans.toUpperCase() === station.station) {
    checkAnswer("Bonne réponse !")
    calculatePoints(totalPoints + points)
    reveal(["show","show","show","show","show"])
  }
  else {
    checkAnswer("Mauvaise réponse !")
    setPoints(points-1)
  }
  e.preventDefault()
}

  return (
    <>
    {number < 11 ? 
    <CardWrapper>
      <p><b>Question {number}</b></p>
      <p>Points : {points}/10</p>
      <Clue 
        id = {3}
        clueName="Quelques lettres" 
        clueRevealed={stationClue}
        setPoints={setPoints} 
        clueClick = {clueClick}
        points= {points}
        clueState = {clueState}/>
      <Clue 
        id = {0}
        clueName="Trafic annuel (1 pts)" 
        clueRevealed={station.trafic} 
        clueClick = {clueClick}
        points= {points}
        clueState = {clueState}/>
      <Clue 
        id = {1}
        clueName="Ligne(s) (2 pts)" 
        clueRevealed={[station.correspondance_1, 
        station.correspondance_2, 
        station.correspondance_3, 
        station.correspondance_4, 
        station.correspondance_5].join(" ")} 
        clueClick = {clueClick}
        points= {points}
        clueState = {clueState}
        />
      <Clue 
        id = {2}
        clueName="Ville/Arrondissement (4 pts)" 
        clueRevealed={station.ville === "Paris" ? 
          station.arrondissement_pour_paris + "e" : 
          station.ville}
          clueClick = {clueClick}
          points= {points}
          clueState = {clueState}/>
      {clueState[4] || points === 0 ? null : 
      <form onSubmit={handleSubmit}>
        <StyledInput type="text" name="answer" value={answer} placeholder="Réponse" onChange={handleChange}/>
        <StyledInput type="submit"></StyledInput>
      </form> }
      <p>{result}</p>
      <Clue 
      id = {4}
      clueName="Voir la réponse" 
      clueRevealed={station.station} 
      clueClick = {clueClick}
      points= {points}
      clueState = {clueState}
      />
      <p>Total des points: {totalPoints}</p>
    </CardWrapper> : 
    <CardWrapper>
      <p>Jeu terminé ! Vous avez {totalPoints} points</p>
    </CardWrapper>}
    </>
  )
}

export default Card
