import { Spinner, Text, VStack } from "@chakra-ui/react"

function Spin(){
  return (
    <VStack mt = {5}>
      <Spinner/>
      <Text textStyle="3xl">Loading...</Text>
    </VStack>
  )
}

export default Spin
