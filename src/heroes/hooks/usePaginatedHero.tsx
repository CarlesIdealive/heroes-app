import { useQuery } from "@tanstack/react-query"
import { getHeroesByPageAction } from "../actions/getHeroes-byPage.action"



export const usePaginatedHero = (page:number, limit:number, category:string) => {
  return useQuery({
    queryKey: ['heroesByPage', {
      'page': page, 
      'limit': limit,
      'category': category
    }],
    queryFn: () => getHeroesByPageAction(Number(page), Number(limit), category),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

}
