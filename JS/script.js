let obj1 = [
    {
        question: "Q1) How many Keywords are there to define a variable in JS? ",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans3"
    },

    {
        question: "Q2) HTML stands for _____",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Mrkup Language",
        c: "Hyper Txt MarkUp Language",
        d: "Hyper Txt Mrkuplanguage",
        ans: "ans1"
    },

    {
        question: "Q3)  CSS stands for ______",
        a: "Casceding Tyle Sheet",
        b: "Caseceding Style Sheet",
        c: "Casceding Tile Sheet",
        d: "Non Of the above",
        ans: "ans2"
    },

    {
        question: "Q4) Js Stands for ______",
        a: "JavaScript",
        b: "JavaKript",
        c: "JavaSkript",
        d: "None Of The above",
        ans: "ans1"
    }
];

// Import
let que = document.getElementById("question");
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let op4 = document.getElementById("op4");
let answers = document.querySelectorAll(".answers");
let submit = document.getElementById("Submit");
let inputElements = document.querySelectorAll('input[name = "option"]');
let i = 0;


// startQuiz

function StartQuiz() {

    document.getElementById("container").style.display = "block";
    document.getElementById("starter").style.display = "none";
    generateQuestion();

}

function ExitQuiz() {
    window.close();
}

// Defining and calling Req Functions
function generateQuestion() {
    que.innerText = obj1[i].question;
    op1.innerText = obj1[i].a;
    op2.innerText = obj1[i].b;
    op3.innerText = obj1[i].c;
    op4.innerText = obj1[i].d;

}

let j = 1;

function incrementQuestion() {
    if (j < obj1.length) {
        i++;
        j++;
    } else {
        let lastConfirm = confirm("This is the last Question. After Submiting You will be Submit The Quiz");

        if (lastConfirm == false) {
            j = j;
            score = score;
        } else {

            document.getElementById("container").style.display = "none";
            document.getElementById("score").style.display = "Flex";
        }
    }
}

let score = 0;
function Submit() {

    var checked = 0, radios = document.getElementsByName('option');
    for (var x = 0, radio, check; radio = radios[x]; x++) {
        if (radio.checked || radio.checked) {
            checked = true;

            let weatherChecked = radio.id

            if (checked = true) {
                radio.checked = false;
                if (weatherChecked == obj1[i].ans) {
                    score++;
                }
                incrementQuestion();
                generateQuestion();

                break;
            }
            break;
        }
    }

    document.getElementById("TotalMarks").innerHTML = " / " + obj1.length;
    document.getElementById("gotMarks").innerHTML = score;

    if (score == 0) {
        document.getElementById("comment").innerHTML = "Better Luck Next Time!";
    }
    else if (score == obj1.length) {
        document.getElementById("comment").innerHTML = "Excellent!";
    }
    else {
        document.getElementById("comment").innerHTML = "Good.";
    }

    if (!checked) {
        alert("Please Select The Option!");
        return false;
    }

    return true;
}