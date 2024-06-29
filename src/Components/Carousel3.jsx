import {  Box ,Button,Icon} from "@chakra-ui/react"
import {BsArrowRightCircle,BsArrowLeftCircle} from "react-icons/bs";
import styled from"./Carousel3.module.css"
import { Card, CardBody, CardFooter,Image,Avatar,Stack,Heading,Text,Divider } from '@chakra-ui/react'
import Quotes from "../Photos/Icons/Quotes.png"
let data=[
    {
        "image":"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Manoj Rathod",
        "details":`FurniFlex was incredibly useful. I never imagined that setting up a new home could be just a few clicks away. The customer support team was always ready to assist me. Whenever I need something for my home, FurniFlex is my go-to. :).`,
        "id":"4q"
      },
    {
        "image":"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Karan Sharma",
        "details":`
I had never considered renting furniture until I discovered FurniFlex's budget-friendly options. I was thrilled to try it out, and the experience exceeded my expectations. From the service to the product quality, everything was exceptional. Now, I don't have to transport the same furniture every time I move, and I can easily refresh the look of my home whenever I wish.`,
        "id":"5q"
      },
    {
        "image":"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
        "name":"Raj Agarwal",
        "details":`I was suddenly asked to move to Chennai from Bengaluru in couple of
        days. Everything was garbled for me and huge tension of getting
        apartment, buying furnitures, seling while going back to Bangalore.
        Thanks to FurniFlex for excellent budgeted plans. With few mouse
        clicks and nominal security deposit u are done . No tension for
        delivery, FurniFlex is a furniture wish wizard. Also takes care of
        relocation made my life easy. Happy to be a customer for FurniFlex. It
        made my house a happy home!`,
        "id":"6q"
      },
    
]

export const FurnitureSlider2=()=>{
  const btnpressprev=()=>{
    let boxel=document.querySelector(`.${styled.product_container}`);
    boxel.scrollLeft-=540
  }
  const btnpressnext=()=>{
    let boxel=document.querySelector(`.${styled.product_container}`);
    boxel.scrollLeft+=540
  }
    return(
      <Box className={styled.carousel} py="60px" ml="5%" >
      <Box>
        <Text width={"230px"} textAlign={"left"} color="black" fontSize={"lg"} ml="10%">
          <b>Over 1 Lakh</b> Happy subscribers
        </Text>
        <hr className={styled.line} />
        <br />
        <Text width={"230px"} textAlign={"left"} color="grey" ml="10%">
          Here's what they have to say about FurniFlex
        </Text>
        <Box className={styled.Button_container} mt="20px">
          <Button className={styled.buttons} onClick={btnpressnext}>
            <Icon as={BsArrowRightCircle} />
          </Button>
          <Button className={styled.buttons} onClick={btnpressprev}>
            <Icon as={BsArrowLeftCircle} />
          </Button>
        </Box>
      </Box>
      <Box className={styled.product_container}>
        {data.map(el => (
          <Cards
            image={el.image}
            key={Date.now() + el.id}
            name={el.name}
            details={el.details}
          />
        ))}
      </Box>
    </Box>
    
    )
}

const Cards=({image,
  name,
  details,
  })=>{

return <Card minWidth={"500px"} bg="#f5f7fa" rounded="3xl" className={styled.card}>
  <CardBody >
    <Stack mt='6' spacing='3'>
      <Heading size='xs'>{}</Heading>
      <Box display="flex" gap={"10px"}>
      <Avatar name={name} src={image} size="lg" />
      <Text textAlign={"left"} mt="18px">{name}</Text>
      <Image position={"absolute"}  top={0} right={20}  w={"100px"} src={Quotes}></Image>
      </Box>
      <Box >
      <Text marginTop={"30px"} color="black" lineHeight={"20px"} fontSize={"xs"} textAlign={"left"}>{details}</Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
}