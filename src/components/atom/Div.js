import styled from 'styled-components'

export const JokeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${props => props.theme.sizes.joke};
  min-width: ${props => props.theme.sizes.joke};
`
export default styled.div`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  max-width: ${props => props.maxWidth || 'max-content'};
  min-width: ${props => props.minWidth};
  flex-direction: ${props => props.flexDirection};
  color: ${props => props.theme.colors.darkOrange};
  border-radius: ${props => props.borderRadius || '15px'};
  justify-content: ${props => props.between && 'space-between'};
  display: ${props => props.display || 'flex'};
  border: ${props => props.border && '1px solid black'};
`
