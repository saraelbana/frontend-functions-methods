// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

let email= "sara@gmail.com"
let wrongEmail = "sara@company"
let noviDomain = "student@novi-education.nl"
let noviWorkerDomain = "worker@novi.nl"
function getEmailDomain(email){
    let domain;
    for(let i =0;i<email.length;i++)
        if(email[i]==="@")
            domain = email.substring(i,email.length);
    return domain;
}
console.log(getEmailDomain(email));

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function typeOfEmail(newEmail){
    let emailDomain = getEmailDomain(newEmail);
    console.log(emailDomain);
    if(emailDomain==="novi-education.nl")
        return "Student";
    else
    if (emailDomain === "novi.nl")
        return "Medewerker";
    else
    if (emailDomain === "outlook.com")
        return "Extern";
    else
        return "Extern";
}
console.log(typeOfEmail(noviWorkerDomain));

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function  checkEmailValidity(email){
    for (let i=0;i<email.length;i++){
        if (email.substring(i,i)==="@") {
            if (email.substring(i, i) === ",")
                return false;
            else {
                if (email.substring(i, i) === "." && i == email.length - 1)
                    return false;
            }
            return  true;
        }
    }
}
