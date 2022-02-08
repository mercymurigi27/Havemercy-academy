var correctAns = {
    HTML: "D",
    jvas: "D",
    CODE:"A",
    inbuilt:"D",
    strin:"A",
    funi:"c",
    obj:"c",
    bol:"D",
    arr:"A",
    shift:"B"

}

let fomu = document.getElementById("fomu");
let score = 0;
fomu.addEventListener("submit", function (event) {
    event.preventDefault();

    var userData = new FormData(fomu);
    compareData(userData);
});
