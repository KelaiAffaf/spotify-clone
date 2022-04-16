import {useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';
 

function Section () {
    const e ='jason'
    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search/jason")
    
        
        console.log(data)   
    }
return <div>
<button onClick={searchArtists} >click</button>

</div>
}
export default Section