// Was muss passieren, wenn ein File geuploaded wird?
// Es muss gespeichert werden und ggf anderen Files hinzugefuegt werden, sodass sich eine immer groessere Datei ergibt.
// Der Computer muss erkennen, welche Werte zu der passenden WKN gehoeren und sie den passenden Variablen zuordnen koennen.
// Nachdem der Button "Zu verkaufende ETFs errechnen" gedrueckt wird, muss davon ausgegangen werden, dass die ETFs auch wirklich verkauft werden und diese ETFs muessen aus der Liste geloescht werden.

// In der Tabelle die Werte finden, die zum Eingabewert wknField passt
// Dem zweiten Eingabefeld den Wert "vkPreisProEtf" zuordnen.
// Dem dritten Eingabefeld den Wert "freistellungsBetrag" zuordnen.

//
let wkn = "XXX-WPNRID-D";
let anzahlEtfProKauf = "XXX-NW";
let anzahlSumme; // Anzahl ETFs + Werte davor
let kPreisProEtf = "XXX-WPKURS"; // Kaufpreis/ ETF
let kPreisProKauf = "XXX-KWWWk-preis"; // Kaufpreis/ETF * Anzahl ETFs
let vkPreisProEtf = vkField.value; // Verkaufpreis pro ETF (Wert muss in die App eingegeben werden.)
let vkPreisSumme; // Verkaufpreis/ ETF * Anzahl ETFs
let gewinnEinzel = vkPreisProEtf - kPreisProEtf; // Gewinn/Verlust (Differenz F-D)
let gewinnSumme; // Gewinn + Gewinn der ETFs in den Zeilen davor.
let freistellungsBetrag = freiField.value;
let wkn = wknField.value;
