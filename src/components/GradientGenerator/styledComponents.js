import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const DirectionDescription = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ededed;
  font-weight: 500;
  line-height: 1.5;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
`

export const ColorsPickersDescription = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ededed;
  font-weight: 500;
  line-height: 1.5;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
`

export const CustomColorAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`

export const CustomInput = styled.input`
  background-color: transparent;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  background-color: #00c9b7;
  border-radius: 6px;
  min-width: 25px;
  padding: 12px 24px 12px 24px;
  margin-top: 16px;
  margin-bottom: 16px;
  border: none;
  outline: none;
  cursor: pointer;
`
