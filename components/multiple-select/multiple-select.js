export class MultipleSelect extends HTMLElement{
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
          <select class="ww-200 mulInput" placeholder="${placeholder}" id="selectInput" ></select>
          <select class="ww-200 d-none" name="pets" id="mulSelect" multiple>
            ${selectList.map( item => 
              `<option id="item${item.value}" class="optionUncheck" value="${item.value}">${item.name}</option>`).join("")}
          </select>
          
        </div>
      </div>
    `;
    // #region [📌step1: 點擊input觸發select出現/消失]
    // 選到select欄位
    const selectInput = this.shadowRoot.getElementById("selectInput");
    // 選到下拉選單
    const selectItem = this.shadowRoot.getElementById("mulSelect");
    // 當點選select欄位後出現選單
    selectInput.addEventListener("focus",  isSelectOpen.bind(this,true));
    // 當失焦後選單消失
    selectItem.addEventListener("blur",  isSelectOpen.bind(this,false));
    // 觸發CSS轉換
    function isSelectOpen(status) {
      const mulSelect = this.shadowRoot.getElementById("mulSelect");
      status?mulSelect.classList.remove("d-none"):mulSelect.classList.add("d-none");
      if(status){
        selectItem.focus();
      }
    }
    // #endregion
  }
  
  
  // 接受傳來的selectList data
  set data(data){
    const selectOption = this.shadowRoot.getElementById("mulSelect");
    console.log(data);
    selectOption.innerHTML = `${data.map( item => `
      <option id="item${item.value}" class="optionUncheck" value="${item.value}"><p>${item.name}</p></option>
      `).join("")}`;

    // #region [📌step2: 在option新增未勾/勾選符號]
    for(let item of data){
      const optionItem = this.shadowRoot.getElementById(`item${item.value}`);
      optionItem.addEventListener('click', isOptionCheck.bind(this, item))
    }
    function isOptionCheck(item){
      console.log(item)
      const optionCheck = this.shadowRoot.getElementById(`item${item.value}`);
      const optionClass = optionCheck.classList;
      // 勾選/不勾選
      if(optionClass.value === 'optionUncheck'){
        optionClass.remove('optionUncheck')
        optionClass.add('optionCheck')
      }else{
        optionClass.remove('optionCheck')
        optionClass.add('optionUncheck')
      }
    }
    // #endregion
  }
}
