import { heroApi } from "../api/hero.api"
import type { HeroesResponse } from "../interfaces";



export const getHeroesByPageAction = async( ):Promise<HeroesResponse> => {

    const {data} = await heroApi.get<HeroesResponse>('/');

    return {
        ...data,
        heroes: data.heroes.map(hero => ({
            ...hero,
            image: `${heroApi.defaults.baseURL}${hero.image}`            
        }))
    }

}