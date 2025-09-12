import { useState } from "react"
import { Heart } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomBreadcrumbs, CustomPagination } from "@/components/custom"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroGrid, HeroStats } from "@/heroes/components"
import { getHeroesByPageAction } from "@/heroes/actions/getHeroes-byPage.actions"

export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>("all")

  const { data } = useQuery({
    queryKey: ['heroesByPage'],
    queryFn: () => getHeroesByPageAction(),
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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => setActiveTab("all")}
              value="all"
            >
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab("favorites")} value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab("heroes")} value="heroes">
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger onClick={() => setActiveTab("villains")} value="villains"> 
              Villains (2)
              </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            {/* Character Grid */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites" className="mt-4">
            {/* Character Grid */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes" className="mt-4">
            {/* Character Grid */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains" className="mt-4">
            {/* Character Grid */}
            <HeroGrid />
          </TabsContent>
        </Tabs>
  

        {/* Pagination */}
        <CustomPagination totalPages={15} />

      </>
    </>
  )
}
