function convertAgeToDays() {
    let age = parseInt(document.getElementById("ageInput").value);
    let resultDiv = document.getElementById("result1");
    if (isNaN(age) || age < 0) {
        resultDiv.innerText = "Please enter a valid age!";
        resultDiv.style.color = "red";
        return;
    }
    let days = age * 365;
    resultDiv.innerText = `Your age in days is roughly: ${days} days`;
    resultDiv.style.color = "#28a745";
}

// Task2

function convertHoursToSeconds() {
    let hours = parseFloat(document.getElementById("hoursInput").value);
    let resultDiv = document.getElementById("result2");
    if (isNaN(hours) || hours < 0) {
        resultDiv.innerText = "Please enter valid hours!";
        resultDiv.style.color = "red";
        return;
    }
    let seconds = hours * 3600;
    resultDiv.innerText = `${hours} hours = ${seconds} seconds`;
    resultDiv.style.color = "#28a745";
}

// Task3

function findNextNumber() {
    let num = parseInt(document.getElementById("numberInput").value);
    let resultDiv = document.getElementById("result3");
    if (isNaN(num)) {
        resultDiv.innerText = "Please enter an integer!";
        resultDiv.style.color = "red";
        return;
    }
    let nextNum = num + 1;
    resultDiv.innerText = `The next number is: ${nextNum}`;
    resultDiv.style.color = "#28a745";
}
// Task4

function capitalizeName() {
    let name = document.getElementById("nameInput").value.trim();
    let resultDiv = document.getElementById("result4");
    if (name === "") {
        resultDiv.innerText = "Please enter a name!";
        resultDiv.style.color = "red";
        return;
    }
    let capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    resultDiv.innerText = `Capitalized Name: ${capitalized}`;
    resultDiv.style.color = "#28a745";
}
// Task5

function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let feet = parseInt(document.getElementById("feet").value);
    let inches = parseInt(document.getElementById("inches").value) || 0; 
    let resultDiv = document.getElementById("result5");

    if (isNaN(weight) || isNaN(feet) || weight <= 0 || feet <= 0) {
        resultDiv.innerText = "Please enter valid weight and height!";
        resultDiv.style.color = "red";
        return;
    }

    let totalInches = (feet * 12) + inches;
    let heightInMeters = totalInches * 0.0254;
    let bmi = weight / (heightInMeters * heightInMeters);

    let status = "";
    let color = "";

    if (bmi < 18.5) {
        status = "Underweight (Gain your weight!) 🦴";
        color = "#dc3545";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal (Maintain your weight!) ✅";
        color = "#28a745";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight (Lose your weight!) ⚠️";
        color = "#fd7e14";
    } else {
        status = "Obese (Dangerously Overweight! Lose your weight!) 🚨";
        color = "#721c24";
    }

    resultDiv.innerHTML = `
        Your BMI is: <span style="color: ${color};">${bmi.toFixed(1)}</span>
        <div style="font-size: 16px; margin-top: 5px; font-weight: normal; color: ${color};">Status: <strong>${status}</strong></div>
    `;
}
// Task6

function generateRandomArray() {
    let length = Math.floor(Math.random() * 6) + 5; 
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    return arr;
}

function pickFirstAndLast(arr) {
    return { first: arr[0], last: arr[arr.length - 1] };
}

function handleArrayTask() {
    let myRandomArray = generateRandomArray();
    let result = pickFirstAndLast(myRandomArray);
    let outputDiv = document.getElementById("result6");
    
    outputDiv.style.display = "block";
    outputDiv.innerHTML = `
        <strong>Generated Array:</strong> [${myRandomArray.join(", ")}] <br><br>
        <strong>First Element:</strong> ${result.first} <br>
        <strong>Last Element:</strong> ${result.last}
    `;
}

// Task7

function addNumbers() {
    let value1 = document.getElementById("num1").value;
    let value2 = document.getElementById("num2").value;
    let resultBox = document.getElementById("resultAddition");

    if (value1 === "" && value2 === "") {
        resultBox.value = "";
        return;
    }

    let num1 = parseInt(value1);
    let num2 = parseInt(value2);
    let sum = num1 + num2;

    resultBox.value = sum;
}