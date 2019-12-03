package main

import (
  "fmt"
  "strings"
  "github.com/gocolly/colly"
)

func getChapter() []string {
  var links = []string{}
  c := colly.NewCollector()

  c.OnHTML("div.chapter-list span a[href]", func(e *colly.HTMLElement) {
    var link = e.Attr("href")
    if (strings.Contains(link, "chapter")) {
      links = append(links, link)
    }
  })

  c.Visit(url)

  return links
}

func getAllPages(links []string) []string {
  var pages = []string{}
  c := colly.NewCollector()

  c.OnHTML("div img[src]", func(e *colly.HTMLElement) {
    var page = e.Attr("src")
    if (strings.Contains(page, "chapter")) {
      pages = append(pages, page)
    }
  })

  for _, link := range links {
    c.Visit(link)
  }

  return pages
}

func getChapterPages(links []string, chapter int) []string {
  var pages = []string{}
  c := colly.NewCollector()

  c.OnHTML("div img[src]", func(e *colly.HTMLElement) {
    var page = e.Attr("src")
    if (strings.Contains(page, "chapter")) {
      pages = append(pages, page)
    }
  })

  if (chapter <= 1 || chapter > len(links)) {
    return pages
  }

  chapter = len(links) - chapter
  c.Visit(links[chapter])

  return pages
}

func main() {
  var chapters = getChapter()
  var chapterPage = getChapterPages(chapters, 2)
  //var allPages = getAllPages(links)

  for _, page := range chapterPage {
    fmt.Println(page)
  }
}
