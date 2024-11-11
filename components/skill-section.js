import { Collapse, Flex, Heading } from '@chakra-ui/react'

import Section from '../components/section'

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import Skill from '../components/skill'

const SkillSection = ({ delay, name, data }) => {
  const [show, setShow] = useState(name == 'Key Skills' ? true : false)
  const handleToggle = () => setShow(!show)
  return (
    <Section delay={delay}>
      <Heading
        mt={0}
        as="h3"
        variant="section-title"
        fontSize={20}
        mb={5}
        onClick={handleToggle}
        cursor="pointer"
      >
        {show ? (
          <ChevronUpIcon mr={2.5} mt={2.5} />
        ) : (
          <ChevronDownIcon mt={2} mr={2.5} />
        )}
        {name}
      </Heading>
      <Collapse startingHeight={0} in={show}>
        <Flex
          pl={4}
          pb={5}
          wrap="wrap"
          columnGap={4}
          rowGap={2}
          justify={['center', 'start', 'start', 'start']}
        >
          {data.map(({ name, level, badge }) => (
            <>
              <Skill name={name} level={level} key={name} badge={badge} />
            </>
          ))}
        </Flex>
      </Collapse>
    </Section>
  )
}

export default SkillSection
