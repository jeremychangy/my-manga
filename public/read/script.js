let url_str = window.location.href
let url = new URL(url_str)
let chapter = url.searchParams.get("c");

let container = document.getElementById('imageContainer');
let docFrag = document.createDocumentFragment();

getImg(chapter)

function getImg(c) {
  return fetch(`http:\/\/localhost:7883\/api\/read?c=${c}`)
  .then(res => {return res.json()})
  .then(i => {
    i['pages'].forEach(function(url, index, originalArray) {
        let img = document.createElement('img')
        console.log(url)
        img.src = url
        docFrag.appendChild(img)
    })
    container.appendChild(docFrag);
  })
}
