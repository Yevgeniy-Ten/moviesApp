# Movie Catalog

This is a movie catalog web application built using React.js. The application allows users to search for movies through the OMDB API, displaying the results with pagination and essential details like title, year, ID, and type.

## Features

- **Header**: Displays the website title, a search bar, and a user section.
- **Search**: Allows users to search movies by title, displaying the total number of results.
- **Movie Listing**: Displays a list of movies, including the poster image, title, year, ID, and type.
- **Pagination**: Allows navigation between pages of search results.
- **Loading Indicator**: Shows a spinner while results are loading.
- **No Results Message**: Displays a message if no results are found.
- **Placeholder Image**: Shows a placeholder image when a movie does not have a poster.

## API

The app uses the [OMDB API](https://www.omdbapi.com) to fetch movie data.

### API URL

https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8

### API Parameters

- `s`: **required**, string — the movie title to search for.
- `page`: **optional**, number — the page number of the results (default: 1).

### Example API Call

```sh
https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=Batman&page=2
```

## Installation

Node.js version 18 >= is required to run this application. To install the project, clone the repository and run the following commands:

```sh


# Working hours is 3.20 hours
