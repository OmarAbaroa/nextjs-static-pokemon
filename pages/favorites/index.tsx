import { useEffect, useState } from "react";

import { NextPage } from "next"

import { Layout } from "@/components/layouts"
import { FavoritePokemons } from "@/components/pokemon";
import { NoFavorites } from '@/components/ui';

import { localFavorites } from "@/utils";

const FavoritesPage:NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.getFavoritesPokemon() );
  }, []);
  

  return (
    <Layout title="My favorites">
      {
        favoritePokemons.length === 0 
        ? ( <NoFavorites /> )
        : ( <FavoritePokemons pokemons={ favoritePokemons } /> )
      }
    </Layout>
  )
}

export default FavoritesPage