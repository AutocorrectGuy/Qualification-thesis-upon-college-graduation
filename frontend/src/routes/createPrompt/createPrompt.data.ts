export const presentationTopics = [
  'Sausās būvniecības tehnoloģijas un to priekšrocības',
  'Sauso būvniecību materiālu novērtēšana un izvēle',
  'Energoefektivitāte sausajā būvniecībā',
  'Konstrukciju stiprināšana sausajā būvniecībā',
  'Sauso būvniecību risinājumi ēku atjaunošanai',
  'Drošības standarti sausās būves praksē',
  'Sausās būves sistēmu uzturēšana un remonts',
  'Sausās būvniecības projekta vadīšana',
  'Tehniskā dokumentācija sausajā būvniecībā',
  'Inovatīvas tehnikas pielietojums sausajā būvniecībā',
  'Augu audzēšanas tehnoloģijas un prakse',
  'Sēklu selekcija un kvalitātes kontrole',
  'Augu slimības un kaitēkļu kontrole',
  'Mūsdienu ūdens apgādes un apūdeņošanas sistēmas',
  'Biodaudzības veicināšana augkopībā',
  'Hidroponika: teorija un prakse',
  'Mūsdienīgas tehnikas lietojums augkopībā',
  'Organiskās augkopības principi un priekšrocības',
  'Augu mēslošana: tehnoloģijas un metodes',
  'Klimata pārmaiņu ietekme uz augkopību',
  'Spa pakalpojumu novērtēšana un personalizēšana',
  'Veselīga dzīvesveida veicināšana caur Spa terapijām',
  'Mūsdienīgas masāžas tehnikas un to pielietojums',
  'Ādas kopšanas procedūru veikšana un pielāgošana',
  'Saunas un pirts procedūru labvēlīgā ietekme uz veselību',
  'Aromterapija spa procedūrās',
  'Klientu apkalpošana un attiecību veidošana Spa centrā',
  'Spa biznesa plānošana un pārvaldīšana',
  'Ūdens terapija un tās veselības ieguvumi',
  'Spa produktu izvēle un pielietojums',
  'Dabas resursu integrēšana ainavu dizainā',
  'Ainavu dizaina elementu izvēle un kombinēšana',
  'Ainavu uzturēšanas tehnoloģijas un metodes',
  'Vides ilgtspējība ainavu dizainā',
  'Piemērotu augu izvēle ainavu dizainam',
  'Mūsdienu ainavu būvniecības materiālu pārskats',
  'Ūdens elementu iekļaušana ainavu dizainā',
  'Publisko vietu ainavu plānošana un izveide',
  'Ainavu izveides projektēšana un realizēšana',
  'Ainavu dizaina novērtēšana un uzlabošana',
  'Viesmīlības nozares tendences un nākotnes perspektīvas',
  'Klientu apkalpošanas kvalitātes uzlabošana',
  'Ēdināšanas pakalpojumu organizēšana un vadīšana',
  'Starptautiskās viesmīlības standartu izpratne',
  'Tūrismu un viesmīlību attīstība pēc Covid-19',
  'Digitālā tehnoloģija viesmīlības nozarē',
  'Viesmīlības nozares vadība un uzņēmējdarbība',
  'Viesmīlības mārketinga stratēģijas un rīki',
  'Sustainable hospitality: trends and practices',
  'Pārtikas un dzērienu serviss: tehnoloģijas un prakse',
  'Apdares materiālu izvēle un pielietojums',
  'Drošības principi apdares darbos',
  'Mūsdienu apdares tehnoloģiju pārskats',
  'Vidēji draudzīgu apdares materiālu izvēle',
  'Krāsas un to pielietojums apdares darbos',
  'Apmācība un prasmes apdares darbu veikšanai',
  'Ēkas apdares projekta izstrāde un plānošana',
  'Apdares darbi āra un iekštelpās',
  'Izolācijas materiālu izvēle apdares darbos',
  'Inovatīvu tehnoloģiju ieviešana apdares darbos',
]


export const gptPromptText = /* md */ `## Uzģenerētais prompts:
Lūdzu, chatGPT, izveidojiet prezentācijas tekstu ar __[slaidu skaits]__ slaidiem par tēmu __[prezentācijas tēma]__, izmantojot šādu Markdown koda bloka formātu. Visu raksti vienā koda blokā. Turpmākajā koda blokā aizstājiet "Slaida nosaukums" ar vēlamo saturu, un slaida aprakstiem iekļaujiet informāciju, kas nav "Slaida apraksts". Pievienojiet apakšpunktus slaida aprakstam ja tas ir nepieciešams, taču centies apakšpunktus likt >50% no slaidiem. Pievienojiet slaida numuru slaida virsrakstā. Neiekļauj simbolus "\`\`\`". 
__[prezentācijas detaļas]__
Lūdzu, atbildiet šādā formātā:
\`\`\`
[h1]:1. Slaida nosaukums
[p]:Apraksts bez teksta "Slaida apraksts"
  - apakšpunkts(i), ja nepieciešams
[h1]:2. Slaida nosaukums
[p]:Apraksts bez teksta "Slaida apraksts"
  - apakšpunkts(i), ja nepieciešams
\`\`\`

Nodrošiniet, ka Jūsu atbilde sākas ar kodola bloku atzīmi "\\\`\`\`" un beidzas ar kodola bloka atzīmi "\\\`\`\`", pārliecinoties, ka visi slaidi ir iekļauti Markdown formātā ar [h1] un [p] atzīmēm. [h1] apzīmē slaida nosaukumu, bet [p] apzīmē tekstu slaidā. Katrā slaidā obligāti jābū tieši vienam [h1] un [p]!! Atcerieties, ka ne visiem slaidiem ir jābūt ar apakšpunktiem, pievienojiet tos tikai tur, kur tas ir nepieciešams.
`