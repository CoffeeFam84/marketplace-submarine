

export const arrowClick = (value:any) => {
  return{
    type:'SET_ARROW',
    payload:value,
  }
}
export const FilterSet = (value:String[])  => {
  return{
    type:'SET_FILTER_LIST',
    payload:value,
  }
}
export const FilterFormat = (value:Boolean) => {
  return{
    type:'FILTER_FROMAT',
    payload:value,
  }
}