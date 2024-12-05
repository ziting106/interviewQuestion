import { MultipleSelect } from "./components/multiple-select/multiple-select.js";
customElements.define("multiple-select", MultipleSelect );

const foodList = [
  {value: '1', name: '香蕉巧克力蛋塔'},
  {value: '2', name: '芒果聖代巧克力雪霜'},
  {value: '3', name: '草莓奶油泡芙'},
  {value: '4', name: '藍莓芝士蛋糕'},
  {value: '5', name: '葡萄奶昔'},
  {value: '6', name: '抹茶紅豆冰淇淋'},
  {value: '7', name: '香草拿鐵瑪德琳'},
  {value: '8', name: '焦糖布丁'},
  {value: '9', name: '橙汁芋頭西米露'},
  {value: '10', name: '巧克力榛果塔'}
];


const selectList = document.getElementById('food');
// 將select傳給multiple-select
selectList.data = foodList;