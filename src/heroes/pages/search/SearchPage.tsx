import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroGrid, HeroStats } from '@/heroes/components'
import { SearchControls } from './ui/SearchControls'
import { CustomBreadcrumbs } from '@/components/custom'
import { useHeroesSearch } from '@/heroes/hooks'
import { useSearchParams } from 'react-router'

export const SearchPage = () => {

  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || '';
  const {data: heroesSearch} = useHeroesSearch(name);

  return (
    <>
      {/* Header */}
      <CustomJumbotron 
        title="Búsqueda de Héroes" 
        subtitle="Descubre, explora y gestiona tus superhéroes y villanos favoritos" />

      <CustomBreadcrumbs currentPage="Búsqueda de Héroes" 
        // breadcrumbs={[
        //   { label: 'Home', to: '/' },
        //   { label: 'Super Héroes', to: '/heroes' },
        //   { label: 'Búsqueda', to: '/heroes/search' },
        // ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />

      {/* Results */}
      <HeroGrid heroes={heroesSearch || []}/>

    </>
  )
}
