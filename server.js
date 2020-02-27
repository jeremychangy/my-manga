const express = require('express')
const cloudscraper = require('cloudscraper')
const cheerio = require('cheerio')

const m = '/Manga/Gintama'
//const m = '/Manga/Oyasumi-Punpun'
const k = 'https://kissmanga.com'
const port = 7883
const app = express()

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
  return pages
}

async function handle(i) {
  let chapters = await cloudscraper.get(k+m).then(getChapters, console.error)
  let page = await cloudscraper.get(k+chapters[i]).then(getPages, console.error)
  return page
}

app.get('/:chapter', async function(req, res) {
  let c = req.params.chapter
  let page = await handle(c)
  console.log(`viewing chapter ${c}`)
  res.send(page)
})

app.listen(port, () => console.log(`listening on port ${port}`))
