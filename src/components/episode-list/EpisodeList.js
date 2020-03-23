import React from 'react'
import EpisodeListCard from './EpisodeListCard.js'
import './episode-list.scss'

export default function EpisodeList({ episodeList }) {
    return (
        <section className="ibmovies__episode-list">
            <h2>Episode List</h2>

            {episodeList.map((episode, i) => (
                <EpisodeListCard key={i} episode={episode} />
            ))}
        </section>
    )
}
