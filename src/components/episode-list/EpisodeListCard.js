import React from 'react'

export default function EpisodeListCard({ episode }) {
    return (
        <div className="ibmovies__episode-list__card">
            <div className="card-info">
                <span className="card-info__name">{episode.name}</span>
                <div className="card-info__meta">
                    <span>Season {episode.season}</span>
                    <span>Rating: {episode.rating}</span>
                </div>
            </div>
        </div>
    )
}
