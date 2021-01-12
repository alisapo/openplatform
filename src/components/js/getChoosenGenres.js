export default function getChoosenGenres(
  items,
  type,
  genre) {
  try {
    switch (type) {
      case 'books':
        return items.books.filter(item => item.genre === genre);
      case 'movies':
        return items.movies.filter(item => item.genre === genre);
      case 'music':
        return items.music.filter(item => item.genre === genre);
      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
}
