const API='api_key=16d9a92a7d891f66d6d444278a7aa7b1';
const Base_URL='https://api.themoviedb.org/3/movie/now_playing?api_key=16d9a92a7d891f66d6d444278a7aa7b1'
const API_URL=Base_URL+"top_rated?language=en-US&page=1"+API;
console.log(Base_URL);

getMovies(Base_URL);

function getMovies(url){
    fetch(url).then(res =>
        res.json()).then(data=>{
            console.log(data);
           //showMovie(data.results)
        })
    
}

// function showMovie(data){
//     data.array.forEach(movie => {
//         const movieElement=document.createElement('div');
//         movieElement.classList.add("card_section");
//         movieElement.innerHTML = `
//         <img src="https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80" alt="img">
//         <div class="card-body">
//             <h4 class="card-title">
//                 card title
//             </h4>
//             <span class="color"><i class="fa-regular fa-heart"></i></span>
//         </div>
//         <div class="overview">
//             <h3>Overview</h3>
//             <p class="card-content">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. .
//             </p>
//         </div>
//         `
        
//     });
// }