export class MultipleSelect extends HTMLElement{
  // 計畫：
  // 0.變數設定
  // 1.點擊input觸發select出現 => 試著直接用select就好
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
        <div class="d-flex flex-direction-column">
          <input class="ww-200 mulInput" type="select" placeholder="${placeholder}" readonly id="selectInput">
          <select class="ww-200 d-none" name="pets" id="mulSelect" multiple>
            ${selectList.map( item => `<option value="${item.value}">${item.name}</option>`).join("")}
          </select>
        </div>
      </div>
    `;
    const selectInput = this.shadowRoot.getElementById("selectInput");
    const selectItem = this.shadowRoot.getElementById("mulSelect");
    selectInput.addEventListener("focus",  isSelectOpen.bind(this,true));
    selectItem.addEventListener("blur",  isSelectOpen.bind(this,false));
    
    function isSelectOpen(status) {
      const mulSelect = this.shadowRoot.getElementById("mulSelect");
      status?mulSelect.classList.remove("d-none"):mulSelect.classList.add("d-none");
      if(status){
        selectItem.focus();
      }
    }
  }
  
  
  // 接受傳來的selectList data
  set data(data){
    const selectOption = this.shadowRoot.querySelector("select")
    console.log(data)
    selectOption.innerHTML = `${data.map( item => `<option value="${item.value}">${item.name}</option>`).join("")}`;
  }
}
