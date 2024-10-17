const movies = {
    action: [
      {
        title: "Mad Max: Fury Road",
        length: "long",
        mood: "excited",
        img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg"
      },
      {
        title: "John Wick",
        length: "long",
        mood: "excited",
        img: "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg"
      }
    ],
    romance: [
      {
        title: "The Notebook",
        length: "long",
        mood: "romantic",
        img: "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg"
      },
      {
        title: "Titanic",
        length: "long",
        mood: "romantic",
        img: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png"
      }
    ]
    // Add other genres as needed...
};

function generateMovies() {
    const genre = document.getElementById('genre').value;
    const length = document.getElementById('length').value;
    const mood = document.getElementById('mood').value;

    const filteredMovies = movies[genre].filter(movie => movie.length === length && movie.mood === mood);
    const movieResults = document.getElementById('movie-results');
    movieResults.innerHTML = '';

    filteredMovies.slice(0, 5).forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.img}" alt="${movie.title} Poster" onerror="this.onerror=null; this.src='https://via.placeholder.com/150';">
            <h3>${movie.title}</h3>
        `;
        movieResults.appendChild(movieCard);
    });

    if (filteredMovies.length === 0) {
        movieResults.innerHTML = '<p>No movies found matching your criteria. Try again!</p>';
    }
}
