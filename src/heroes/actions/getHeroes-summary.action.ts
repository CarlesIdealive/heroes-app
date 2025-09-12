import { heroApi } from "../api/hero.api";
import type { HeroesSummary } from "../interfaces";


export const getHeroesSummaryAction = async () 
    : Promise<HeroesSummary> => {

    const {data} = await heroApi.get<HeroesSummary>('/summary');
    return data;
}