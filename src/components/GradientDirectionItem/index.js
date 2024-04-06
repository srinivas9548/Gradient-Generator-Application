import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientButtonDetails, changeDirection, isActive} = props
  const {value, displayText} = gradientButtonDetails

  const onClickButton = () => {
    changeDirection(value)
  }

  return (
    <DirectionItem>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={onClickButton}
      >
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
