export class MultipleSelect extends HTMLElement{
  // 計畫：
  // 0.變數設定
  // 1.點擊input觸發select出現
  // 2.在option新增勾選符號
  // 3.點擊選項觸發"勾選"、"Ctrl"、"更新input value"
  // 4.onBlur後隱藏select
  constructor(){
    super();
    // 變數定義
    const selectList = this.getAttribute("selectList") || [{ value:'', name:'--查無資料--'}];
    const placeholder = this.getAttribute("placeholder") || '請選擇';
    const label = this.getAttribute("label") || '欄位標題';

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/components/multiple-select/multiple-select.css">
      <div class="d-flex">
        <label for="mulSelect" class="noWrap">${label}：</label>
        <div>
          <input class="w-100 mulInput" type="select" placeholder="${placeholder}" readonly>
          <select class="w-100 mulSelect" name="pets" id="mulSelect" multiple>
            ${selectList.map( item => `<option value="${item.value}">${item.name}</option>`).join("")}
          </select>
        </div>
      </div>
    `;
  }
  // 接受傳來的selectList data
  set data(data){
    const selectOption = this.shadowRoot.querySelector("select")
    console.log(data)
    selectOption.innerHTML = `${data.map( item => `<option value="${item.value}">${item.name}</option>`).join("")}`;
  }
}
