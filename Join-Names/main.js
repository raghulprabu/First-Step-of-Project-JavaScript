document.getElementById('joinbtn').addEventListener('click' ,function() {
    console.log("test")

    let firstName = document.getElementById("firstName").value 
    let lastName = document.getElementById("secondName").value

    if ( firstName === "" || lastName === "") {
        document.getElementById('result').innerHTML = "<span style='color: red;'>Please check all inputs</span>"
    }
    else{
    document.getElementById('result').innerHTML = firstName + " " + lastName
    }
});