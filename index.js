const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="
const movieBox = document.querySelector(".container")
const getMovieDetails = async(api)=>{

  const response = await fetch(api);
  const data =  await response.json();
  console.log("data", data.results);

   showMovie(data.results)

}

const showMovie =(data)=>{
  movieBox.innerHTML=""
  
//  console.log("Dataaa",data.results)
 data.map((item,i)=>{
  console.log("item : ",IMGPATH+item.poster_path)
   const box = document.createElement("div");
   box.classList.add("box");
   box.innerHTML =`
   <div id="image"><img id="movie-poster" src=${IMGPATH+item.poster_path} alt=""></div>
   <div id="title"><h2>${item.original_title} </h2><span>Rating: ${item.vote_average}</span>
   <h4 id="">Release : ${item.release_date}    </h4> <p id="overflow"></p>
   </div>
   `
  
   movieBox.append(box)
 })
}

document.getElementById("search").addEventListener("keyup", function(event){
  console.log("event ",event.target.value)
  if(event.target.value !=""){
    getMovieDetails(SEARCHAPI+event.target.value)

  }else{
    getMovieDetails(APIURL)
  }
})
getMovieDetails(APIURL)


