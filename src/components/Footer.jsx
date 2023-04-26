import React from "react";

function Footer(){

    return (
        <div className="py-5 text-center">
            <p className="text-sm mt-2 opacity-50">
               &copy; {new Date().getFullYear()} Simon Jakobsson. All rights reserved
            </p>

        </div>
    )
}

export default Footer;