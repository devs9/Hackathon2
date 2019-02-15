import React, { useState } from 'react'
import T from 'prop-types'
import Div from '../atom/Div'
import Li, { LiActive } from '../atom/Li'
import WithLoading from './hoc/WithLoading'

const _propTypes = {
  userCategory: T.string,
  event: T.func.isRequired,
  category: T.shape({
    isFetch: T.bool.isRequired,
    error: T.string.isRequired,
    dataCategory: T.array,
  }),
}
const Categories = ({ categories, event, userCategory }) => {
  const [view, setView] = useState(categories && categories.slice(0, 10))
  const MoreCategories = () => {
    return (
      view && (
        <Li
          marginTop="25px"
          children={
            view.length === 10 ? (
              <span>more &#x21E8;</span>
            ) : (
              <span>&#x21E6; prev</span>
            )
          }
          onClick={
            view.length === 10
              ? () => setView(categories.slice(10))
              : () => setView(categories.slice(0, 10))
          }
        />
      )
    )
  }
  const ViewCategory = () => {
    return (
      categories &&
      view.map((item, i) =>
        userCategory !== item ? (
          <Li value={item} onClick={event} key={i} children={item} />
        ) : (
          <LiActive value={item} onClick={event} key={i} children={item} />
        )
      )
    )
  }

  return (
    <Div border display="block" padding="25px 55px" margin="0 50px 0 0">
      <ViewCategory />
      <MoreCategories />
    </Div>
  )
}
Categories.propTypes = _propTypes
export default WithLoading(Categories)
