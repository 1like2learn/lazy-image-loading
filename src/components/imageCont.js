import React, { useState } from "react";

export default function ImageCont() {
    // Where we store the state of the images
    const [ imageLoaded, setImageLoaded ] = useState(false);

    // When the fullsize image loads, setImageLoaded sets imageLoaded to true. 
    // The ternary operators flip the display properties.
    return (
        <>
            <img 
                src = "https://forge-homework.s3.amazonaws.com/thumb.jpg" 
                alt = "Istanbul street corner. Photographer: Sanaan Mazhar"
                style = {{
                    display: imageLoaded? "none": "block",
                }}
            />
            <img 
                src = "https://forge-homework.s3.amazonaws.com/fullsize.jpg" 
                alt = "Istanbul street corner. Photographer: Sanaan Mazhar"
                style = {{
                    display: imageLoaded? "block": "none",
                }}
                onLoad = { () => setImageLoaded(true)}
            />
        </>
    )
}