import { Button, Flex, Img, Tooltip } from '@chakra-ui/react'

const Skill = ({ name, level, badge }) => (
  <Tooltip
    label={`${
      level >= 7.5 ? 'Proficient' : level >= 6.5 ? 'Decent' : 'Familiar'
    }`}
    color={`${level >= 7.5 ? 'red' : level >= 6.5 ? 'blue' : 'teal'}`}
  >
    <Flex>
      <Button
        size={['sm', 'md', 'md', 'md']}
        cursor="default"
        rounded="full"
        variant="outline"
        colorScheme={`${level >= 7.5 ? 'red' : level >= 6.5 ? 'blue' : 'teal'}`}
      >
        {name}&nbsp;&nbsp;|&nbsp;&nbsp;{level} / 10
        {badge && (
          <p>
            <Tooltip
              label={`Passed LinkedIn Skill Assessment - Top ${badge}%`}
              color={`${level >= 7.5 ? 'red' : level >= 6.5 ? 'blue' : 'teal'}`}
            >
              <Img src="/images/links/linkedin-badge.png" w="7" h="7" ml="3" />
            </Tooltip>
          </p>
        )}
      </Button>
    </Flex>
  </Tooltip>
)

export default Skill
