import React from 'react'
import styled from 'styled-components'

const ImgStyles = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 25px;
`

export default ({ src, alt }) => <ImgStyles src={src} alt={alt} />
