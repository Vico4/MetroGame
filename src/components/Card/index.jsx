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

/* const StyledP = styled.p `
` */
// récup les indices via un fetch et les passer en props 
// gérer les points avec un state et un onclick 
// gérer le résultat avec un onSubmit 



function Card({number}) {

 const [points, setPoints] = useState(5)
 const [loaded, setLoaded] = useState(false)
 const [station, getStation] = useState({})
 const [stationClue, setStationClue] = useState()


 useEffect(()=>{
  const dataNum = Math.floor(Math.random() * 100)
  getStation(data[dataNum])
  const stationArr = data[dataNum].station.split('')
  stationArr.forEach((char, i, arr) => {
    if(i !== 0 && i !== arr.length-1 && char !== " " && char !== "-" && char !== "'") {
      arr[i] = "*"
    }
  })
  setStationClue(stationArr.join(''))
  setLoaded(true)
  }, [number]
  )

console.log(station)

  return (
    <>
    {loaded ? 
    <CardWrapper>
      <p>Points : {points}/5</p>
      <Clue clueName="Trafic annuel" clueRevealed={station.trafic} setPoints={setPoints} points={points}/>
      <Clue 
      clueName="Ligne(s)" 
      clueRevealed={[station.correspondance_1, station.correspondance_2, station.correspondance_3, station.correspondance_4, station.correspondance_5].join(" ")} 
      setPoints={setPoints} 
      points={points}/>
      <Clue clueName="Ville/Arrondissement" 
      clueRevealed={station.ville === "Paris" ? station.arrondissement_pour_paris + "e" : station.ville}
      setPoints={setPoints} points={points} />
      <Clue clueName="Quelques lettres" clueRevealed={stationClue}
      setPoints={setPoints} points={points}/>
      <form>
        <label name="answer"> Réponse : </label>
        <input name="answer"></input>
        <input type="submit"></input>
      </form>
      <Clue 
      clueName="Voir la réponse" 
      clueRevealed={station.station} 
      setPoints={setPoints} 
      points={points}/>
    </CardWrapper> : "Chargement..."}
    </>
  )
}

export default Card
