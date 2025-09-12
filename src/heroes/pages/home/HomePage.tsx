import { useSearchParams } from "react-router"
import { Heart } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomBreadcrumbs, CustomPagination } from "@/components/custom"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroGrid, HeroStats } from "@/heroes/components"
import { getHeroesByPageAction } from "@/heroes/actions/getHeroes-byPage.actions"
import { useMemo } from "react"

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




  const { data: heroesResponse } = useQuery({
    queryKey: ['heroesByPage', {
      'page': page, 
      'limit': limit
    }],
    queryFn: () => getHeroesByPageAction(Number(page), Number(limit)),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })

  // useEffect(() => {
  //   getHeroesByPageAction().then()
  // }, [])

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
              })}
            >
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger 
              value="favorites"
              onClick={() => setSearchParams( (prev) => { 
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
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger 
                value="villains"
                onClick={() => setSearchParams( (prev) => { 
                  prev.set("tab", "villains"); 
                  return prev
              })}
            >
              Villains (2)
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
