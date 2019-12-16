import React from "react"
import MainSection from "../MainSection/MainSection"
import MainImgWrap from "../MainImgWrap/MainImgWrap"
import MainPanel from "../MainPanel/MainPanel"
import img from "../../images/NinMain.png"
import BookingForm from "../BookingForm/BookingForm"
import Text from "../Text/Text"

const HomeMainSection = () => (
  <MainSection backgroundImg={img}>
    <MainImgWrap isRelative>
      <Text isPhone isWhite isAbsolute as="h1">
        Discover the Croatia's top kiteboarding location
      </Text>
      {/* <Text>Hello</Text> */}
      <img
        style={{ width: "100%", objectFit: "cover", height: "60vh" }}
        src={img}
        alt="Nin panorama"
      />
    </MainImgWrap>
    <MainPanel>
      <BookingForm />
    </MainPanel>
  </MainSection>
)

export default HomeMainSection
