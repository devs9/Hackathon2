import React from 'react'
import Div from '../atom/Div'
import Logo from '../atom/Logo'
import { logoSrc } from '../../constants'

export default () => (
  <Div between maxWidth="600px">
    <Logo src={logoSrc} alt="chuck" />
    <Logo src={logoSrc} alt="chuck" />
    <Logo src={logoSrc} alt="chuck" />
    <Logo src={logoSrc} alt="chuck" />
    <Logo src={logoSrc} alt="chuck" />
  </Div>
)
