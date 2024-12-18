import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Button, Center, Collapse, Divider, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Description = ({ shownContent, hiddenContent }) => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <Text fontSize={14} mt={2} mb={3}>
      {shownContent.map(contentItem => (
        <Text mt={2} key={contentItem}>
          {contentItem}
        </Text>
      ))}
      {hiddenContent ? (
        <>
          <Collapse startingHeight={0} in={show}>
            {hiddenContent.map(contentItem => (
              <Text mt={2} key={contentItem}>
                {contentItem}
              </Text>
            ))}
          </Collapse>
          <>
            <Divider mb={3.5} mt={3} />
            <Center>
              <Button
                colorScheme="teal"
                variant="outline"
                size="xxs"
                fontSize="md"
                onClick={handleToggle}
                pr={2}
                pl={0.5}
                pb={0.5}
                mb={2.5}
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
            </Center>
          </>
        </>
      ) : (
        <Divider mb={3.5} mt={3} />
      )}
    </Text>
  )
}

export default Description
