const initialState = [
    {
        id: 0,
        name: "Rita London", 
        phone: 9045687498,
        email: "rita@gmail.com"
    },
    {
        id: 1,
        name: "Gift Onew",
        phone: 9045682314,
        email: "onew@gmail.com"
    },
]


const contactReducer  = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;

        case "UPDATE_CONTACT":
            const UpdateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = UpdateState;
            return state;

        case "DELETE_CONTACT":
            const filterContacts = state.filter(
                (contact) => contact.id !== action.payload);
            state = filterContacts;
            return state;
            
        default: return state;
    }
}

export default contactReducer;