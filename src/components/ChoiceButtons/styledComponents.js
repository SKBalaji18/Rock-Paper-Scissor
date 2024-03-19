import styled from 'styled-components'

export const ChoiceListItem = styled.li`
  list-style-type: none;
  width: 40%;
  margin: 20px 15px;
  @media screen and (max-width: 560px) {
    width: 35%;
  }
`

export const ChoiceListButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
`

export const ButtonImg = styled.img`
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
