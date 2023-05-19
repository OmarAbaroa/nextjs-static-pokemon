import { FC } from "react"
import { Card, Grid, Row, Text } from "@nextui-org/react"

import { SmallPokemon } from "@/interfaces"
import { useRouter } from "next/router"

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ( { pokemon: { id, img, name } }) => {

  const router = useRouter()

  const onPokemonClick =  () => {
    router.push(`/name/${ name }`)
  }

  return (
    <Grid xs = { 6 } sm = { 3 } md = { 2 } xl = { 1 }>

      <Card 
        isPressable 
        isHoverable
        onPress={onPokemonClick}>

        <Card.Body css = { { p:1 } } >
          <Card.Image src = { img } width="100%" height='140px' />
        </Card.Body>

        <Card.Footer>
          <Row justify="space-between">
            <Text>#{ id }</Text>
            <Text transform="capitalize">{ name }</Text>
          </Row>
        </Card.Footer>

        </Card>

    </Grid>
  )
}
