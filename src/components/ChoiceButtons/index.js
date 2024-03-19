import {ChoiceListItem, ChoiceListButton, ButtonImg} from './styledComponents'

const ChoiceButtons = props => {
  const {eachChoice, onUserClick} = props
  const {id, imageUrl} = eachChoice

  const userChoice = () => onUserClick(id)
  const testid = `${id.toLowerCase()}Button`

  return (
    <ChoiceListItem>
      <ChoiceListButton data-testid={testid} type="button" onClick={userChoice}>
        <ButtonImg src={imageUrl} alt={id} />
      </ChoiceListButton>
    </ChoiceListItem>
  )
}

export default ChoiceButtons
