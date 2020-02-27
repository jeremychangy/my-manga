const express = require('express')
const cloudscraper = require('cloudscraper')
const cheerio = require('cheerio')

const crypto = require('./crypto.js')

const m = '/Manga/Gintama'
//const m = '/Manga/Oyasumi-Punpun'
const k = 'https://kissmanga.com'
const port = 7883
const app = express()
const router = express.Router()

app.use(express.static('public'))
router.use(function(req, res, next) {
    // do logging
    // console.log("Server in use");
    next() // make sure we go to the next routes and don't stop here
})

function getChapters(html) {
  const $ = cheerio.load(html)
  let chapters = $('.listing')
    .find('a')
    .map(function(i, val) {
      let l = $(this).attr('href')
      return l
    }).get()

  return chapters
}

function getPages(html) {
  let pages = html.match(/\(wrapKA\((.*)\)/g)
  return pages.map(p => {
    let hash = p.substring(p.indexOf('"')+1, p.lastIndexOf('"'))
    return crypto(hash)
  })
}

async function handle(i) {
  let chapters = await cloudscraper.get(k+m).then(getChapters, console.error)
  let index = chapters.length - i - 1
  let page = await cloudscraper.get(k+chapters[index]).then(getPages, console.error)
  return page
}

router.route('/api/read').get(async function(req, res) {
  console.log(req.query.c)
  let c = req.query.c
  let page = await handle(c)
  console.log(`viewing chapter ${c}`)
  res.send({'pages': page})
})

app.use(router)
app.listen(port, () => console.log(`listening on port ${port}`))
