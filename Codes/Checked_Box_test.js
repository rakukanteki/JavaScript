//Get elements by their ID and store into a const variable.
const myCheckBox = document.getElementById("myCheckBox");
const VisaBtn = document.getElementById("VisaBtn");
const MasterCard = document.getElementById("MasterCard");
const Paypal = document.getElementById("Paypal");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const PaymentResult = document.getElementById("PaymentResult");

// For submit button.
mysubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = 'You are subscribed';
    }
    else
    {
        subResult.textContent = 'You are not subscribed';
    }

    if(VisaBtn.checked)
    {
        PaymentResult.textContent = "You are paying with VISA.";
    }
    else if(MasterCard.checked)
    {
        PaymentResult.textContent = "You are paying with Master Card";
    }
    else if(Paypal.checked)
    {
        PaymentResult.textContent = "You are paying with Paypal";
    }
    else
    {
        PaymentResult.textContent = "You must select a payment type.";
    }
}