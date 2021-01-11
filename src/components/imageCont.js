import React, { useState } from "react";
/**
 * Displays two versions of an image and displays the appropriate version depending
 * on the state of the higher quality one.
 */
export default function ImageCont({imageData}) {
    const { thumbnail, fullSize, alt} = imageData
    // Where we store the loaded state of the images
    const [ imageLoaded, setImageLoaded ] = useState(false);

    // When the full size image loads, setImageLoaded sets imageLoaded to true. 
    // The ternary operators in the className properties change the class names
    // of the images, causing the thumbnail to disappear and the full version to appear.
    return (
        <>
            <img 
                className = {`genericImage image${imageLoaded? "Inv": "Vis"}`}
                src = {thumbnail}
                alt = {alt}
            />
            <img 
                className = {`genericImage image${imageLoaded? "Vis": "Inv"}`}
                src = {fullSize} 
                alt = {alt}
                onLoad = { () => setImageLoaded(true)}
            />
        </>
    )
}