import React from "react";
import SouthIcon from '@mui/icons-material/South';

function Intro(){

    return (
        <div className="min-h-screen flex items-center justify-center flex-col text-center pt-20 pb-6 bg-gradient-to-r 
        from-purple-500
        via-orange-500
        to-blue-500
        background-animate">
            <h1 className="text-4xl md:text-7xl text-white mb-1 md:mb-3 font-bold">Hello!</h1>
            <p className="text-md text-white max-w-xl mb-6 font-bold">My name is Simon and I'm studying </p>
        <div class="animate-bounce w-6 h-6 text-white absolute bottom-7 ">
            <SouthIcon fontSize="large"/>
        </div>
        </div>
    )
}

export default Intro;