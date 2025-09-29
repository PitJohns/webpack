class Post {
    constructor(title) {
    this.title = title 
    this.date = new Date() 
    }

    toString() {
        return JSON.stringify({
            tittle: this.title,
            date: this.date.toJSON()
        })
    }
}