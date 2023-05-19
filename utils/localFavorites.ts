/* eslint-disable import/no-anonymous-default-export */
const toggleFavorite = ( id: number ) => {

  let favorites: number[] = getFavoritesPokemon()

  if( favorites.includes(id) ){
    favorites = favorites.filter( pokeId => pokeId !== id );
  }else{
    favorites.push( id );
  }

  localStorage.setItem('favorites', JSON.stringify(favorites) )
}

const existInFavorites = ( id: number ): boolean => {

  if(typeof window === 'undefined') return false;

  const favorites: number[] = getFavoritesPokemon()
  return favorites.includes(id);
}

const getFavoritesPokemon = (): number[] => {
  return JSON.parse( localStorage.getItem('favorites') || '[]' );
}

export default{
  toggleFavorite,
  existInFavorites,
  getFavoritesPokemon
}