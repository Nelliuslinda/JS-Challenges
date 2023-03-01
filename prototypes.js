//JS class
class Movie{
 constructor(title, director, genre, releaseYear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
 }

    getOverview(){
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It recieved a rating of ${this.rating}`;
    }
}

/*Alternative Solution -> when creating the movie object using a function

function Movie(title, director, genre, releaseYear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}
 Movie.prototype.getOverview = function(){
    return ' ""' + this.title + ', a ' + this.genre + ' film directed by ' + this.director + 
    ' was released in '+ this.releaseYear + '. It received a rating of ' + this.rating + '"" ';
 }

*/ 


 const Movie1 = new Movie("Avatar" , "John Lee" , "action", 2009, 4.5);
 console.log(Movie1.getOverview());


