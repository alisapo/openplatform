export function getSwitchers(param, data) {
    try {
        switch (param) {
            case 'books':
                this.setState({
                    items: data.books,
                    genres: data.genres_books
                });
                break;
            case 'movies':
                this.setState({
                    items: data.movies,
                    genres: data.genres_movies
                });
                break;
            case 'music':
                this.setState({
                    items: data.music,
                    genres: data.genres_music
                });
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error);
    }
}