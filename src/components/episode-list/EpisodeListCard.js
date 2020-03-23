import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function EpisodeListCard({ episode }) {
    const [epData, setEpData] = useState([])

    async function fetchData() {
        const params = {
            t: 'stranger things',
            apikey: process.env.REACT_APP_API_KEY,
            Season: episode.season,
            Episode: episode.episode,
        }
        const { data } = await axios.get('//www.omdbapi.com/', {
            params,
        })
        setEpData(data)
        localStorage.setItem(
            `s${episode.season}ep${episode.episode}`,
            JSON.stringify(data)
        )
    }

    const getData = JSON.parse(
        localStorage.getItem(`s${episode.season}ep${episode.episode}`)
    )

    useEffect(() => {
        getData ? setEpData(getData) : fetchData()
    }, [episode.season, episode.episode])

    return (
        <div className="ibmovies__episode-list__card">
            <div className="card-img">
                <img src={epData.Poster} alt="poster"></img>
            </div>
            <div className="card-info">
                <span className="card-info__name">{episode.name}</span>
                <div className="card-info__meta">
                    <span>Season {episode.season}</span>
                    <span>Episode {episode.episode}</span>
                    <span>Rating {episode.rating}</span>
                    <span>Runtime {epData.Runtime}</span>
                </div>
                <span className="card-info__plot">{epData.Plot}</span>
            </div>
        </div>
    )
}
