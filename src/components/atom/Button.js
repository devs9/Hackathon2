import styled from 'styled-components'

const getColor = ({ btnStyle, theme }) => {
  switch (btnStyle) {
    case 'success':
      return theme.colors.darkGreen
    case 'warning':
      return theme.colors.lightRed
    case 'danger':
      return theme.colors.darkRed
    case 'primary':
      return theme.colors.purple
    default:
      return theme.colors.darkOrange
  }
}
export default styled.button`
  outline: none;
  cursor: pointer;
  margin: ${props => props.margin || '0 auto'};
  font-size: 16px;
  padding: 8px 10px;
  border-radius: 5px;
  width: max-content;
  background-color: transparent;
  color: ${props => getColor(props)};
  transition: background-color 0.2s, color 0.2s;
  border: 1px solid ${props => getColor(props)};
  &:hover {
    color: white;
    background-color: ${props => getColor(props)};
  }
`
