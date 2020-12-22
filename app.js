var head1 = document.getElementById("head-1");
var head3 = document.getElementById("head-2");
var head2 = document.getElementById("head-3");
var score = document.getElementById("score");
var round = document.getElementById("round");
roundCounter = 0;
round.innerHTML = roundCounter;
var numScore = 0;
score.innerHTML = numScore;

function start(e, f) {
    var head1 = document.getElementById("head-1");
    head1.setAttribute("class", "answer");
    var head2 = document.getElementById("head-3");
    head2.setAttribute("class", "answer");
    var head3 = document.getElementById("head-2");
    head3.setAttribute("class", "answer");
    var val = document.getElementById("result");
    val.innerHTML = "";
    val.insertAdjacentHTML(
        "afterbegin",
        `<img src=${e} id=${f} class="image-zoom" itemprop="image" id="image-item" />`
    );
    roundCounter++;
    round.innerHTML = roundCounter;
    var computer = Math.ceil(Math.random() * 3);
    if (computer == 1) {
        val.insertAdjacentHTML(
            "beforeend",
            `<img src="download.png" id="rock" class="image-zoom" itemprop="image" id="image-item" />`
        );
        if (e == "unnamed.png") {
            numScore = numScore + 1;
            score.innerHTML = numScore;
            head1.classList.remove("answer");
            var id = document.getElementById(`${f}`);
            id.setAttribute("class", "green");
            var id2 = id.nextSibling;
            id2.setAttribute("class", "red");
        } else if (e == "download.png") {
            head2.classList.remove("answer");
            var id = document.getElementById(`${f}`);
            id.setAttribute("class", "yellow");
            var id2 = id.nextSibling;
            id2.setAttribute("class", "yellow");
        } else if (e == "1.png") {
            head3.classList.remove("answer");
            var id = document.getElementById(`${f}`);
            id.setAttribute("class", "red");
            var id2 = id.nextSibling;
            id2.setAttribute("class", "green");
        }
    } else if (computer == 2) {
        val.insertAdjacentHTML(
            "beforeend",
            `<img src="unnamed.png" id="paper" class="image-zoom" itemprop="image" id="image-item" />`
        );
        if (e == "1.png") {
            numScore = numScore + 1;
            score.innerHTML = numScore;
            var head1 = document.getElementById("head-1");
            head1.classList.remove("answer");
            var id = document.getElementById(`${f}`);
            id.setAttribute("class", "green");
            var id2 = id.nextSibling;
            id2.setAttribute("class", "red");
        } else if (e == "unnamed.png") {
            head2.classList.remove("answer");
            var id = document.getElementById(`${f}`);
            id.setAttribute("class", "yellow");
            var id2 = id.nextSibling;
            id2.setAttribute("class", "yellow");
        } else if (e == "download.png") {
            head3.classList.remove("answer");
            var id = document.getElementById(`${f}`);
            id.setAttribute("class", "red");
            var id2 = id.nextSibling;
            id2.setAttribute("class", "green");
        }
    } else if (computer == 3) {
        val.insertAdjacentHTML(
            "beforeend",
            `<img src="1.png" id="scissor" class="image-zoom" itemprop="image" id="image-item" />`
        );
        if (e == "download.png") {
            numScore = numScore + 1;
            score.innerHTML = numScore;
            var head1 = document.getElementById("head-1");
            head1.classList.remove("answer");
            var id = document.getElementById(`${f}`);
            id.setAttribute("class", "green");
            var id2 = id.nextSibling;
            id2.setAttribute("class", "red");
        } else if (e == "1.png") {
            head2.classList.remove("answer");
            var id = document.getElementById(`${f}`);
            id.setAttribute("class", "yellow");
            var id2 = id.nextSibling;
            id2.setAttribute("class", "yellow");
        } else if (e == "unnamed.png") {
            head3.classList.remove("answer");
            var id = document.getElementById(`${f}`);
            id.setAttribute("class", "red");
            var id2 = id.nextSibling;
            id2.setAttribute("class", "green");
        }
    }
}
function resume() {
    var head1 = document.getElementById("head-1");
    head1.setAttribute("class", "answer");
    var head2 = document.getElementById("head-3");
    head2.setAttribute("class", "answer");
    var head3 = document.getElementById("head-2");
    head3.setAttribute("class", "answer");
    var val = document.getElementById("result");
    val.innerHTML = "";
    val.insertAdjacentHTML(
        "afterbegin",
        '<img src="download.png" id="rock" class="image-zoom" itemprop="image" id="image-item" onclick="start(`download.png`,`rock`)"/><img src="unnamed.png" id="paper" class="image-zoom" itemprop="image" id="image-item" onclick="start(`unnamed.png`,`paper`)"/><img src="1.png" id="scissor" class="image-zoom" itemprop="image" id="image-item" onclick="start(`1.png`,`scissor`)"/>'
    );
}
function reset() {
    var head1 = document.getElementById("head-1");
    head1.setAttribute("class", "answer");
    var head2 = document.getElementById("head-3");
    head2.setAttribute("class", "answer");
    var head3 = document.getElementById("head-2");
    head3.setAttribute("class", "answer");
    var val = document.getElementById("result");
    val.innerHTML = "";
    val.insertAdjacentHTML(
        "afterbegin",
        '<img src="download.png" id="rock" class="image-zoom" itemprop="image" id="image-item" onclick="start(`download.png`,`rock`)"/><img src="unnamed.png" id="paper" class="image-zoom" itemprop="image" id="image-item" onclick="start(`unnamed.png`,`paper`)"/><img src="1.png" id="scissor" class="image-zoom" itemprop="image" id="image-item" onclick="start(`1.png`,`scissor`)"/>'
    );
    var score = document.getElementById("score");
    numScore = 0;
    score.innerHTML = numScore;
    var round = document.getElementById("round");
    roundCounter = 0;
    round.innerHTML = roundCounter;
}
