export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroAdded = (hero) => {
    return {
        type: 'HERO_ADDED',
        payload: hero
    }
}

export const heroDeleted = (heroID) => {
    return {
        type: 'HERO_DELETED',
        payload: heroID
    }
}

export const filtersAdded = (filters) => {
    return {
        type: 'FILTERS_ADDED',
        payload: filters
    }
}