// =======================================КРАСИВЫЙ ТЕКСТ========================================================

const textDisplay = document.getElementById('text')
const phrases = ['Septuaginta', 'Lucca', 'Prime Source', 'Cосисочная', 'Amarsi', 'AmanBol']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {
   isEnd = false
   textDisplay.innerHTML = currentPhrase.join('')

   if (i < phrases.length) {

      if (!isDeleting && j <= phrases[i].length) {
         currentPhrase.push(phrases[i][j])
         j++
         textDisplay.innerHTML = currentPhrase.join('')
      }

      if (isDeleting && j <= phrases[i].length) {
         currentPhrase.pop(phrases[i][j])
         j--
         textDisplay.innerHTML = currentPhrase.join('')
      }

      if (j == phrases[i].length) {
         isEnd = true
         isDeleting = true
      }

      if (isDeleting && j === 0) {
         currentPhrase = []
         isDeleting = false
         i++
         if (i === phrases.length) {
            i = 0
         }
      }
   }
   const spedUp = 50
   const normalSpeed = 70
   const time = isEnd ? 5000 : isDeleting ? spedUp : normalSpeed
   setTimeout(loop, time)
}

loop()