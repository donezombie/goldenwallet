$(document).ready(()=>{
  document.getElementById("btn-1").addEventListener('click',(event)=>{
    event.preventDefault();
    value_income = parseInt(document.getElementById("income").value)
    value_muctieu =  parseInt(document.getElementById('muctieu').value)
    value_saubaolau =  parseInt(document.getElementById('saubaolau').value)

    console.log(value_income);
    console.log(value_muctieu);
    console.log(value_saubaolau);
    $("#notice").empty();
    if (value_income + value_muctieu + value_saubaolau < 10){
      $("#notice").append("Loi");
    }
  })



});
