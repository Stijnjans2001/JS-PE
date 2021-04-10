const Voornaam= document.getElementsByName("InputVoornaam")
const Naam= document.getElementsByName("InputNaam")
const Gebruiksnaam= document.getElementsByName("InputGebruiksnaam")
const Adres= document.getElementsByName("InputAdres")
const Land= document.getElementsByName("InputLand")
const Provincie= document.getElementsByName("InputProvincie")
const Formulier= document.getElementsByName("Formulier")
const errorElement= document.getElementById("error")
function validateForm() {
    form.addEventListener("submit", (e) => {
    let errors = [];
    errors.push(checkEmptyField())
    //errors.push(validateEmail(email))

    e.preventDefault()
    })
}

function checkEmptyField() {
    if (Voornaam.value === "" || Voornaam.value == null){
        document.getElementsById("Voornaam").innerHTML = "Het veld voornaam is vereist <br>";
    }
    if (Naam.value === "" || Naam.value == null){
        document.getElementsById("Naam").innerHTML = "Het veld naam is vereist <br>";
    }
    if (Gebruiksnaam === "" || Gebruiksnaam == null){
        document.getElementsById("Gebruiksnaam").innerHTML = "Het veld gebruiksnaam is vereist <br>";
    }
    if (Adres === "" || Adres == null){
        document.getElementsById("Adres").innerHTML = "Adres is vereist <br>";
    }
    if (Land === "" || Land.value == null){
        document.getElementsById("Land").innerHTML = "Land is vereist <br>";
    }
    if (Provincie === "" || Provincie == null){
        document.getElementsById("Provincie").innerHTML = "Provincie is vereist <br>";
    }
}
//function validateEmail(){}
