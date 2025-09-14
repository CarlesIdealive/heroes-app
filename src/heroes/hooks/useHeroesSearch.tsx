import { useQuery } from "@tanstack/react-query"
import { getHeroesBySearchAction } from "../actions"



export const useHeroesSearch = (name: string) => {
    const {data = []} = useQuery({
        queryKey: ['heroesSearch', {
            'name': name
        }],
        queryFn: () => getHeroesBySearchAction({name}),
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
    return {data};
}