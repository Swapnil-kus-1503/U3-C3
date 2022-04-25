// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


const movies_div = document.getElementById('movies');

let id;

let checkout_data=JSON.parse(localStorage.getItem('movie'))||[];

async function searchMovies(){
    // console.log('inside');
    try{

    const input=document.getElementById('search').value;

    let res=await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${input}`)

    let data=await res.json();

    const movies=data.Search;
    // console.log(movies);
    appendMovies(movies);
    // return movies;
    }

    catch (err){
        console.log('err:',err);
    }

    function appendMovies(data){

        movies_div.innerHTML=null;

        data.forEach(function(ele){
            let div=document.createElement('div');

            let img=document.createElement('img');
            img.src=ele.Poster;

            let p=document.createElement('p');
            p.innerText=ele.Title;

            let btn=document.createElement('button');
            btn.innerText='Book Now';
            btn.setAttribute('class','book_now');
            btn.addEventListener('click',function(){
                addtocheckout(ele);
            })
            div.append(img,p,btn);
            movies_div.append(div);
        }) 
        
    } 
    function addtocheckout(ele) {
        console.log(ele);
        checkout_data.push(ele);
        localStorage.setItem('movie',JSON.stringify(checkout_data));
    }
}

async function main(){
    let data=await searchMovies();
    
    if(data===undefined){
        return false;
    }
    console.log(data);
    appendMovies(data);
}

function debouncing(fun,delay){

    if(id){
        clearTimeout(id);
    }

    id=setTimeout(function(){
        fun();
    },delay);
} 
