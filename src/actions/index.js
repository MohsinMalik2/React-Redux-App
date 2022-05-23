
// Function just to confirm the Action creator is binded to the container
/*export function SelectBook(book){
    console.log(book.title);
}*/

//Action in 90% cases will be the same of the context
//Like it'll be a javascript object have "A type property" which'll be use to identify the action type which'll use in switch case
//of reducer to differentiate the returning result and "Some Information"  which'll furthur describe the event


//Actual Function

export function SelectBook(book){
// As its an action creator so it has to return the action
    return {

        //Action will definitely have a type and some information

        type: "BOOK_SELECTED",
        information: book

    };

}