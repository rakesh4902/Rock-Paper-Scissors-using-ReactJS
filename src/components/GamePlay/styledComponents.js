import styled from 'styled-components'

export const GamePlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 20px;
`

export const GameRules = styled.div`
  align-items: flex-end;
  margin-top: auto;
  @media screen and (min-width: 768px) {
    margin-bottom: 35px;
  }
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  border-style: none;
  font-size: 15px;
  width: 80px;
  height: 50px;
  padding: 10px;
  margin-left: 150vh;
  @media screen and (max-width: 768px) {
    margin-left: 30vh;
    margin-top: 0px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  font-size: 18px;
  border-style: none;
  outline: none;
  align-self: flex-end;
  margin-bottom: 15px;
  cursor: pointer;
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vw;
  width: 30vw;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 15px 24px 24px 24px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`

export const PopUpImage = styled.img`
  width: 100%;
  height: 100%;
  margin-top: auto;
`
