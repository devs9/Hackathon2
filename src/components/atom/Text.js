import styled from 'styled-components'

export default styled.span`
  color: black;
  padding: ${props => props.padding || '0 50px'};
  font-size: ${props => props.fontSize || '22px'};
  line-height: 2rem;
`
