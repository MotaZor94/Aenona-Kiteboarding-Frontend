import React from 'react'
import { Link } from 'gatsby'
import LinkWrapper from '../LinkWrapper/LinkWrapper'
import FlexWrapper from '../FlexWrapper/FlexWrapper'

import Image from '../Image/Image'
import WeatherImg from '../../static/Weather.png'
import AboutImg from '../../static/About.png'
import RentalsImg from '../../static/Rental.png'
import LocationImg from '../../static/Location.png'
import LogoHorizontal from '../../static/Logo_horiz_w.png'
// TODO: NEED TO MOVE THOSE WRAPPERS DIRECT INSIDE OF DESKTOPNAV CAUSE IT LOOKS MESSY

export default () => (
  <>
    <Link to="/">
      <Image src={LogoHorizontal} width="110px" />
    </Link>
    <LinkWrapper>
      <FlexWrapper>
        <Image src={WeatherImg} width="20px" />
        <Link to="/weather">Weather</Link>
      </FlexWrapper>
      <FlexWrapper>
        <Image src={RentalsImg} width="20px" />
        <Link>Rentals</Link>
      </FlexWrapper>
      <FlexWrapper>
        <Image src={LocationImg} width="20px" />
        <Link>Location</Link>
      </FlexWrapper>
      <FlexWrapper>
        <Image src={AboutImg} width="20px" />
        <Link>About Us</Link>
      </FlexWrapper>
    </LinkWrapper>
  </>
)
