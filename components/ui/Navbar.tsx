import Image from "next/image"
import NextLink from "next/link"

import { Link, Spacer, Text, useTheme } from "@nextui-org/react"

export const Navbar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray100.value
    }}>

      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
        alt="Icono de la APP"
        width={70}
        height={70}
        />
      
      <NextLink legacyBehavior href="/" passHref>
        <Link>
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okémon</Text>
        </Link>
      </NextLink>

      <Spacer css={ { flex: 1 } } />

      <NextLink legacyBehavior href="/favorites" passHref>
        <Link>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
