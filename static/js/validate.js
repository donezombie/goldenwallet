$(document).ready(()=>{
  Show();
  
});

const Content_Warning = (content)=>{
    let htmlInsertWarning=`<font color="red" size="3"><i class="fas fa-exclamation-triangle"></i>${content}</font>`;
    return htmlInsertWarning;
}

const Show = ()=>{
    $("#form_index").submit((e)=>{
      value_income = parseInt($("#income").val());
      value_goal = parseInt($("#goal").val());
      value_month = parseInt($("#month").val());
      value_max = parseInt($("#max").val());
      value_bank = parseFloat($("#bank").val());

      let saving = (value_goal*value_bank/12) / (Math.pow((1+value_bank/12),value_month) - 1)
      let content_warning = "";

      //Print Value Element
      console.log(value_income);
      console.log(value_goal);
      console.log(value_month);
      console.log(value_max);
      console.log(value_bank);
      console.log(saving);

      $("#show").empty();
      if (value_income < saving){
          content_warning = `Không thể đạt được mục tiêu. Hãy điều chỉnh lại mục tiêu hoặc thời gian!`;
          document.querySelector("#show").insertAdjacentHTML('afterbegin', Content_Warning(content_warning));
          console.log("Saving > Income");
          return false;
      }
      else if (value_max > value_income){
        content_warning = `Số tiền tiết kiệm mỗi tháng lớn hơn thu nhập mỗi tháng!`;
        document.querySelector("#show").insertAdjacentHTML('afterbegin', Content_Warning(content_warning));
        console.log("Max > Income");
        return false;
      }

      else if (saving <= 0){
        content_warning = `Không thể đạt được mục tiêu. Hãy điều chỉnh lại mục tiêu hoặc thời gian`;
        document.querySelector("#show").insertAdjacentHTML('afterbegin', Content_Warning(content_warning));
        console.log("Saving <= 0");
        return false;
      }
      else {
        console.log("Vao day");
        return true;
      }
      e.preventDefault();
    })
}
