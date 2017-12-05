import * as lodash from 'https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js'

const MAX_ITEMS = 36

const barcodeOpts = {
  displayValue: false,
  background: 'transparent',
  width: 2,
  height: 80,
  margin: 0,
}

render()

async function render() {
  const itemsList = document.querySelector('#items')
  const itemTemplate = document.querySelector('#item-template')

  const data = await getItemData()

  itemsList.innerHTML = ''
  itemsList.append(...data.map((v, i) => {
    const t = document.importNode(itemTemplate.content, true)
    const nameElem = t.querySelector('.name .text')
    const valueElem = t.querySelector('.value .text')
    const numElem = t.querySelector('.item-number')
    const iconElem = t.querySelector('.icon')
    const renderElem = t.querySelector('.barcode-render')
    nameElem.textContent = v.name
    valueElem.textContent = v.value
    numElem.textContent = i + 1
    iconElem.src = v.icon
    JsBarcode(renderElem, v.value, barcodeOpts)
    return t
  }))
}

async function getItemData(file = 'data.yaml') {
  const resp = await fetch(file)
  const text = await resp.text()
  let data = jsyaml.load(text)
  data = data.filter(v => !v.exclude)
  data = data.slice(0, MAX_ITEMS)
  return data
}