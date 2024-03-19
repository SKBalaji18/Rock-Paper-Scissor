import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1.5px solid #ffffff;
  border-radius: 8px;
  width: 100%;
`
export const ScoreLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const GameHead = styled.h1`
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  margin: 2px 5px;
  @media screen and (min-width: 760px) {
    font-size: 18px;
  }
`
export const ScoreBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 20%;
  min-width: 60px;
  margin-right: 10px;
`
export const ScoreBarHead = styled.p`
  font-family: 'Bree Serif';
  font-size: 14px;
  font-weight: 500;
  color: #223a5f;
  margin: 2px 5px;
  @media screen and (min-width: 760px) {
    font-size: 16px;
  }
`

export const ScoreResult = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #223a5f;
  margin: 2px 5px;
  @media screen and (min-width: 760px) {
    font-size: 24px;
  }
`
