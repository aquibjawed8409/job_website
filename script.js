let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('.menu-btn').onclick = ()=>{
    navbar.classList.toggle('active')
}

// function menuBtn(){
//     let navbar = document.querySelector(".header .flex .navbar");
//     if(navbar.style.visibility === "hidden"){
//         navbar.style.visibility === "visible"
//     }else{
//         navbar.style.display === "hidden"
//     }
// }
// menuBtn( )