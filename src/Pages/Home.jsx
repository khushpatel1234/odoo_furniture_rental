import { 
  Grid,
  Box,
  Text
  ,Image, GridItem,
 } from "@chakra-ui/react"
import ImageSlider from "../Components/Caraousel"
import Bed from "../Photos/Icons/Bed.png"
import { NavLink } from "react-router-dom"
import SimpleThreeColumns from "../Components/HomepageFeatures"
import { FurnitureSlider } from "../Components/Carousel2"
import {FurnitureSlider2} from "../Components/Carousel3"
const Products=[
  {
    href:"/furniture",
    src:Bed,
    text:"Furnitures"
  }
  
]
const Boxes = () => {
  return (
    <Grid templateColumns="1fr 1fr" alignItems="center" gap="20px" width="80%" m="auto" p="50px">
      <GridItem>
        <Text fontSize="2xl" fontWeight="bold" color="gray.700" textAlign="left">
        Revamp Your Home with Our Stylish Furniture! Explore Now! ➡️
        </Text>
      </GridItem>
      <GridItem>
        {Products.map(el => (
          <NavLink to={el.href} key={el.href}>
            <Box
              width={{ base: "300px", md: "500px", xl: "550px" }} // Adjust width as needed
              height="200px"
              border="1px solid #ebf0f4"
              transition="ease-in-out"
              transitionDuration="400ms"
              rounded="md"
              _hover={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image width="100px" height="100px" m="auto" src={el.src} />
              <Text textDecoration="none" fontSize="lg" mt="10px">{el.text}</Text>
            </Box>
          </NavLink>
        ))}
      </GridItem>
    </Grid>
  );
}
export const Home=()=>{
    return (
        <div> 
            <ImageSlider></ImageSlider>
            <Boxes></Boxes>
            <FurnitureSlider></FurnitureSlider>
            <SimpleThreeColumns ></SimpleThreeColumns>
            <FurnitureSlider2></FurnitureSlider2>
        </div>
    )
}
