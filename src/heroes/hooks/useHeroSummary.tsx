import { useQuery } from "@tanstack/react-query";
import { getHeroesSummaryAction } from "../actions/getHeroes-summary.action";



export const useHeroSummary = () => {

    return useQuery({
      queryKey: ["heroesSummary"],
      queryFn: getHeroesSummaryAction,
      staleTime: 1000 * 60 * 5, // 5 minutes
  });

};
