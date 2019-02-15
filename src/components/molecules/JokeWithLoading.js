import React from 'react'
import T from 'prop-types'
import Text from '../atom/Text'
import { JokeBlock } from '../atom/Div'
import WithLoading from './hoc/WithLoading'

const _propTypes = {
  joke: T.string,
}
const Joke = ({ joke }) => (
  <JokeBlock>
    <Text children={joke && `"${joke}"`} />
  </JokeBlock>
)
Joke.propTypes = _propTypes
export default WithLoading(Joke)
