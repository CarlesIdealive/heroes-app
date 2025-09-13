import { createContext, useState, type PropsWithChildren, useEffect } from "react";
import type { Hero } from "../interfaces";


interface FavoriteHeroContext {
    //Propiedades-State
    favorites: Hero[];
    favoriteCount: number;

    //Metodos
    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);




const getFavoriteFromLocalStorage = (): Hero[] => {
    const favs = localStorage.getItem('favorite') || '[]';
    return JSON.parse(favs);
}


//Queremos crear un HOC (Higher Order Component) que nos permita proveer el contexto a los componentes que lo necesiten
//Para ello creamos el parametro children que sera de tipo React.ReactNode  / o utilizamos PropsWithChilderen
export const FavoriteHeroProvider = ( {children}: PropsWithChildren ) => {

    const [favorites, setFavorites] = useState<Hero[]>(getFavoriteFromLocalStorage());
    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.find(fav => fav.id === hero.id);
        if(heroExist){
            setFavorites(favorites.filter(fav => fav.id !== hero.id));
            return;
        }
        setFavorites([...favorites, hero]);
    }
    const isFavorite = (hero: Hero) => {
        return favorites.some(fav => fav.id === hero.id);
    }

    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favorites));
    }, [favorites]);

  return (
    <FavoriteHeroContext 
        value={{
            favorites: favorites,
            favoriteCount: favorites.length,
            isFavorite: isFavorite,
            toggleFavorite: toggleFavorite
        }}>
        {children}
    </FavoriteHeroContext>
  )
}
