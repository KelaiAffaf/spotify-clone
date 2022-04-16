  
import {useEffect, useState} from "react";

import axios from 'axios';

function SpotifyApi() {
    const CLIENT_ID = "21531e73bb1e42f1826e8be976dae945"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const [artist, setArtist] = useState()
    const [categories, setCategories] = useState([])
    // const getToken = () => {
    //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
    //     let token = urlParams.get('access_token');
    // }

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
        console.log(token);
        getArtists()
        getCategories()
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
        console.log(data)

        setArtists(data.artists.items)
    }
//    get aLL artist from spotify api

const getArtists = async () => {
    const {data} = await axios.get("https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(data.categories)   
    setArtist(data.categories)
}

const getCategories = async () => {
    const {data} = await axios.get("https://api.spotify.com/v1/browse/categories", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(data.categories.items)
    setCategories(data.categories.items)
}

    

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    return (
        <div className="SpotifyApi">
            <header className="SpotifyApi-header">
                <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}

                {token ?
                    <form onSubmit={searchArtists}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>

                    : <h2>Please login</h2>
                }

                {renderArtists()}

            </header>

            <div>
               {
               categories.map((category, index) => (
                    <div key={index}>
                        <a href={category.href}>{category.name}</a>
                        <img src={category.icons[0].url} alt="" />
                    </div>
               ))
}
        </div>
        </div>
    );
}

export default SpotifyApi;
