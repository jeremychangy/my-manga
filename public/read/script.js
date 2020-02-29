let url_str = window.location.href
let url = new URL(url_str)
let chapter = url.searchParams.get("c")

let container = document.getElementById('imageContainer')
let docFrag = document.createDocumentFragment()

getImg(chapter)

function getImg(c) {
  return fetch(`http:\/\/localhost:7883\/api\/read?c=${c}`)
  .then(res => {return res.json()})
  .then(i => {
    i['pages'].forEach(function(data, index, originalArray) {
        let img = document.createElement('img')
        img.src = data
        docFrag.appendChild(img)
    })
    container.appendChild(docFrag);
  })
}

let nextChapter = document.getElementById('nextChapter')
window.addEventListener('scroll', function() {
  if (document.documentElement.clientHeight - window.pageYOffset == document.body.clientHeight) {
//    window.location.replace(`http:\/\/localhost:7883\/read?c=${parseInt(chapter)+1}`)
    chapter = parseInt(chapter) + 1
    getImg(chapter)
  }
})
