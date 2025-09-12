import { Heart, Zap } from "lucide-react"
import { HeroStatCard } from "./HeroStatCard"
import { Badge } from "@/components/ui/badge"
import { useHeroSummary } from "../hooks/useHeroSummary";

export const HeroStats = () => {

  const { data: heroesSummary } = useHeroSummary();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

        <HeroStatCard 
            title="Total Characters" 
            icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        >
            <div className="text-2xl font-bold">{heroesSummary?.totalHeroes}</div>
            <div className="flex gap-1 mt-2">
                <Badge variant="secondary" className="text-xs">{heroesSummary?.heroCount} Heroes</Badge>
                <Badge variant="destructive" className="text-xs">{heroesSummary?.villainCount} Villains</Badge>
            </div>
        </HeroStatCard>

        <HeroStatCard
            title="Favorites" 
            icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        >   
            <div className="text-lg font-bold">3</div>
            <p className="text-xs text-muted-foreground">18% of total</p>
        </HeroStatCard>

        <HeroStatCard
            title="Strongest" 
            icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        >   
            <div className="text-lg font-bold">{heroesSummary?.strongestHero.alias}</div>
            <p className="text-xs text-muted-foreground">Strength: {heroesSummary?.strongestHero.strength}</p>
        </HeroStatCard>

        <HeroStatCard
            title="Smartest" 
            icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        >   
              <div className="text-lg font-bold">{heroesSummary?.smartestHero.alias}</div>
              <p className="text-xs text-muted-foreground">Intelligence: {heroesSummary?.smartestHero.intelligence}</p>
        </HeroStatCard>


        </div>

)
}
