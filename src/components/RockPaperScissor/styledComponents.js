import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  padding: 30px;
  display: flex;
  justify-content: center;
  padding-top: 35px;
`

export const ResponsiveContainer = styled.div`
  width: 85%;
  max-width: 550px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 760px) {
    width: 70%;
    max-width: 900px;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const RulesImg = styled.img`
  width: 80%;
  align-self: center;
  margin: 20px 10px;
`
export const GameResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 100%;
  max-width:550px
  align-self: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media screen and (min-width: 760px) {
    width: 70%;
    max-width: 850px;
  }
`
export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60vh;
  margin-top: 20px;
`

export const PlayerResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 40%;
`

export const ResulHead = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
`
export const ResultImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 25px;
  @media screen and (min-width: 560px) and (max-width: 759px) {
    height: 120px;
    width: 120px;
  }
  @media screen and (min-width: 760px) {
    height: 150px;
    width: 150px;
  }
`
export const PlayAgaiBtn = styled.button`
  padding: 10px 20px;
  background-color: #ffffff;
  border-radius: 8px;
  text-align: center;
  margin: 20px 0px;
  border: none;
  cursor: pointer;
  font-family: 'Bree Serif';
  color: #223a5f;
  font-size: 18px;
`
export const GameResult = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ffffff;
  font-weight: 550;
  margin: 10px;
`
export const GameOptionContainer = styled.ul`
  padding: 0px;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%
  max-width: 540px;
  @media screen and (min-width: 760px) {
    width: 70%;
    max-width: 850px;
  }
`
