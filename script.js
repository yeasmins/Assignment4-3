let queue = [];
let input = 0;

function operate(value) {
    if (input !== 0) {
        input = parseFloat(input);
        addToQueue(input);
    }

    let answer = value[0];
    let dividedByZero = 0;
    for (let i = 2; i < value.length; i = i + 2) {
        switch (queue[i - 1]) {
            case '+':
                answer += value[i];
                break;

            case '-':
                answer -= value[i];
                break;

            case '/':
                if (value[i] === 0)
                    dividedByZero = 1;
                else answer = answer / value[i];
                break;

            case '*':
                answer = answer * value[i];
                break;
        }
    }

    answer = answer.toFixed(10);
    answer = parseFloat(answer);
    if (dividedByZero === 1) {
        clearAll();
        document.getElementById("answer").innerHTML = "ERROR";
    }
    else {
        document.getElementById("answer").innerHTML = answer;
        input = answer;
        queue = [];
    }
}

function addToQueue(input) {
    queue.push(input);
}

function clearAll() {
    queue = [];
    input = 0;
    document.getElementById("answer").innerHTML = "0";
}

function numericButton(arg) {
    if (document.getElementById("answer").innerHTML === "ERROR" || (document.getElementById("answer").innerHTML == "0" && arg != ".")) { 
        document.getElementById("answer").innerHTML = ""; 
    }

    if (!(arg === ".") || !input.match(/[.]/)) {

        input += arg;
        document.getElementById("answer").innerHTML += arg;
    }
}

function operatorButton(arg) {
    if (input !== 0 && input !== "-") {
        input = parseFloat(input);
        addToQueue(input);
        addToQueue(arg);
        document.getElementById("answer").innerHTML += arg;
        input = 0;
    }

    if (arg == "-" && isNaN(queue[0]) && input !== "-") {
        input = "-";
        document.getElementById("answer").innerHTML = "-";
    }
}
