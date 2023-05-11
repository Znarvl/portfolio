import React from "react";

import SouthIcon from '@mui/icons-material/South';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Intro(){
    const scrollToBottom = () => {
        var element = document.getElementById("portfolio");
        element.scrollIntoView({behavior: "smooth"});

      };

    return (
        <div className="min-h-screen flex items-center justify-center flex-col text-center pt-20 pb-6 bg-gradient-to-r 
        from-blue-900
        via via-black        
        to-blue-900">
          
                 <img class="rounded-full" src="/profile.png" alt="user image" />
            <h1 className="text-4xl md:text-7xl text-white mb-1 md:mb-3 font-bold">Hello!</h1>
            <p className="text-md text-white max-w-xl mb-6 font-bold">My name is Simon and I'm pursuing a degree in Software Engineering and Computer Science at Linköpning University. 
            I'm enthusiastic about music, web development and artificial intelligence/Machine learning.
             In my free time, I'm tinkering with web development and small machine learning project, or playing music.   </p>
             <div className="text-white flex space-x-4 mt-20">
            <LinkedInIcon onClick={event =>  window.location.href='https://www.linkedin.com/in/simon-jakobsson-871252144/'} fontSize="large"/>
            <GitHubIcon onClick={event =>  window.location.href='https://github.com/Znarvl'} fontSize="large"/>
            </div>
        <div class="animate-bounce w-6 h-6 text-white absolute bottom-7 scroll-smooth">
            <div onClick={scrollToBottom}>
            <SouthIcon  fontSize="large"/>
            </div>
        </div>
        </div>
    )
}

export default Intro;