import React from "react"
import MainSection from "../MainSection/MainSection"
import MainImgWrap from "../MainImgWrap/MainImgWrap"
import MainPanel from "../MainPanel/MainPanel"
import img from "../../images/NinMain.png"
import BookingForm from "../BookingForm/BookingForm"

const HomeMainSection = () => (
  <MainSection backgroundImg={img}>
    <MainImgWrap>
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
