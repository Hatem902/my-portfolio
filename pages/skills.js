import { Badge, Center, Container } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

import { skills } from '../components/skills-data'

import SkillSection from '../components/skill-section'

const Skills = () => (
  <Layout title="Skills">
    <Container>
      <div>
        {skills.map(skill => (
          <SkillSection
            delay={skill.delay}
            name={skill.name}
            data={skill.data}
            key={skill.name}
          />
        ))}
      </div>

      <Center mb={3} mt={16}>
        <Badge fontSize="sm" colorScheme="red">
          Proficient
        </Badge>
        <Badge fontSize="sm" mx={6} colorScheme="blue">
          Decent
        </Badge>
        <Badge fontSize="sm" colorScheme="teal">
          Familiar
        </Badge>
      </Center>
    </Container>
  </Layout>
)

export default Skills
export { getServerSideProps } from '../components/chakra'
