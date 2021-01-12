export default function getSwitchers(items, param) {
    try {
        switch (param) {
            case 'books':
                return {
                    items: items.books,
                    genres: items.genres_books
                };
            case 'movies':
                return {
                    items: items.movies,
                    genres: items.genres_movies
                };
            case 'music':
                return {
                    items: items.music,
                    genres: items.genres_music
                };
            default:
                break;
        }
    } catch (error) {
        console.log(error);
    }
}
