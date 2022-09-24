import { Button, Collapse, Text } from '@chakra-ui/react'

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useState } from 'react'
const ShowMore = ({ children }) => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <div>
      <Collapse startingHeight={48} in={show}>
        <Text /* fontSize={14} */ /* noOfLines={show ? 30 : 2} */>
          {children}
        </Text>
      </Collapse>
      <Button
        colorScheme="teal"
        variant="outline"
        size="xxs"
        fontSize="md"
        onClick={handleToggle}
        pr={2}
        pl={0.5}
        pb={0.5}
      >
        {show ? (
          <>
            <ChevronUpIcon />
            <Text fontSize="xs">Show less</Text>
          </>
        ) : (
          <>
            <ChevronDownIcon mt={0.5} />
            <Text fontSize="xs">Show more</Text>
          </>
        )}
      </Button>
    </div>
  )
}

export default ShowMore
