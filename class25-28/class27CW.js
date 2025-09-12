// What is local storage?
// a way to store data across browser sessions

// local storage vs session storage ?
// presists across sessions 
// while
// clears on every browser refresh

// what are the 4 main methods that local storage provide?
// get, set, remove, and clear items

class Netflix {
  constructor(title, seasons, genre, year) {
    this.title     = title;
    this.seasons  = seasons;
    this.genre    = genre;
    this.year     = year;
    
    this.play = function() {console.log(`We are watching ${this.title}!`)};
    this.save = function() {console.log(`We rated ${this.title} 5 stars!`)};
    this.stop = function() {console.log(`We just stopped ${this.title}`)};
  }
}

const show1 = new Netflix("orphan black", 6, 'thriller', 2017);
// console.log(show1);
// show1.play();
