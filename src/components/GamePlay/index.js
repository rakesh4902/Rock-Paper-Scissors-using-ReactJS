import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  GamePlayContainer,
  GameRules,
  RulesButton,
  PopUpImage,
  PopUpView,
  CloseButton,
} from './styledComponents'

import GameScores from '../GameScores'
import GameResults from '../GameResults'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GamePlay extends Component {
  state = {
    isShow: true,
    score: 0,
    text: 'YOU WIN',
    resArray: [choicesList[0], choicesList[1]],
  }

  getResult = (youSelects, opponentSelects) => {
    if (youSelects.id === 'ROCK') {
      switch (opponentSelects.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (youSelects.id === 'PAPER') {
      switch (opponentSelects.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponentSelects.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  playAgain = () => this.setState({isShow: true})

  opponentChoice = id => {
    const opponentSelects =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const youSelects = choicesList.filter(eachThing => eachThing.id === id)
    const result = this.getResult(youSelects[0], opponentSelects)

    if (result === 'YOU WON') {
      this.setState(prevScore => ({score: prevScore.score + 1}))
    } else if (result === 'YOU LOSE') {
      this.setState(prevScore => ({score: prevScore.score - 1}))
    } else {
      this.setState(prevScore => ({score: prevScore.score}))
    }
    this.setState({
      isShow: false,
      resArray: [youSelects[0], opponentSelects],
      text: result,
    })
  }

  render() {
    const {score, isShow, resArray, text} = this.state
    return (
      <GamePlayContainer>
        <GameScores score={score} />
        <GameResults
          isShow={isShow}
          choicesList={choicesList}
          text={text}
          resArray={resArray}
          opponentChoice={this.opponentChoice}
          playAgain={this.playAgain}
        />
        <GameRules>
          <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
            {close => (
              <PopUpView>
                <CloseButton onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </GameRules>
      </GamePlayContainer>
    )
  }
}

export default GamePlay
