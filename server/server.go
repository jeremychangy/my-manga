package main

import (
  "net/http"
  "encoding/json"
  "fmt"
  "log"
  "github.com/gorilla/mux"
)

func main() {
  fmt.Println("Server started and running at port 29356")

  r := mux.NewRouter()
  r.HandleFunc("/{manga}", MangaHandler).Queries("chapter", "{num}")
  r.HandleFunc("/", req)
  http.Handle("/", r)
  log.Fatal(http.ListenAndServe(":29356", nil))
}

func req(w http.ResponseWriter, r *http.Request) {

  chapterPages := []string{}
  chapterPages = Scrape()

  w.Header().Set("Content-Type", "application/json")
  json.NewEncoder(w).Encode(chapterPages)
}

func MangaHandler(w http.ResponseWriter, r *http.Request) {
  vars := mux.Vars(r)
  name = vars["manga"]
  chapter = vars["num"]
  
  links = getChapter()
  pages = getChapterPages(links, chapter)
  w.Header().Set("Content-Type", "application/json")
  json.NewEncoder(w).Encode(room)
}
