import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Tooltip,
  VStack
} from '@chakra-ui/react'

const Skill = ({ name, level }) => (
  <Tooltip
    label={`${
      level >= 7.5 ? 'Proficient' : level >= 6.5 ? 'Decent' : 'Familiar'
    }`}
    color={`${level >= 7.5 ? 'red' : level >= 6.5 ? 'blue' : 'teal'}`}
  >
    <Flex>
      <Button
        size="sm"
        cursor="default"
        rounded="full"
        variant="outline"
        colorScheme={`${level >= 7.5 ? 'red' : level >= 6.5 ? 'blue' : 'teal'}`}
      >
        {name}&nbsp;&nbsp;|&nbsp;&nbsp;{level} / 10
      </Button>
    </Flex>
  </Tooltip>
)

export default Skill
