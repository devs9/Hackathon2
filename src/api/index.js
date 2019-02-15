export default {
  category: async () => {
    try {
      return fetch('https://api.chucknorris.io/jokes/categories')
    } catch (e) {
      console.log('ERROR GET category', e)
    }
  },
  randomJoke: async () => {
    try {
      return fetch('https://api.chucknorris.io/jokes/random')
    } catch (e) {
      console.log('ERROR GET category', e)
    }
  },
  joke: async category => {
    try {
      return fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      )
    } catch (e) {
      console.log('ERROR GET category', e)
    }
  },
}
