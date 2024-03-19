import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  AppContainer,
  ResponsiveContainer,
  PopupContainer,
  PopupContent,
  RulesImg,
  GameViewContainer,
  PlayerResultContainer,
  ResulHead,
  ResultImg,
  PlayAgaiBtn,
  GameResultContainer,
  GameResult,
  GameOptionContainer,
} from './styledComponents'

import ScoreCard from '../ScoreCard'
import ChoiceButtons from '../ChoiceButtons'

import 'reactjs-popup/dist/index.css'
import './index.css'

class RockPaperScissor extends Component {
  state = {
    gameResultView: false,
    userChoice: '',
    oppenentChoice: '',
    result: '',
    score: 0,
  }

  getResult = (userChoice, oppenentChoice) => {
    let res = ''
    if (userChoice.id === 'ROCK') {
      switch (oppenentChoice.id) {
        case 'SCISSORS':
          res = 'YOU WON'
          break
        case 'PAPER':
          res = 'YOU LOSE'
          break
        default:
          res = 'IT IS DRAW'
          break
      }
    } else if (userChoice.id === 'SCISSORS') {
      switch (oppenentChoice.id) {
        case 'PAPER':
          res = 'YOU WON'
          break
        case 'ROCK':
          res = 'YOU LOSE'
          break
        default:
          res = 'IT IS DRAW'
          break
      }
    } else if (userChoice.id === 'PAPER') {
      switch (oppenentChoice.id) {
        case 'ROCK':
          res = 'YOU WON'
          break
        case 'SCISSORS':
          res = 'YOU LOSE'
          break
        default:
          res = 'IT IS DRAW'
          break
      }
    }

    return res
  }

  onUserClick = id => {
    const {choicesList} = this.props

    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const oppenentChoiceObj = choicesList[randomIndex]

    const userChoiceObjList = choicesList.filter(eachItem => eachItem.id === id)
    const userChoiceObj = userChoiceObjList[0]

    const {score} = this.state
    let newScore = score

    const updatedresult = this.getResult(userChoiceObj, oppenentChoiceObj)

    if (updatedresult === 'YOU WON') {
      newScore = score + 1
    } else if (updatedresult === 'YOU LOSE') {
      newScore = score - 1
    } else if (updatedresult === 'IT IS DRAW') {
      newScore = score
    }

    this.setState({
      result: updatedresult,
      score: newScore,
      gameResultView: true,
      userChoice: userChoiceObj,
      oppenentChoice: oppenentChoiceObj,
    })
  }

  onPlayAgain = () => {
    this.setState({
      gameResultView: false,
    })
  }

  render() {
    const {
      gameResultView,
      userChoice,
      oppenentChoice,
      result,
      score,
    } = this.state

    const {choicesList} = this.props

    return (
      <AppContainer>
        <ResponsiveContainer>
          <ScoreCard score={score} />
          <GameViewContainer>
            {gameResultView ? (
              <>
                <GameResultContainer>
                  <PlayerResultContainer>
                    <ResulHead>YOU</ResulHead>
                    <ResultImg src={userChoice.imageUrl} alt="your choice" />
                  </PlayerResultContainer>
                  <PlayerResultContainer>
                    <ResulHead>OPPONENT</ResulHead>
                    <ResultImg
                      src={oppenentChoice.imageUrl}
                      alt="opponent choice"
                    />
                  </PlayerResultContainer>
                </GameResultContainer>
                <GameResult>{result}</GameResult>
                <PlayAgaiBtn type="button" onClick={this.onPlayAgain}>
                  Play Again
                </PlayAgaiBtn>
              </>
            ) : (
              <GameOptionContainer>
                {choicesList.map(eachItem => (
                  <ChoiceButtons
                    key={eachItem.id}
                    eachChoice={eachItem}
                    onUserClick={this.onUserClick}
                  />
                ))}
              </GameOptionContainer>
            )}
          </GameViewContainer>
          <PopupContainer>
            <Popup
              modal
              trigger={
                <button type="button" className="trigger-button">
                  Rules
                </button>
              }
            >
              {close => (
                <PopupContent>
                  <button
                    onClick={() => close()}
                    type="button"
                    className="trigger-button-close"
                  >
                    <RiCloseLine size={20} />
                  </button>
                  <RulesImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupContent>
              )}
            </Popup>
          </PopupContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissor
