
export class ShopStateService {

    //currentUser
    /*
    user
        factuuradres
            bedrijfsnaam?
            adresgegevens: bedrijfslocatie
        contactpersoon
            voornaam
            achternaam
            functie
            telefoonnummer
        collega's
            voornaam
            achternaam
            functie
            telefoonnummer
        bedrijflocaties
            land
            postcode
            huisnummer
            huisnummer toevoeging
            straatnaam
            stad
        betaalgegevens
        username
        wachtwoord
     */
    //product in progress
    /*
    kaartje
        styling
            items
        personen[]
            voornaam
            achternaam
            functie
            mailadres
            mobiel nummer
            foto
            linkhashmap adhv de eerste persoon

     */
    getDateString() {
        return `${(new Date()).toISOString()}`;
    }

}