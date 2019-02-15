import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <Link to="/" children="Go home" />
      <h3>Not found page!</h3>
    </div>
  )
}
export default NotFound
