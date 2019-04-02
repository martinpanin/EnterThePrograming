document.querySelector("#bats").addEventListener("click", function(){
   const invert = document.querySelector("body").classList.contains("invert");
    if (invert !== true) {
        document.querySelector("body").classList.add("invert");
    } else {
        document.querySelector("body").classList.remove("invert");
    }
});