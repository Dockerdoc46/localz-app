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
  components/   Button, ScreenContainer, PhotoPlaceholder, Dots, ecc.
  navigation/   Onboarding stack + 4 stack nei tab principali (Home, Chat, Host, Profile)
  screens/
    onboarding/ 6 schermate COMPLETE e fedeli al design (splash, 3 intro, login, verifica identità, città)
    discovery/  schermate scoperta tavole/mappa — placeholder, da implementare
    booking/    flusso prenotazione — placeholder, da implementare
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
- [ ] Flow Discovery/Booking (8 schermate)
- [ ] Flow Chat + Host (7 schermate)
- [ ] Flow Wallet/Settings/Profile (6 schermate)

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

- Implementare le restanti 21 schermate (Discovery, Booking, Chat, Host, Wallet, Settings) seguendo
  lo stesso pattern usato per l'onboarding (vedi `src/screens/onboarding/*`).
- Collegare un backend (auth, prenotazioni, chat, pagamenti in-app come da modello di
  cost-sharing descritto nel progetto).
- Configurare EAS Build per la pubblicazione su App Store.
