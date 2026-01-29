function checkStatus() {
    fetch("http://localhost:3000/predict")
        .then(response => response.json())
        .then(data => {
            document.getElementById("probability").innerText =
                "Failure Probability: " + data.failure_probability + "%";

            document.getElementById("status").innerText =
                "Status: " + data.status;
        });
}