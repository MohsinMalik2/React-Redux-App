//State in this is not an application state but the current state of the component which'll be connected with the action
export default function selectedBook(state = null, action){

        switch (action.type) {
            case "BOOK_SELECTED":
                //In the reducer we just don't have to update something like this way:
                // state.title = action.information.title;
                // But have to return a fresh object everytimme an action perform
                return action.information;
         }  
        return state;

}