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

func getAllPages(links []string) [][]string {
  var chapters = [][]string{}
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
    chapters = append(chapters, pages)
    pages = []string{}
    break;
  }

  return chapters
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

  if (chapter < 1 || chapter > len(links)) {
    return pages
  }

  chapter = len(links) - chapter
  c.Visit(links[chapter])

  return pages
}

func main() {
  var chapters = getChapter()
  
  //var allPages = getAllPages(chapters)
  
  fmt.Println("[")

  // for _, chapter := range chapterPage {
  //  fmt.Println(chapter)
  // }

  for i := 1; i <= len(chapters); i++ {
    fmt.Println("[")
    var chapterPage = getChapterPages(chapters, i)
    for j := 0; j < len(chapterPage); j++ {
      if (j == len(chapterPage) - 1) {
        fmt.Printf("'%s'\n", chapterPage[j])
      } else {
        fmt.Printf("'%s',\n", chapterPage[j])
      }
    }

    if (i == len(chapters)) {
      fmt.Println("]")
    } else {
      fmt.Println("],")
    }
  }

  fmt.Println("]")

  // for i := 0;  i<=5; i++ {
  //   chapterPage = getChapterPages(chapters, i)
  //   for _, page := range chapterPage {
  //     fmt.Println(page)
  //   }
  // }
}
