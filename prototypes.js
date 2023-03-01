//JS class
class Movie{
 constructor(title, director, genre, releaseYear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
 }
}

//Prototype to display rating
 Movie.prototype.review = function(){
    return ' ""' + this.title + ', a ' + this.genre + ' film directed by ' + this.director + 
    ' was released in '+ this.releaseYear + '. It received a rating of ' + this.rating + '"" ';
 }

 const Movie1 = new Movie("Avatar" , "John Lee" , "action", 2009, 4.5);
 console.log(Movie1.review());

 