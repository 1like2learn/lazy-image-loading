import React, { useState } from "react";
/**
 * Displays two versions of an image and displays the appropriate version depending
 * on the state of the higher quality one.
 */
export default function ImageCont() {
    // Where we store the loaded state of the images
    const [ imageLoaded, setImageLoaded ] = useState(false);

    // When the full size image loads, setImageLoaded sets imageLoaded to true. 
    // The ternary operators in the className properties change the class names
    // of the images, causing the thumbnail to disappear and the full version to appear.
    return (
        <>
            <img 
                className = {`genericImage image${imageLoaded? "Inv": "Vis"}`}
                src = "https://forge-homework.s3.amazonaws.com/thumb.jpg" 
                alt = "Istanbul street corner. Photographer: Sanaan Mazhar"
            />
            <img 
                className = {`genericImage image${imageLoaded? "Vis": "Inv"}`}
                src = "https://forge-homework.s3.amazonaws.com/fullsize.jpg" 
                alt = "Istanbul street corner. Photographer: Sanaan Mazhar"
                onLoad = { () => setImageLoaded(true)}
            />
        </>
    )
}