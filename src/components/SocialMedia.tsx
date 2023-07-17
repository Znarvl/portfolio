import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function SocialMedia(){

    return (
            <div>
                <LinkedInIcon onClick={event =>  window.location.href='https://www.linkedin.com/in/simon-jakobsson-871252144/'} fontSize="large"/>
                <GitHubIcon onClick={event =>  window.location.href='https://github.com/Znarvl'} fontSize="large"/>
            </div>
    )
}

export default SocialMedia;