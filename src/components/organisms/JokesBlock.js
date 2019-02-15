import React from 'react'
import T from 'prop-types'
import Div from '../atom/Div'
import Text from '../atom/Text'
import Button from '../atom/Button'
import LoadingBtn from '../molecules/hoc/LoadingBtn'
import Joke from '../molecules/JokeWithLoading'
import ChuckLogo from '../molecules/ChuckLogo'

const _propTypes = {
  selectedCategory: T.string,
  reset: T.func.isRequired,
  getJoke: T.func.isRequired,
  joke: T.shape({
    isFetch: T.bool.isRequired,
    error: T.string.isRequired,
    joke: T.string,
  }).isRequired,
}
const JokeBlock = ({ joke, selectedCategory, getJoke, reset }) => (
  <Div between minWidth="600px" flexDirection="column">
    <Div margin="0 auto">
      <Text
        fontSize="16px"
        padding="0 10px"
        children={
          selectedCategory
            ? `Selected category: ${selectedCategory}`
            : `Selected category: Not selected`
        }
      />
      <Button
        btnStyle="primary"
        onClick={reset}
        children="Reset selected category"
      />
    </Div>
    <ChuckLogo />
    <Joke joke={joke.joke} isLoading={joke.isFetch} />
    <ChuckLogo />
    <LoadingBtn isLoading={joke.isFetch} margin="10px auto" onClick={getJoke} children="Random joke" />
  </Div>
)
JokeBlock.propTypes = _propTypes
export default JokeBlock
