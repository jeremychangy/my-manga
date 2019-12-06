export const api = 'https://www.mangaeden.com/api'

export const getPages = (id) => {
    let req = `${api}/chapter/${id}`
    return fetch(req).then((res) => res.json()).then(function(data) {
        let images = data['images'].map((info) => `https://cdn.mangaeden.com/mangasimg/${info[1]}`)
        return images
    }).catch(function(err) {
        return err
    })
}

export const getChapters = (id) => {
    let req = `${api}/manga/${id}`
    return fetch(req).then((res) => res.json()).then(function(data) {
        let chapters = data['chapters'].map((info) => info[3])
        return chapters
    }).catch(function(err) {
        return err
    })
}

export const getMangas = (page) => {
    let req = `${api}/list/0/?p=${page}`
    return fetch(req).then((res) => res.json()).then(function(data) {
        return data
    }).catch(function(err) {
        return err
    })
}