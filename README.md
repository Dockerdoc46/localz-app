# Localz (Local Only) — App React Native

App di social dining costruita in **React Native + Expo + TypeScript**, basata sul file Figma
["LOCALZ - START UP"](https://www.figma.com/design/n7dZnlOd4z7hpCqdfpmmfy/LOCALZ--START-UP).

> Don't visit the city. Join the table.

## Stack

- Expo (managed workflow) + TypeScript
- React Navigation (native-stack + bottom-tabs)
- Font Urbanist (Google Fonts) — matcha il font usato in Figma
- Design tokens estratti dalle variabili Figma (`src/theme`)

## Come avviare il progetto

```bash
npm install
npx expo start
```

Poi scansiona il QR code con l'app **Expo Go** (iOS/Android) oppure premi `i` per il simulatore iOS
/ `a` per l'emulatore Android.

## Struttura

```
src/
  theme/        colori, tipografia, spacing, radius (tokens da Figma)
  components/   Button, ScreenContainer, PhotoPlaceholder, Chip, TableCard, ecc.
  data/         mock data (tavole di esempio)
  navigation/   Onboarding stack + 5 tab principali (Explore, Map, Bookings, Messages, Profile)
  screens/
    onboarding/ 6 schermate COMPLETE e fedeli al design (splash, 3 intro, login, verifica identità, città)
    discovery/  feed, filtri, mappa, dettaglio tavola — COMPLETE e fedeli al design
    booking/    scelta posti, riepilogo costi, conferma — COMPLETE e fedeli al design
    chat/       messaggi — placeholder, da implementare
    host/       dashboard host, crea tavola — placeholder, da implementare
    settings/   profilo, wallet, notifiche, impostazioni — placeholder, da implementare
```

Le schermate "placeholder" sono navigabili (fanno già parte del flusso completo dell'app) ma non
sono ancora fedeli al design Figma — verranno implementate una sezione alla volta.

## Stato di avanzamento

- [x] Design tokens (colori, font, radius) da Figma
- [x] Scaffold progetto + navigazione completa (27 schermate mappate)
- [x] Flow Onboarding/Login (6 schermate, pixel-fedeli)
- [x] Flow Discovery/Map/Booking (8 schermate, pixel-fedeli): feed con filtri, mappa con
      bottom sheet, dettaglio tavola, scelta posti, riepilogo costi, conferma
- [ ] Flow Chat + Host (7 schermate)
- [ ] Flow Wallet/Settings/Profile (6 schermate)

### Nota sulla navigazione

Il bottom-nav a 5 tab (Explore, Map, Bookings, Messages, Profile) segue esattamente quello
mostrato nelle schermate Figma di discovery/mappa. Il flusso "Host" (dashboard, crea tavola,
ricompense) non è un tab ma verrà agganciato come flusso separato raggiungibile dal profilo
("Switch to Hosting"), coerente con come Figma lo presenta come sezione a parte ("User as a
host").

Dati delle tavole (Sofia, Lukas, Clara) sono mock in `src/data/tables.ts` — da sostituire con
chiamate API reali quando ci sarà un backend.

## Esportare le immagini da Figma

Il sandbox di sviluppo non ha accesso di rete ai server di Figma, quindi le foto reali (hero,
città, ecc.) non sono state scaricate automaticamente: le schermate mostrano placeholder colorati.

Per aggiungere le foto vere:

1. In Figma desktop, seleziona il frame/immagine (es. la foto della cena nella schermata splash).
2. Tasto destro → **Export...** → PNG/JPG, scala 2x.
3. Salva il file in `assets/images/` con questi nomi (già referenziati nel codice, basta
   decommentare le righe `require(...)` nei rispettivi screen):
   - `hero-splash.jpg` — splash-welcome
   - `intro-1-discover.jpg`, `intro-2-book.jpg`, `intro-3-meet.jpg` — le 3 intro slide
   - `city-rome.jpg`, `city-milano.jpg`, `city-barcelona.jpg`, `city-berlin.jpg`,
     `city-lisbon.jpg`, `city-amsterdam.jpg` — griglia città
4. In ogni screen file, sostituisci `<PhotoPlaceholder icon="..." />` con
   `<PhotoPlaceholder source={require("../../../assets/images/NOME.jpg")} />`.

## Prossimi passi

- Implementare le restanti 13 schermate (Chat, Host, Wallet, Settings) seguendo lo stesso
  pattern usato per onboarding/discovery/booking.
- Collegare un backend (auth, prenotazioni, chat, pagamenti in-app come da modello di
  cost-sharing descritto nel progetto).
- Configurare EAS Build per la pubblicazione su App Store.
