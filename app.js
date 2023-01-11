// chapter 14 to 16;

 // Arrays //


//  Qno # 01;


// var student_name = [];
// console.log(student_name);

// Qno # 02;


// var student_name = [];
// console.log(student_name);

// Qno # 03;

// var string_arrays = ["B"];
// console.log(string_arrays);


// Qno # 04;

// var number_arrays = [525];
// console.log(number_arrays);

//Qno # 05;

// var boolean_arrays =[true,false];
// console.log(boolean_arrays);

// Qno # 06;

// let mix_arrays = ["hafeez",11,true];
// console.log(mix_arrays);


// Qno # 07;


// let quilification = ["(1).Hsc","(2).Ssc","(3).Bsc","(4).Bs","(5).Bcom","(6).Ms",
// "(7).M.phil.","(8).Phd"];

// document.write("<h2>", "Quilifications:");

// document.write("<h2>" + quilification[0]);
// document.write("<h2>" + quilification[1]);
// document.write("<h2>" + quilification[2]);
// document.write("<h2>" + quilification[3]);
// document.write("<h2>" + quilification[4]);
// document.write("<h2>" + quilification[5]);
// document.write("<h2>" + quilification[6]);
// document.write("<h2>" + quilification[7]);


// Qno # 08;

// let stu_names = ["Michel","John","Tony"];
// let score = [320.,230.,480.];

// let percentage_michel = score[0] / 500 * 100;
// let percentage_john = score[1] / 500 * 100;
// let percentage_tony = score[2] / 500 * 100;

// document.write( "<h2>", "Score of " + stu_names [0]+ " " + score[0]+".", "Percentage: "
//  + percentage_michel +"%");

//  document.write( "<h2>", "Score of " + stu_names [1]+ " " + score[1]+".", "Percentage: "
//  + percentage_john +"%");

//  document.write( "<h2>", "Score of " + stu_names [2]+ " " + score[2]+".", "Percentage: "
//  + percentage_tony +"%");


// Qno # 9;

// var color_name = ["Red","Blue","Yellow"]
// document.write(color_name)
// var you_want = prompt("what you want the add of colour");
// document.write("<br>", "I want "+you_want);
// color_name.unshift("green")
// document.write("<br>",color_name);


// var you_want_end = prompt("what you want the add of colour in the end")
// document.write("<br>", "I want " + you_want_end);

// color_name.push("black")
// document.write("<br>",color_name);

// color_name.splice(2,0,"purple","white")
// document.write("<br>",color_name);

// color_name.shift();
// document.write("<br>",color_name);

// color_name.pop();
// document.write("<br>",color_name);

// var index_add = +prompt("which index you want to add colour in array");
// document.write("<br>","I want to add index " + index_add);

// color_name.splice(3,0,"pink","brown");
// document.write("<br>",color_name);


// var index_del = +prompt("which index you want to delete colour in array");
// document.write("<br>","I want to add index " + index_del);



// Qno # 10;

// var score_of_student = [320,230,480,120]
// document.write("<h1>","Score of students " + score_of_student);
// document.write ("<h1>","Ordered of score of the student " + score_of_student[3]
// +", "+ score_of_student[1] + ", " + score_of_student[0] + ", " + score_of_student[2]);



// Qno # 11;

// document.write("<h2>","Cities lists:");
// var cities_list = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]

// document.write("<br>","<h2>" + cities_list);

// document.write("<br>","<h2>","Selected cities lists:","<br>" + cities_list[2] + ","
//  + cities_list[3]);

// Qno # 12;

// var join = ["This","is","my","cat"]
// document.write("<h1>","Arrays: ", " <br>" + join);
// document.write("<h1>","String: ", " <br>",join[0] + " " +join[1] + " " +join[2] + 
// " " +join[3]);

// Qno # 13;

// var fifo = ["Keyboard","Mouse","Printer ","Monitor"]
// document.write("<h2>","Devcies:","<br>" + fifo );
// document.write("<br>","<h2>","Out:","<br>" + fifo[0] + "<br>","Out:","<br>" + fifo[1] +
// "<br>","Out:","<br>" + fifo[2] + "<br>","Out:","<br>" + fifo[3] );

// Qno # 14;

// var fifo = ["Keyboard","Mouse","Printer ","Monitor"]
// document.write("<h2>","Devcies:","<br>" + fifo );
// document.write("<br>","<h2>","Out:","<br>" + fifo[3] + "<br>","Out:","<br>" + fifo[2] +
// "<br>","Out:","<br>" + fifo[1] + "<br>","Out:","<br>" + fifo[0] );

// Qno # 15;

var phone = ["Apple","Samsung","motorolla","Nokia","Sony","higher"]

document.write("<h1>", "Phone manufacture", "</h1>","<br>",
`<select> <option> ${phone[0]} </option> <option> ${phone[1]} </option>
<option> ${phone[2]} </option> <option> ${phone[3]} </option> 
<option> ${phone[4]} </option>
<option> ${phone[5]} </option>`);