

interface filterState {
  value:any,
  filterList:String[],
  clearFlag:Boolean,
}
let initialfilterState:filterState = {
  value: true,
  filterList : [],
  clearFlag : false,
}
const reducer = (state = initialfilterState ,action:any) => {
  switch(action.type){
    case 'SET_ARROW':
      return{
        ...state, value: action.payload,
      }
    case 'SET_FILTER_LIST':
      {
        return{
          ...state, filterList:action.payload,
        }
      }
    case 'FILTER_FROMAT':
      return{
         ...state,clearFlag:action.payload,
      }
    default:
      return state;
  }
}
export default reducer;