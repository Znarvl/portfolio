import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const SocialMedia: React.FC = () => {
  return (
<div>
<LinkedInIcon
  onClick={() => {
    window.open('https://www.linkedin.com/in/simon-jakobsson-871252144/', '_blank')
  }}
  fontSize="large" />
      <GitHubIcon onClick={() => { window.open('https://github.com/Znarvl', '_blank') }} fontSize="large" />
</div>

  )
}

export default SocialMedia
