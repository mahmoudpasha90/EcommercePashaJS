
const Sumbit=document.getElementById("sumb");
    Sumbit.addEventListener('click', event => {
        const Fname = document.getElementById("fname").value;
     const name = document.getElementById("lname").value;
     const telephone = document.getElementById("Telephone").value;
     const address = document.getElementById("Address").value;
    // const Info = document.getElementById("info").value;
    const today = new Date();
    const deliveryDate = new Date(today.setDate(today.getDate() + 5));
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = deliveryDate.toLocaleDateString('en-US', options);
    const message = `Thank you Mr./Ms.  ${Fname}${name}
    Your order has been successfully confirmed to ${address} yournumber ${telephone}
    with 5 days on ${formattedDate}`;
        const Lname = document.getElementById("messageinfo").innerHTML=message;
      
})






