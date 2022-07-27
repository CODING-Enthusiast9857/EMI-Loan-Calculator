setTimeout(calculateLoanAmount,2000);
function calculateLoanAmount()
{

    UIamount=document.getElementById("amount");
    UIinterest=document.getElementById("interest");
    UIyears=document.getElementById("years");
    UImonthlyPayment=document.getElementById("monthly-payment");
    UItotalPayment=document.getElementById("total-payment");
    UItotalInterest=document.getElementById("total-interest");

    principal=parseFloat(UIamount.value);
    calculatedInterest=parseFloat(UIinterest.value)/100/12;
    calculatedPayment=parseFloat(UIyears.value)*12;

    x=Math.pow(1+calculatedInterest,calculatedPayment);
    monthly=(principal*x*calculatedInterest)/(x-1);

    if(principal<0)
        alert('Please Enter Positive Amount for Principal...!!');
    else if(calculatedInterest<0)
        alert('Please Enter Positive Interest Rate');
    else if(calculatedPayment<0)
        alert('Please Enter Positive Amount');
    else if(isFinite(monthly)){
        UImonthlyPayment.value=monthly.toFixed(2);
        UItotalPayment.value=(monthly*calculatedPayment).toFixed(2);
        UItotalInterest.value=((monthly*calculatedPayment)-principal).toFixed(2);
        document.getElementById('results').style.display='block';
    }
    else
        alert("Please Check Entered Amount");
}
