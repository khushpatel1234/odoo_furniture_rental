import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.module.css"
import React from 'react'
import { border, Box } from "@chakra-ui/react";
import { BiBorderRadius } from "react-icons/bi";
const ImageSlider = () => {
    const images = [{
        id: 1,
        src: "https://images.pexels.com/photos/1543447/pexels-photo-1543447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 1"
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 2 "
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 3"
    },
    {
        id: 4,
        src: "https://images.pexels.com/photos/115747/pexels-photo-115747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Image 4"
    }
    ];
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 3000,
   
  };
  return (
    <>

      <div className="imgslider" style={{width:"80%" ,height: "100%" ,align:"center" ,margin:"auto", }}>
        <Box  mt="2">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img style={{
                  borderRadius: "20px",
                  height: "450px", // Set desired height
                  objectFit: "cover",
                  width: "100%" // Ensure the image covers the width
                }} src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
        </Box>
      </div>
          </>
  )
}
export default ImageSlider;
