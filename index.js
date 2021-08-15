const hmpgtnmn5 = document.querySelector('#hmpg-tnmn-5')
const hmpgtnmn1 = document.querySelector('#hmpg-tnmn-1')
const hmpgtnmn3 = document.querySelector('#hmpg-tnmn-3')
const hmpgtnmn7 = document.querySelector('#hmpg-tnmn-7')

const winVShmpgtnmn5Height = hmpgtnmn5.height / window.innerHeight
const winVShmpgtnmn5Width = hmpgtnmn5.width / window.innerWidth
const winVShmpgtnmn1Height = hmpgtnmn1.height / window.innerHeight
const winVShmpgtnmn1Width = hmpgtnmn1.width / window.innerWidth
const winVShmpgtnmn3Height = hmpgtnmn3.height / window.innerHeight
const winVShmpgtnmn3Width = hmpgtnmn3.width / window.innerWidth
const winVShmpgtnmn7Height = hmpgtnmn7.height / window.innerHeight
const winVShmpgtnmn7Width = hmpgtnmn7.width / window.innerWidth

function placeImages () {
  const hmpgtnmn5AR = hmpgtnmn5.width / hmpgtnmn5.height
  const hmpgtnmn1AR = hmpgtnmn1.width / hmpgtnmn1.height
  const hmpgtnmn3AR = hmpgtnmn3.width / hmpgtnmn3.height
  const hmpgtnmn7AR = hmpgtnmn7.width / hmpgtnmn7.height
  const winAR = innerWidth / innerHeight
  hmpgtnmn5.style.zIndex = 1
  hmpgtnmn1.style.zIndex = 2
  hmpgtnmn3.style.zIndex = 3
  if (innerWidth > innerHeight) { // landscape format
    hmpgtnmn5.style.width = winVShmpgtnmn5Width * innerHeight + 'px'
    hmpgtnmn5.style.height = winVShmpgtnmn5Height * innerHeight + 'px'
    hmpgtnmn1.style.width = winVShmpgtnmn1Width * innerHeight+ 'px'
    hmpgtnmn1.style.height = winVShmpgtnmn1Height * innerHeight + 'px'
    hmpgtnmn3.style.width = winVShmpgtnmn3Width * innerHeight + 'px'
    hmpgtnmn3.style.height = winVShmpgtnmn3Height * innerHeight + 'px'
    hmpgtnmn7.style.width = winVShmpgtnmn3Width * innerHeight + 'px'
    hmpgtnmn7.style.height = winVShmpgtnmn3Height * innerHeight + 'px'

    hmpgtnmn5.style.top = '15vh'
    hmpgtnmn5.style.left = innerWidth * 0.865 + 'px'
    hmpgtnmn1.style.top = '15vh'
    hmpgtnmn1.style.left = innerWidth * 0.646 + 'px'
    hmpgtnmn5.style.top = '69vh'
    hmpgtnmn5.style.left = innerWidth * 0.287 + 'px'
    hmpgtnmn7.style.top = '104vh'
    hmpgtnmn7.style.left = innerWidth * 0.287 + 'px'

  } else { // portrait format
    hmpgtnmn5.style.width = winVShmpgtnmn5Width * innerWidth + 'px'
    hmpgtnmn5.style.height = winVShmpgtnmn5Height * innerWidth + 'px'
    hmpgtnmn1.style.width = winVShmpgtnmn1Width * innerWidth + 'px'
    hmpgtnmn1.style.height = winVShmpgtnmn1Height * innerWidth + 'px'
    hmpgtnmn3.style.width = winVShmpgtnmn3Width * innerWidth + 'px'
    hmpgtnmn3.style.height = winVShmpgtnmn3Height * innerWidth + 'px'
    hmpgtnmn7.style.width = winVShmpgtnmn3Width * innerWidth + 'px'
    hmpgtnmn7.style.height = winVShmpgtnmn3Height * innerWidth + 'px'

    hmpgtnmn5.style.top = (innerHeight / 2) - (bg.height / 2) + (bg.height * 0.565) + 'px'
    hmpgtnmn5.style.left = '86.5vw'
    hmpgtnmn1.style.top = (innerHeight / 2) - (bg.height / 2) + (bg.height * 0.735) + 'px'
    hmpgtnmn1.style.left = '64.6vw'
    hmpgtnmn3.style.top = (innerHeight / 2) - (bg.height / 2) + (bg.height * 0.515) + 'px'
    hmpgtnmn3.style.left = '28.7vw'
    hmpgtnmn7.style.top = (innerHeight / 2) - (bg.height / 2) + (bg.height * 0.515) + 'px'
    hmpgtnmn7.style.left = '28.7vw'
  }
}

window.addEventListener('resize', placeImages)
