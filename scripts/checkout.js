// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let checkout=JSON.parse(localStorage.getItem('movie'))||[];

let movie_div=document.getElementById('movie');
document.getElementById('confirm').addEventListener('click',myfun);

function myfun(){
    console.log('inside');
    let name=document.getElementById('user_name').value 
    let seats=document.getElementById('number_of_seats').value;
}

checkout.forEach(function(ele){
    let div=document.createElement('div');
    let title=document.createElement('p');
    title.innertext=ele.Title;

    let img=document.createElement('img');
    img.src=ele.Poster;

    div.append(title,img);
    movie_div.append(div);
})

