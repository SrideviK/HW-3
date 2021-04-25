let customers=[];
function formSubmitEvent() {
    let name = document.getElementById("custname").value;
    let city = document.getElementById("city").value;
    let payment = document.getElementById("payment").value;
    
    let myul=document.getElementById("mylist");
    myul.innerHTML = "";

    
    if (name.length > 2 && city.length > 2) {
        customers.push(name+" "+city+" "+payment);
        
        for(i=0;i<customers.length;i++)
        {
        let li=document.createElement('li');
        myul.appendChild(li);
        li.textContent=customers[i];
        }
    }
    else {
        alert("please fill in all fields");
    }
}
