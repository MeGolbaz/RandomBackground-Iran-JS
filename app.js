


let h1 = document.querySelector("h1");
let span = document.querySelector("span");
let i = 1;

function randombachground() {



    document.body.style.background = `url(images/${i}.jpg)`;
    document.body.style.backgroundSize = "cover";

    switch (i) {
    case 1:
        h1.textContent = "Mosque";
        span.textContent = "Shiraz";
        break;

    case 2:
    h1.textContent = "Prespolis";
    span.textContent = "Shiraz";
    break;

    case 3:
    h1.textContent = "Mosque";
    span.textContent = "Isfahan";
    break;

    case 4:
    h1.textContent = "house";
    span.textContent = "Kashan";
    break;

    case 5:
    h1.textContent = "Square";
    span.textContent = "Isfahan";
    break;

}
i++ ;
    if (i===6){
        i=1;
    }
    // console.log(i);
    setTimeout(randombachground,2000);
}

    randombachground();
// setTimeout(function () {
//     console.log("hi");
// }, 2000);


// setInterval(randombachground,1000);