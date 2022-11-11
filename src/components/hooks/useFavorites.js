export default function useFavorites() {
  useEffect(() => {
    const favoritosToUse =
      JSON.parse(localStorage.getItem("FAVORITOS")) || copiaFavoritos;
  }, [estaFavoritos]);
}
