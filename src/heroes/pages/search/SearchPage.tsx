import { CustomJumbotron } from '@/components/custom/CustomJumbotron'
import { HeroStats } from '@/heroes/components'
import { SearchControls } from './ui/SearchControls'
import { CustomBreadcrumbs } from '@/components/custom'

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron 
        title="Búsqueda de Héroes" 
        subtitle="Descubre, explora y gestiona tus superhéroes y villanos favoritos" />

      <CustomBreadcrumbs currentPage="Búsqueda de Héroes" 
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Super Héroes', to: '/heroes' },
          { label: 'Búsqueda', to: '/heroes/search' },
        ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

       {/* Controls */}
        <SearchControls />

    </>
  )
}
