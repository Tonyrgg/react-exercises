import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((response) => response.json()) 


export function useGitHubUser(username) {
    const {data, mutate} = useSWR(`https://api.github.com/users/${username}`, fetcher)

    function fetchThis() {
        mutate()
    }

    return {
        utente: data,
        feccialo: fetchThis
        }
}

