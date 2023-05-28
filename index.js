const APIURL= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMAGEPATH= "https://image.tmdb.org/t/p/w1280";
const main= document.querySelector('main')
async function getMovies(){
    const resp= await fetch(APIURL);
    const respData= await resp.json();
    console.log(respData);

    
    respData.results.forEach(movie => {
        const {title, poster_path, vote_average}= movie
        const movieEL= document.createElement('div');
        
        movieEL.classList.add('movie');
        movieEL.innerHTML=`
        
        <img src="${IMAGEPATH+poster_path}" 
        alt="${title}" >
        <div class="movie-info">
            <p>${title}</p>
            <span>${vote_average}</span>
        </div>
    `
         main.appendChild(movieEL);
    });
    return respData;
}
getMovies();