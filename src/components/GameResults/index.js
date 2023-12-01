import {
  GameContainer,
  GameButton,
  GameImage,
  ResultButton,
  ResultContainer,
  ResultName,
  ResultText,
} from './styledComponents'

const GameResults = props => {
  const {isShow, choicesList, text, resArray, opponentChoice, playAgain} = props
  return (
    <GameContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => opponentChoice(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => opponentChoice(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => opponentChoice(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}
      {!isShow && (
        <>
          <ResultContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={resArray[0].imageUrl} alt="your choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={resArray[1].imageUrl} alt="opponent choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultText>{text}</ResultText>
            <ResultButton type="button" onClick={playAgain}>
              PLAY AGAIN
            </ResultButton>
          </ResultContainer>
        </>
      )}
    </GameContainer>
  )
}

export default GameResults
