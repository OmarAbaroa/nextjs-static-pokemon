import { FC } from 'react'

import { useRouter } from 'next/router'

import { Grid, Card } from '@nextui-org/react'


interface Props {
  pokemonId: number
}

export const FavoritePokemonCard:FC<Props> = ( {pokemonId} ) => {

  const router = useRouter()

  const onPokemonClick =  () => {
    router.push(`/pokemon/${ pokemonId }`)
  }
  
  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card 
        isHoverable 
        isPressable 
        onPress={onPokemonClick}
        css={{padding: 10}}>
        <Card.Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonId }.svg`}
          height={140}
          width={'100%'}
          />
      </Card>
    </Grid>
  )
}