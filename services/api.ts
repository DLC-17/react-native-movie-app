export const TMDB_CONFIG ={
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept:'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({query}: {query:string})=> {
    const endpoint = query
    ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)} `
    :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint,{
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });
    if (!response.ok){
        //@ts-ignore
        throw new Error('failed to fetch movies', response.statusText);
    }
    const data= await response.json();
    return data.results;
    //Throw error failed to fetch movies
}


/*const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzYxZjA2OWY2NzI2OTJhM2Q0MzgyZTMxZWY5ZTUxOCIsIm5iZiI6MTc1ODA2NTY3MS44NzYsInN1YiI6IjY4YzlmNDA3Yjc5Nzk3MDNiYzEzZjNkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPyqc9F71OLZJxAvymKFs_pCRILxAQ4DJu4at3UfuZc'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));*/