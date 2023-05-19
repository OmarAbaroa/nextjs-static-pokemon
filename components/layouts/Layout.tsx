import { FC } from "react"

import Head from "next/head"

import { Navbar } from "../ui";

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ( { children, title } ) => {

  const titlePage = `Pokémon App`

  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Omar Abaroa" />
        <meta name="description" content={`Información sobre el pokémon ${ title }`} />
        <meta name="keywords" content={ `${ title }, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '5px 20px'
      }}>
        { children }
      </main>
    </>
  )
}
