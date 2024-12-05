import { MultipleSelect } from "./components/multiple-select/multiple-select.js";
customElements.define("multiple-select", MultipleSelect );

const foodList = [
  {value:'1', name:'香蕉巧克力蛋塔'},
  {value:'2', name:'芒果聖代巧克力雪霜'}
]

const selectList = document.getElementById('food');
// 將select傳給multiple-select
selectList.data = foodList;