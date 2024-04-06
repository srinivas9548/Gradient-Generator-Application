import styled from 'styled-components'

export const DirectionItem = styled.li`
  list-style-type: none;
`
export const DirectionButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isActive ? '#334155' : ' #1e293b')};
  font-weight: 500;
  height: 40px;
  width: 120px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  border-radius: 5px;
  margin: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`
