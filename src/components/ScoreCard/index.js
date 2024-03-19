import {
  ScoreContainer,
  ScoreLeftContainer,
  GameHead,
  ScoreBarContainer,
  ScoreBarHead,
  ScoreResult,
} from './styledComponents'

const ScoreCard = props => {
  const {score} = props

  return (
    <ScoreContainer>
      <ScoreLeftContainer>
        <GameHead>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </GameHead>
      </ScoreLeftContainer>
      <ScoreBarContainer>
        <ScoreBarHead>Score</ScoreBarHead>
        <ScoreResult>{score}</ScoreResult>
      </ScoreBarContainer>
    </ScoreContainer>
  )
}

export default ScoreCard
