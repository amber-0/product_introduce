// 最初に全ての設問を隠す
$("#q2a").hide();
$("#q2b").hide();
$("#q3a").hide();
$("#q3b").hide();
$("#q3c").hide();
$("#q3d").hide();
$("#q4a").hide();
$("#q4b").hide();
$("#q4c").hide();

// 最初に全ての解決策を隠す
$("#q3ayes_answer").hide();
$("#q3ano_answer").hide();
$("#q4ayes_answer").hide();
$("#q4ano_answer").hide();
$("#q4b_answer").hide();





// Q1の処理(yes)
const btn_q1yes = $("#q1yes");
btn_q1yes.click(function(){
  $("#q1").hide();
  $("#q2a").show();
});

// Q1の処理(no)
const btn_q1no = $("#q1no");
btn_q1no.click(function(){
  $("#q1").hide();
  $("#q2b").show();
});

// Q2aの処理(yes)
const btn_q2ayes = $("#q2ayes");
btn_q2ayes.click(function(){
  $("#q2a").hide();
  $("#q3a").show();
});

// Q2aの処理(no)
const btn_q2ano = $("#q2ano");
btn_q2ano.click(function(){
  $("#q2a").hide();
  $("#q3b").show();
});

// Q2bの処理(yes)
const btn_q2byes = $("#q2byes");
btn_q2byes.click(function(){
  $("#q2b").hide();
  $("#q3c").show();
});

// Q2bの処理(no)
const btn_q2bno = $("#q2bno");
btn_q2bno.click(function(){
  $("#q2b").hide();
  $("#q3d").show();
});

// Q3aの処理(yes)
const btn_q3ayes = $("#q3ayes");
btn_q3ayes.click(function(){
  $("#q3a").hide();
  $("#q3ayes_answer").show();
});

// Q3aの処理(no)
const btn_q3ano = $("#q3ano");
btn_q3ano.click(function(){
  $("#q3a").hide();
  $("#q3ano_answer").show();
});

// Q3bの処理(yes)
const btn_q3byes = $("#q3byes");
btn_q3byes.click(function(){
  $("#q3b").hide();
  $("#q4a").show();
});

// Q3bの処理(no)
const btn_q3bno = $("#q3bno");
btn_q3bno.click(function(){
  $("#q3b").hide();
  $("#q4b").show();
});

// Q3cの処理(1)
const btn_q3c1 = $("#q3c1");
btn_q3c1.click(function(){
  $("#q3c").hide();
  $("").show();
});

// Q3cの処理(2)
const btn_q3c2 = $("#q3c2");
btn_q3c2.click(function(){
  $("#q3c").hide();
  $("").show();
});

// Q3cの処理(3)
const btn_q3c3 = $("#q3c3");
btn_q3c3.click(function(){
  $("#q3c").hide();
  $("").show();
});

// Q3dの処理(yes)
const btn_q3dyes = $("#q3dyes");
btn_q3dyes.click(function(){
  $("#q3d").hide();
  $("#q4c").show();
});

// Q3dの処理(no)
const btn_q3dno = $("#q3dno");
btn_q3dno.click(function(){
  $("#q3d").hide();
  $("").show();
});

// Q4aの処理(yes)
const btn_q4ayes = $("#q4ayes");
btn_q4ayes.click(function(){
  $("#q4a").hide();
  $("#q4ayes_answer").show();
});

// Q4aの処理(no)
const btn_q4ano = $("#q4ano");
btn_q4ano.click(function(){
  $("#q4a").hide();
  $("#q4ano_answer").show();
});

// Q4bの処理(1)
const btn_q4b1 = $("#q4b1");
btn_q4b1.click(function(){
  $("#q4b").hide();
  $("#q4b_answer").show();
});

// Q4bの処理(2)
const btn_q4b2 = $("#q4b2");
btn_q4b2.click(function(){
  $("#q4b").hide();
  $("#q4b_answer").show();
});

// Q4bの処理(3)
const btn_q4b3 = $("#q4b3");
btn_q4b3.click(function(){
  $("#q4b").hide();
  $("#q4b_answer").show();
});

// Q4cの処理(yes)
const btn_q4cyes = $("#q4cyes");
btn_q4cyes.click(function(){
  $("#q4c").hide();
  $("").show();
});

// Q4cの処理(no)
const btn_q4cno = $("#q4cno");
btn_q4cno.click(function(){
  $("#q4c").hide();
  $("").show();
});



