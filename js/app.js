let bars = document.querySelector(".fa-bars");
let navbBar = document.querySelector(".Navbar"),
 faTimes = document.querySelector(".fa-times");


bars.addEventListener("click", ()=>{
 navbBar.style.display = "block"; 
 faTimes.style.display = "block";
 bars.style.display = "none";
 
});
faTimes.addEventListener("click", () => {
 navbBar.style.display = "none";
 faTimes.style.display = "none";
 bars.style.display = "block";
});




