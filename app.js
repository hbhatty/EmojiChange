const freezEmoji = document.querySelector(".freez");
const hotEmoji = document.querySelector(".hot");


//Add event listener

freezEmoji.addEventListener("click", () => { //click for when freez emoji shows
    if(hotEmoji.classList.contains("hot")){
        hotEmoji.classList.add("active"); //adds active class to hot
        freezEmoji.classList.remove("active") // removes active class for freez so it dissappears
    }
});

hotEmoji.addEventListener("click", () => {  //click when hot emoji pops up
    if(freezEmoji.classList.contains("freez")){
        freezEmoji.classList.add("active");
        hotEmoji.classList.remove("active");
    }
})
