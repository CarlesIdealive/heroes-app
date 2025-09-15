import { useQuery } from "@tanstack/react-query"
import { getHeroesBySearchAction } from "../actions"



export const useHeroesSearch = (
    name: string, 
    strength?: number,
    team?: string,
    category?: string,
    universe?: string,
    status?: string,
    ) => {
    const {data = []} = useQuery({
        queryKey: ['heroesSearch', {
            'name': name,
            'strength': strength,
            'team': team,
            'category': category,
            'universe': universe,
            'status': status,
        }],
        queryFn: () => getHeroesBySearchAction({name, strength, team, category, universe, status}),
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
    return {data};
}