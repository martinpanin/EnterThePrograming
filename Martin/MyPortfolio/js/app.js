document.querySelector("#bats").addEventListener("click", function(){
   const invert = document.querySelector("body").classList.contains("invert");
    if (invert !== true) {
        document.querySelector("body").classList.add("invert");
    } else {
        document.querySelector("body").classList.remove("invert");
    }
});

document.querySelector(".penis").addEventListener("click", function(){
   const penis = document.querySelector("article").classList.contains("penis");
    if (penis !== true) {
        document.querySelector("article").classList.add("penis");
    } else {
        document.querySelector("article").classList.remove("penis");
    }
});
