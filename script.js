function promeniBojuTeksta() {
    let naslov = document.querySelector('h1');
    naslov.style.color = 'blue';
}
promeniBojuTeksta();

let proizvodi = [
    { ime: "THE WITCHER 3: WILD HUNT", cena: 3000 },
    { ime: "ASSASSIN'S CREED II", cena: 1200 },
    { ime: "GRAND THEFT AUTO IV", cena: 2300 },
    { ime: "FIFA 22", cena: 7000 },
    { ime: "STRONGHOLD 2 DELUXE", cena: 1800 },
];
proizvodi.push({ ime: "TOMB RAIDER: THE ANGEL OF DARKNESS", cena: 1000 })

function generisiListuProizvoda(proizvodi) {
    let listaHtml = "<ul>";
    proizvodi.forEach(proizvod => {
        listaHtml += `<li>${proizvod.ime} - Cena: ${proizvod.cena} dinara</li>`;
    });
    listaHtml += "</ul>";
    return listaHtml;
}

document.getElementById("prikazi-proizvode").addEventListener("mouseover", function() {
    document.getElementById("proizvodi-lista").innerHTML = generisiListuProizvoda(proizvodi);
    document.getElementById("proizvodi-lista").style.display = "block";
});

function kupovina(){
    alert('Uspešno ste ubacili u korpu ovu igricu!');
}

function proveriFormu() {
    var imeInput = document.getElementById("ime");
    var telefonInput = document.getElementById("telefon");
    var emailInput = document.getElementById("email");

    var imeValue = imeInput.value.charAt(0).toUpperCase() + imeInput.value.slice(1).toLowerCase();
    imeInput.value = imeValue;
    var telefonValue = telefonInput.value.replace(/\D/g, '');
    telefonInput.value = telefonValue;
    emailInput.value = emailInput.value.toLowerCase();
}
function potvrdiformu()
{
    let f = registracija;
    let ime = f.ime;
    let telefon = f.telefon;
    let email = f.email;
    let password = f.password;

    event.preventDefault();
    console.log("ime: " + ime.value);
    console.log("telefon: " + telefon.value);
    console.log("email: " + email.value);
    console.log("lozinka: " + password.value);

}
function vasemisljenje() {
    const misljenje = prompt("Da li vam se sviđa sajt? (da/ne)");

    switch (misljenje && misljenje.toLowerCase()) {
        case "da":
            alert("Nadam se da ste nasli zeljenu igricu");
            break;
        case "ne":
            alert("Izvinjavam se što nismo bili od pomoci");
            break;
        default:
            alert("Molim vas, pokušajte ponovo sa vrednostima 'da' ili 'ne'.");
            break;
    }
}
function proveriDostupnost() {
    let proizvodi = [
        { ime: "THE WITCHER 3: WILD HUNT", cena: 3000 },
        { ime: "ASSASSIN'S CREED II", cena: 1200 },
        { ime: "GRAND THEFT AUTO IV", cena: 2300 },
        { ime: "FIFA 22", cena: 7000 },
        { ime: "STRONGHOLD 2 DELUXE", cena: 1800 },
        { ime: "TOMB RAIDER: THE ANGEL OF DARKNESS", cena: 1000 }
    ];

    let imeProizvoda = document.getElementById("ime-proizvoda").value;
    let rezultat = document.getElementById("rezultat");

    for (let i = 0; i < proizvodi.length; i++) {
        if (proizvodi[i].ime === imeProizvoda) {
            rezultat.textContent = `Proizvod "${imeProizvoda}" je dostupan.`;
            return;
        }
    }

    rezultat.textContent = `Proizvod "${imeProizvoda}" nije dostupan.`;
}

function updateTime() {
    var now = new Date();
    var dateElement = document.getElementById('date');
    var timeElement = document.getElementById('time');
    dateElement.innerHTML = now.toDateString();
    timeElement.innerHTML = now.toLocaleTimeString();
  }
  setInterval(updateTime, 1000);