async function init () {
  const node = document.querySelector("#type-text")
  
  await sleep(1000)
  node.innerText = ""
  await node.type('WXLV')
  
  while (true) {
    await node.type('_DEVELOPMENT')
    await sleep(2500)
    await node.delete('_DEVELOPMENT')
    await node.type('_CREATIVITY_BY_DESIGN')
    await sleep(2500)
    await node.delete('_CREATIVITY_BY_DESIGN')
    await node.type('_CODING')
    await sleep(2500)
    await node.delete('_CODING')
  }
}


// Source code 🚩

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    const randomMs = 200 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }
  
  async type (text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }
  
  async delete (text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init()
