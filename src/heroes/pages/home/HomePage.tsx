import { useSearchParams } from "react-router"
import { Heart } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomBreadcrumbs, CustomPagination } from "@/components/custom"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroGrid, HeroStats } from "@/heroes/components"
import { useMemo } from "react"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "all";
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "6"; 
  // Validate and set the selected tab
  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);


  const { data: heroesResponse } = usePaginatedHero(Number(page), Number(limit));
  const { data: heroesSummary } = useHeroSummary();


  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Superhero Universe" subtitle="Discover, explore, and manage your favorite superheroes and villains" />

        {/* Breadcrumbs */}
        <CustomBreadcrumbs currentPage="Super Héroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() => setSearchParams( (prev) => { 
                prev.set("tab", "all"); 
                return prev
              })}>
              All Characters ({heroesSummary?.totalHeroes ?? 0})
            </TabsTrigger>
            <TabsTrigger 
              value="favorites"
              onClick={() => setSearchParams((prev) => {
                prev.set("tab", "favorites");
                return prev
              })}
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger 
              value="heroes"
              onClick={() => setSearchParams( (prev) => { 
                prev.set("tab", "heroes"); 
                return prev
              })}
            >
              Heroes ({heroesSummary?.heroCount ?? 0})
            </TabsTrigger>
            <TabsTrigger 
                value="villains"
                onClick={() => setSearchParams( (prev) => { 
                  prev.set("tab", "villains"); 
                  return prev
              })}
            >
              Villains ({heroesSummary?.villainCount ?? 0})
              </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            {/* Character Grid */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites" className="mt-4">
            {/* Character Grid */}
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value="heroes" className="mt-4">
            {/* Character Grid */}
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value="villains" className="mt-4">
            {/* Character Grid */}
            <HeroGrid heroes={[]} />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />

      </>
    </>
  )
}
