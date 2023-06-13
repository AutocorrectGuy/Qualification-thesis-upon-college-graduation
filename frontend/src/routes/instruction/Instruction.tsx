import Markdown from '../../components/markdown/Markdown'


const textContent = `# Instrukcija

Lūdzu, seko šiem soliem, lai veiksmīgi prezentāciju.

## 1. solis: Sākt ģenerēt tekstu

- Kliķšķini uz "Uzģenerē tekstu" kreisajā navigācijas joslā vai "sākt ģenerēt!" no sākumlapas.

## 2. solis: Veikt iestatījumus prezentācijai

- Izvēlies vai ievadi prezentācijas nosaukumu.
- Norādi slaidu daudzumu.
- Ievadi prezentācijas detaļas, ja tādas ir nepieciešamas.

## 3. solis: Kopēt ChatGPT promptu

- Kad viss ir gatavs, pa labi no "ChatGPT prompta izveid" uzklikšķini uz kopēšanas ikonas.

## 4. solis: Ielīmēt promptu ChatGPT mājaslapā

- Ej uz "ChatGPT" oficiālo mājaslapu.
- Ielīmē nokopēto promptu.

## 5. solis: Pagaidīt prezentācijas teksta ģenerēšanu

- Pagaidi, kāmēr uzģenerējas prezentācijas teksts.

## 6. solis: Izveidot PPTX failu

- Kad prezentācijas teksts ir uzģenerējies, noklikšķini kreisajā navigācijas joslā uz "Izveido PPTX failu".
- Ielīmē nokopēto ChatGPT tekstu.
- Spied "Izveidot prezentāciju".

Pēc šiem soļiem jūsu prezentācija būs gatava!
`

const Instruction = () => {
  return (
    <div className='flex flex-col'>
      <Markdown textContent={textContent} />
    </div>
  )
}

export default Instruction