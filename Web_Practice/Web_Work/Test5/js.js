var equation="";
function getNumber(){
    alert(this.value);
    equation+=this.value;
    document.getElementsByTagName("label")[0].innerText=equation;
}