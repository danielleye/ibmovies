import React, { useState } from 'react'
import EpisodeListCard from './EpisodeListCard.js'
import { Dropdown } from 'carbon-components-react'
import { orderBy } from 'lodash'

import './episode-list.scss'

export default function EpisodeList({ episodeList }) {
    const [sortType, setSortType] = useState('')
    const dropDownItems = [
        { id: 'rating-asc', text: 'Rating: Low To High' },
        { id: 'rating-desc', text: 'Rating: High To Low' },
        { id: 'episode-desc', text: 'Episode: Old To New' },
        { id: 'episode-asc', text: 'Episode: New To Old' },
    ]

    let sortedEpisodes
    switch (sortType) {
        case 'rating-desc':
            sortedEpisodes = orderBy(episodeList, ['rating'], ['desc'])
            break
        case 'rating-asc':
            sortedEpisodes = orderBy(episodeList, ['rating'], ['asc'])
            break
        case 'episode-desc':
            sortedEpisodes = orderBy(
                episodeList,
                ['season', 'episode'],
                ['asc', 'asc']
            )
            break
        case 'episode-asc':
            sortedEpisodes = orderBy(
                episodeList,
                ['season', 'episode'],
                ['desc', 'desc']
            )
            break
        default:
            sortedEpisodes = episodeList
            break
    }

    return (
        <section className="ibmovies__episode-list">
            <h2 id="episode-list">Episode List</h2>
            <Dropdown
                className="ibmovies__episode-list__sort-dropdown"
                ariaLabel="Dropdown"
                id="sort-dropdown"
                items={dropDownItems}
                itemToString={item => (item ? item.text : '')}
                label="Sort By"
                onChange={evt => {
                    setSortType(evt.selectedItem.id)
                }}
            />
            {sortedEpisodes.map((episode, i) => (
                <EpisodeListCard key={i} episode={episode} />
            ))}
        </section>
    )
}
