import React, { Component } from 'react'
import T from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Div from '../components/atom/Div'
import Jokes from '../components/organisms/JokesBlock'
import Category from '../components/molecules/CategoryWithLoading'
import { categoriesSaga } from '../store/actions/categoriesAction'
import { jokesSaga, jokesRandomSaga } from '../store/actions/jokesAction'

class Home extends Component {
  static propTypes = {
    category: T.shape({
      isFetch: T.bool.isRequired,
      error: T.string.isRequired,
      dataCategory: T.array,
    }).isRequired,
    joke: T.shape({
      isFetch: T.bool.isRequired,
      error: T.string.isRequired,
      joke: T.string,
    }).isRequired,
    categoriesSaga: T.func.isRequired,
    jokesSaga: T.func.isRequired,
    jokesRandomSaga: T.func.isRequired,
  }
  static defaultProps = {
    category: { isFetch: false, error: '', dataCategory: [] },
    joke: { isFetch: false, error: '', joke: '' },
  }
  state = {
    selectedCategory: null,
  }

  componentDidMount() {
    this.props.categoriesSaga()
  }

  getJoke = () => {
    const { selectedCategory } = this.state
    const { jokesSaga, jokesRandomSaga } = this.props

    selectedCategory ? jokesSaga(selectedCategory) : jokesRandomSaga()
  }
  clickCategory = e => {
    const value = e.target.getAttribute('value')

    this.setState(() => ({ selectedCategory: value }))
    this.props.jokesSaga(value)
  }
  reset = () => {
    this.setState(() => ({ selectedCategory: null }))
  }

  render() {
    const { categories, jokes } = this.props
    const { selectedCategory } = this.state
    const { isFetch, dataCategory } = categories

    return (
      <Div maxWidth="600px" margin="25px auto">
        <Category
          isLoading={isFetch}
          userCategory={selectedCategory}
          event={this.clickCategory}
          categories={dataCategory}
        />
        <Jokes
          joke={jokes}
          reset={this.reset}
          getJoke={this.getJoke}
          selectedCategory={selectedCategory}
        />
      </Div>
    )
  }
}
const mapState = ({ jokes, categories }) => ({
  jokes,
  categories,
})
export default withRouter(
  connect(
    mapState,
    { categoriesSaga, jokesSaga, jokesRandomSaga }
  )(Home)
)
