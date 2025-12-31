function calculateBill() {
    // Input lena
    const unitsInput = document.getElementById('unitInput').value;
    const units = parseFloat(unitsInput);
    const resultArea = document.getElementById('resultArea');
    const totalDisplay = document.getElementById('totalAmount');
    const breakdownDisplay = document.getElementById('breakdown');

    let totalBill = 0;
    let detailsText = "";

    // 1. Validation check (Ab 0 ya usse kam par Invalid dikhayega)
    if (unitsInput === "" || isNaN(units) || units <= 0) {
        resultArea.style.display = "block";
        totalDisplay.innerText = "Invalid Input";
        totalDisplay.style.color = "red";
        breakdownDisplay.innerHTML = "Please enter units greater than 0.";
        return;
    }

    // Reset color if input was previously invalid
    totalDisplay.style.color = "#d93025"; 

    // 2. Progressive Slab Logic
    if (units <= 100) {
        totalBill = units * 10;
        detailsText = `${units} units @ Rs. 10`;
    } 
    else if (units <= 300) {
        totalBill = (100 * 10) + (units - 100) * 15;
        detailsText = `100 units @ Rs. 10 <br> ${units - 100} units @ Rs. 15`;
    } 
    else if (units <= 500) {
        totalBill = (100 * 10) + (200 * 15) + (units - 300) * 20;
        detailsText = `100 units @ Rs. 10 <br> 200 units @ Rs. 15 <br> ${units - 300} units @ Rs. 20`;
    } 
    else {
        totalBill = (100 * 10) + (200 * 15) + (200 * 20) + (units - 500) * 25;
        detailsText = `100 units @ Rs. 10 <br> 200 units @ Rs. 15 <br> 200 units @ Rs. 20 <br> ${units - 500} units @ Rs. 25`;
    }

    // 3. Result Show Karna
    resultArea.style.display = "block";
    totalDisplay.innerText = "Total: Rs. " + totalBill.toLocaleString();
    breakdownDisplay.innerHTML = "<strong>Breakdown:</strong><br>" + detailsText;
}