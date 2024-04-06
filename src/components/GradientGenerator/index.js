import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionDescription,
  GradientDirectionList,
  ColorsPickersDescription,
  ColorPickerContainer,
  CustomColorAndInputContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
  }

  onGenerate = () => {
    const {fromColorInput, toColorInput, activeDirection} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  changeDirection = direction => {
    this.setState({activeDirection: direction})
  }

  render() {
    const {
      gradientValue,
      activeDirection,
      fromColorInput,
      toColorInput,
    } = this.state
    return (
      <GradientGeneratorContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionDescription>Choose Direction</DirectionDescription>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                gradientButtonDetails={eachItem}
                changeDirection={this.changeDirection}
                isActive={eachItem.value === activeDirection}
              />
            ))}
          </GradientDirectionList>
          <ColorsPickersDescription>Pick the Colors</ColorsPickersDescription>
          <ColorPickerContainer>
            <CustomColorAndInputContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeFromColor}
                value={fromColorInput}
              />
            </CustomColorAndInputContainer>
            <CustomColorAndInputContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                type="color"
                onChange={this.onChangeToColor}
                value={toColorInput}
              />
            </CustomColorAndInputContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
