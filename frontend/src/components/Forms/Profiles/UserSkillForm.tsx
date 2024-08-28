import React from 'react'
import { Form as BootstrapForm } from 'react-bootstrap'
import Input from '../Input'
import Button from '../../common/Button'

interface UserSkillFormProps {
  skills: string[]
  onChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void
  onAddSkill: () => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const UserSkillForm: React.FC<UserSkillFormProps> = ({
  skills,
  onChange,
  onAddSkill,
  onSubmit
}) => {
  return (
    <BootstrapForm onSubmit={onSubmit}>
      {skills.map((skill, index) => (
        <Input
          key={index}
          id={`skill-${index}`}
          name={`skill-${index}`}
          type="text"
          label={`Skill ${index + 1}`}
          value={skill}
          onChange={(e) => onChange(index, e)}
          placeholder="Enter a skill"
          required // Make each input field required
        />
      ))}
      <Button variant="secondary" onClick={onAddSkill} type="button">
        Add Another Skill
      </Button>
      <Button variant="primary" type="submit">
        Save Skills
      </Button>
    </BootstrapForm>
  )
}

export default UserSkillForm