import { Card, Image, HStack, Badge } from "@chakra-ui/react"

function News(props) {
  return (
    <a href={props.url}>
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={props.image}
        alt={props.alt}
      />
      <Card.Body gap="2">
        
        <Card.Title>{props.heading}</Card.Title>
        <Card.Description>
        {props.content}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
      <HStack mt="4">
          <a href={props.sourceURL}><Badge>{props.sourceName}</Badge></a>
          <Badge>{props.time}</Badge>
        </HStack>
      </Card.Footer>
    </Card.Root>
    </a>
  )
}

export default News
