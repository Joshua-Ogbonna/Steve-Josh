let bars = document.querySelector(".fa-bars");
let navbBar = document.querySelector(".Navbar"),
 faTimes = document.querySelector(".fa-times");


bars.addEventListener("click", ()=>{
 navbBar.style.transform = "scaleX(1)"; 
 faTimes.style.display = "block";
 bars.style.display = "none";
 
});
faTimes.addEventListener("click", () => {
 navbBar.style.transform = "scaleX(0)";
 faTimes.style.display = "none";
 bars.style.display = "block";
});




