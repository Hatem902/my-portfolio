import { Flex, Heading } from '@chakra-ui/react'

import Section from '../components/section'

import Skill from '../components/skill'

const SkillSection = ({ delay, name, data }) => {
  return (
    <Section delay={delay}>
      <Heading mt={0} as="h3" variant="section-title" fontSize={20} mb={5}>
        {name}
      </Heading>
      <Flex
        pl={4}
        pb={5}
        wrap="wrap"
        columnGap={4}
        rowGap={2}
        justify={['center', 'start', 'start', 'start']}
      >
        {data.map(({ name, level }) => (
          <>
            <Skill name={name} level={level} key={name} />
          </>
        ))}
      </Flex>
    </Section>
  )
}

export default SkillSection
