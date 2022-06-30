
interface stateType {
  activeState:any,
}
const initialState:stateType = {
  activeState: 0,
}
const reducer = (state = initialState , action: any ) =>{
  switch(action.type){
    case 'SET_TIMER_SELECT':
      return{
        ...state, activeState: action.payload
      }
    default:
      return state;
  }
}
export default reducer;