# Localz (Local Only) — App React Native

App di social dining costruita in **React Native + Expo + TypeScript**, basata sul file Figma
["LOCALZ - START UP"](https://www.figma.com/design/n7dZnlOd4z7hpCqdfpmmfy/LOCALZ--START-UP).

> Don't visit the city. Join the table.

## Stack

- Expo (managed workflow) + TypeScript
- React Navigation (native-stack + bottom-tabs)
- Font Urbanist (Google Fonts) — matcha il font usato in Figma
- Design tokens estratti dalle variabili Figma (`src/theme`)

## Come avviare il progetto (Expo Go)

```bash
npm install
npx expo start
```

Poi scansiona il QR code con l'app **Expo Go** (iOS/Android) oppure premi `i` per il simulatore iOS
/ `a` per l'emulatore Android. Questo passaggio va eseguito sul tuo computer (il sandbox di
sviluppo non può avviare un Metro bundler raggiungibile dal telefono).

## Struttura

```
src/
  theme/        colori, tipografia, spacing, radius (tokens da Figma)
  components/   Button, ScreenContainer, PhotoPlaceholder, Chip, TableCard, ProfileModeToggle,
                ProfileQuickLinks, ecc.
  context/      HostModeContext — switch globale Guest/Localz (host)
  data/         mock data (tavole, conversazioni)
  navigation/   Onboarding stack + 5 tab principali (Explore, Map, Bookings, Messages, Profile)
  screens/
    onboarding/ 6 schermate COMPLETE e fedeli al design (splash, 3 intro, login, verifica identità, città)
    discovery/  feed, filtri, mappa, dettaglio tavola — COMPLETE e fedeli al design
    booking/    scelta posti, riepilogo costi, conferma, recensione post-cena — COMPLETE
    chat/       lista messaggi + thread — COMPLETE e fedeli al design
    host/       dashboard host, crea tavola (2 step), rewards, profilo host — COMPLETE
    settings/   profilo guest, wallet, notifiche, impostazioni, help — COMPLETE
```

## Stato di avanzamento

- [x] Design tokens (colori, font, radius) da Figma
- [x] Scaffold progetto + navigazione completa (30 schermate mappate)
- [x] Flow Onboarding/Login (6 schermate, pixel-fedeli)
- [x] Flow Discovery/Map/Booking (8 schermate, pixel-fedeli): feed con filtri, mappa con
      bottom sheet, dettaglio tavola, scelta posti, riepilogo costi, conferma
- [x] Flow Chat + Host (7 schermate): lista chat, thread, dashboard host, crea tavola (2 step),
      rewards host, profilo host
- [x] Flow Wallet/Settings/Profile (7 schermate): profilo guest/host con switch Guest↔Localz,
      wallet, notifiche, impostazioni, help & safety, recensione post-cena

Tutte le schermate principali del file Figma sono ora implementate e navigabili. La schermata
"Bookings" (tab calendario) resta un placeholder minimale — nel file Figma esportato non era
presente una vista dedicata alle prenotazioni.

### Nota sulla navigazione

Il bottom-nav a 5 tab (Explore, Map, Bookings, Messages, Profile) segue esattamente quello
mostrato nelle schermate Figma di discovery/mappa. Il flusso "Host" non è un tab a sé: lo switch
"Guest / Localz" nel tab Profile (componente `ProfileModeToggle`, stato globale in
`HostModeContext`) cambia cosa mostrano sia il tab Explore (feed scoperta ↔ dashboard host) sia
il tab Profile (profilo guest ↔ profilo host), coerentemente con come Figma presenta "User as a
host" come una modalità dello stesso account, non una sezione separata.

Dati mock in `src/data/tables.ts` (tavole) e `src/data/conversations.ts` (chat) — da sostituire
con chiamate API reali quando ci sarà un backend.

## Esportare le immagini da Figma

Il sandbox di sviluppo non ha accesso di rete ai server di Figma, quindi le foto reali (hero,
città, piatti, ecc.) non sono state scaricate automaticamente: le schermate mostrano placeholder
colorati con icona (componente `PhotoPlaceholder`).

Per aggiungere le foto vere:

1. In Figma desktop, seleziona il frame/immagine (es. la foto della cena nella schermata splash).
2. Tasto destro → **Export...** → PNG/JPG, scala 2x.
3. Salva il file in `assets/images/` con un nome descrittivo.
4. In ogni screen file, sostituisci `<PhotoPlaceholder icon="..." />` con
   `<PhotoPlaceholder source={require("../../../assets/images/NOME.jpg")} />`.

## Prossimi passi

- Testare la beta su **Expo Go** (`npm install` + `npx expo start` sul tuo Mac/PC, poi scansiona
  il QR con l'app Expo Go sul telefono).
- Esportare e collegare le immagini reali da Figma (vedi sezione sopra).
- Collegare un backend (auth, prenotazioni, chat, pagamenti in-app come da modello di
  cost-sharing descritto nel progetto).
- Configurare EAS Build per la pubblicazione su App Store.
