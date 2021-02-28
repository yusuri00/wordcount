(function(){
'use strict';

var comment = document.getElementById('comment');
document.getElementById('label');
var button = document.getElementById("button");
var resulttxt = document.getElementById('resulttxt');
var NUM = 0;
var textForm;
var goal;

function input () {
  textForm = document.getElementById("textForm").value;
  goal = parseInt(textForm, 10);
 resulttxt.innerHTML = `目標文字数は${goal}です`;

   return {goal: goal};
}

function output () {
  var inp = input();
  var over = NUM - inp.goal;
  var shortage = inp.goal - NUM;

   if(NUM > inp.goal ){
   resulttxt.innerHTML = `${over}字超えています`;
 }else if(NUM < inp.goal){
   resulttxt.innerHTML = `${shortage}字足りないです`;
 }else if(NUM === inp.goal){
   resulttxt.innerHTML = '文字数ぴったりです！';
 }else{
   resulttxt.innerHTML = '文字を入力してください'
 }
}


button.addEventListener("click", function(e) {
    e.preventDefault();
    // 2つの入力フォームの値を取得
    input ();

});

label.innerHTML = NUM;
comment.addEventListener('input',function(){
  NUM = this.value.length;
  label.innerHTML = NUM;

  output();


});

comment.addEventListener('click', function() {
  this.select();
});

reset.addEventListener('click', function() {
  comment.value = '';
  label.innerHTML = 0;
});

})();
