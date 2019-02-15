import styled from 'styled-components'

const Li = styled.li`
  font-size: 22px;
  list-style-type: none;
  margin-bottom: 5px;
  margin-top: ${props => props.marginTop};
`

export const LiActive = styled(Li)`
  color: black;
  list-style-type: none;
  text-decoration: underline;
`
export default Li
