//Library - getting the number of books sold in a store. Practice on JS classes

//JS Class
class Book {
    constructor(title,author, isbn, numCopies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.numCopies = numCopies;
    }
    // Getter method to check for availability
    get availability() {
      if(this.numCopies == 0){
        return "Out of stock";
      }else if(this.numCopies < 10){
        return "Low stock";
      }else{
        return "In stock";
      }
    }

    //function to get copies sold
    sell(numSold = 1){
        return this.numCopies - numSold;
    }

    //function to get copies restocked
    restock(numCopies = 5){
        return numCopies + this.numCopies;
    }
  }
  
  const Book1 = new Book("Tupende","Mark",267805,10);

  
  console.log(Book1.availability); 
  console.log(Book1.sell(6));
  console.log(Book1.restock(10));


  