export const AddressesActionTypes = {
    ADD: "add",
    SET_CURRENT: "set_current"
}

export default function AddressReducer(state, action) {
    console.log(action)
    switch (action.type) {
        case AddressesActionTypes.ADD:
            const newArray = Array.from(state);
            newArray.push(action.payload);
            clearSelectedMarker(newArray)
            action.payload.selected = true;
            return newArray;
        case AddressesActionTypes.SET_CURRENT:
            const copiedArray = Array.from(state);
            clearSelectedMarker(copiedArray);
            action.payload.selected = true;
            return copiedArray;
        default:
            return state;
    }
}

function clearSelectedMarker(addresses) {
    addresses.forEach(a => a.selected = false);
}
