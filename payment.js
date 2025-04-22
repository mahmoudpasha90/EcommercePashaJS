const submitButton = document.getElementById("sumb");

submitButton.addEventListener('click', event => {
    event.preventDefault();
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const telephone = document.getElementById("Telephone").value;
    const address = document.getElementById("Address").value;
    const today = new Date();
    const deliveryDate = new Date(today.setDate(today.getDate() + 5));
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = deliveryDate.toLocaleDateString('en-US', options);
    const message = `Thank you Mr./Ms. ${firstName} ${lastName},
Your order has been successfully confirmed to ${address}.
Your number: ${telephone}.
Expected delivery in 5 days on ${formattedDate}.`;
    document.getElementById("messageinfo").innerHTML = message;
});