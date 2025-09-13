import { useQuery } from "@tanstack/react-query"
import { getHeroeAction } from "../actions/getHeroe.action"


export const useHero = (idSlug: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['hero', idSlug],
    queryFn: () => getHeroeAction(idSlug),
    retry: false,
    // staleTime: 1000 * 60 * 5, // 5 minutes
  })

  return { data, isError, isLoading }
}   