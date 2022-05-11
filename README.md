# React Redux

React and Redux are different libraries, react deals with the views only while redux take care of the states application is in and manipulate the whole application according to it.


# Redux

Redux basically is just a state storage container ! As component states i.e. ("this.state" in class component) stores the state of that particular component the change in that state only effect the component's state and can only be approachable inside its component but in redux it saves the state of the application which can have a wide range of variables, objects and change in redux can effect in whole application and can be approached from anywhere inside the application. 

# React-Redux

To connect both of the above libraries i.e. react and redux we use another library known as react-redux. 
Particularly its function called {connect}

container have props by state of the application as container can access the piece of state anywhere so it gets the props as

# function mapStateToProps(state){   //state will be included in this container
#    return {
#      books: state.books   //this object can be access throughout the container by "this.props.books"
#    }
# }

Container component do not export like export default class name instead at the end of the container we use {connect} function of react-redux

# xport default connect(mapStateToProps)( Container class name )


# Reducers

Reducers are the core feature behind redux.

Reducer is basically a function which returns a piece of the application state.

An application have multiple states so it'll also possess multiple reducers which'll return multiple pieces of the states.

Example state i.e. have two variables have different values 
{
    keyValue1: [{Title: "king"},{Title: "tech"},{Title: "Phone"},{Title: "cocomo"}]    // Piece of state i.e. reducer # 01
    keyValue2: [{Title: "caifiene"},{Title: "cocain"},{Title: "Ice"},{Title: "Insuline"}]   // Another Piece of state i.e. reducer # 02 

}

# Containers

Special Components in React app which have direct access to the state contains inside redux. Container act as a bridge to facilitate the state effect over front-end of the application.


# Which components of a react app are containers

So, There's no hard and fast rule for that Sometimes the most parent component act as a container sometimes only a single least child component act as a container but if we make it generic the only component which gets effected by the changes in state of the application are the containers. Like app.js component is not a container as the only act of it is to render other component irrespect of its state or changing state but on the other hand book_list.js is a container component as its getting reducer as a books and manipulating itself according to it same goes for book_details.js. They both are dependent or should say directly llinked to the state of the application and changes when the state changes. 

For easy approach we still use most parent component as container and pass the props throughout the website and manipulate the DOM. but that's a you cannot say wrong but not the right way ! Its kinda trick for easiness but for a larger application it can be insecure and less speedy! as in this case you have re render the whole DOM. Irrespect of container components or simple components.

