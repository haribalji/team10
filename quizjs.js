// const s=document.getElementById('main');
// s.style.display="none";
// subbutton=document.getElementById("btn");
// function sub(){
    //  console.log("haro");
    //  const w=document.getElementById('m2');
    //     w.style.display="none";
    // //  const s=document.getElementById('main');
    //     s.style.display="block";
         
// }
// var type=new Typed("#auto-type",{
//     strings:["A Student" ," And   Front-End Developer","Youtuber"],
//     typeSpeed:100,
//     backSpeed:150,
//     loop:true
// });


// var f=document.querySelector(".su");
//  var mail=document.querySelector(".mail");
//  var nama=document.getElementById("name");
//  var n;
//  var myvalue;
//  function a(){
//     n=nama.value;
//     myvalue=mail.value;
//     console.log("ok hari");
//     // console.log(e);
// }
var thought=["The future belongs to those who believe in the beauty of their dreams.","The only way to do great work is to love what you do.","The harder you work for something, the greater you'll feel when you achieve it.","Success doesn't just find you. You have to go out and get it.","Don't watch the clock; do what it does. Keep going.","Every setback is a setup for a comeback. Keep pushing forward, because your breakthrough may be just around the corner."
    ,"Great things never come from comfort zones.","Push yourself, because no one else is going to do it for you.","If you don't sacrifice for what you want, what you want becomes the sacrifice "]


var namee=["Aravind","Hari Balaji","Gowtham","Anbu Priya","Mohana"]
const params = new URLSearchParams(window.location.search);
    const value = params.get('value');
    console.log(value); 
// console.log(myvalue);
// choosing the question
const questionelement=document. getElementById("question");
//choosing the answer div
const answerbutton=document.getElementById("answer");

const nextmove=document.getElementById("Next");
// $("#question").text("hari"); cdn link required
// nextmove.style.display="none";
if (nextmove) {
    // Element found, perform operations on it
    nextmove.style.display = "none";
} else {
    // Element not found, log an error or handle the absence of the element
    console.error("Element with ID 'Next' not found in the DOM.");
}

let currentquestionindex=0;
let score=0;


var v=0;
Array.from(answer.children).forEach(button =>{
    button.dataset.correct=v++;
    // it will store the value in terms of string
    // parseInt() use this function to covert into integer
   button.addEventListener("click",callit);
   console.log(button.innerHTML);
  

});
var questioner;
var x;
var intialbutton;
function callit(e){
    //  alert(thought.length);

    intialbutton=e.target;
            //   console.log(intialbutton.dataset.correct);
            //  questioner
              switch(intialbutton.dataset.correct){
                case '0':
                    x=0;
                    questioner=0;
                     console.log(intialbutton.innerHTML);
                     document.getElementById('start').click();
                     startquestion(0);
                      break;
                case '1':
                    x=1;
                    questioner=1;

                    document.getElementById('start').click();

                    startquestion(1);
                    break;

                case '2':
                    x=2;
                    questioner=2;

                    document.getElementById('start').click();

                    startquestion(2);
                    break;
                case '3':
                        x=3;
                        questioner=3;

                        document.getElementById('start').click();
    
                        startquestion(3);
                        break; 
                case '4':
                            x=4;
                            questioner=4;

                            document.getElementById('start').click();
        
                            startquestion(4);
                            break; 

              }
}

const questions=[[{
    question:"Which of the following storage classes is used to declare variables that can retain their value between function calls?",
    answer:[{text:"auto",correct: false},
    {text:"register",correct: false},
    {text:"static",correct: true},
    {text:"extern",correct: false}
     ]

},{
    question:"Which of the following operators has the highest precedence in C?",
    answer:[{text:"&&",correct: false},
    {text:"||",correct: false},
    {text:"&",correct: true},
    {text:"==",correct: false}
     ]

},{
    question:"Which function is used to move the file pointer to a specific position in a file ?",
    answer:[{text:"fseek()",correct: true},
    {text:"ftell()",correct: false},
    {text:"rewind()",correct: false},
    {text:"fgetpos()",correct: false}
     ]

}
,
{
    question:` what will be output ?<br>
    int main() {
    int x = 5, y = 6;<br>
    printf("%d\n", x < y ? x++ : y++);<br>
    printf("%d %d\n", x, y);return 0;
}`,
    answer:[{text:"5 5 6",correct: false},
    {text:"6 6 6",correct: false},
    {text:" 5 6 6",correct: false},
    {text:" 5 6 7",correct: true}
     ]

},
{
    question:"Which of the following is not a valid storage class in C ?",
    answer:[{text:"auto",correct: false},
    {text:"register",correct: false},
    {text:"mutable",correct: true},
    {text:"extern",correct: false}
     ]

}
],[{
    question:` Which of the following is the correct way to declare an integer variable in C++?<br>`,
    answer:[{text:"int number;",correct: false},
    {text:" int number = 10;",correct: false},
    {text:"int number, value;",correct: false},
    {text:"All of the above",correct: true}
     ]

},{
    question:"Which data type is used to create a variable that should store text?",
    answer:[{text:" int",correct: false},
    {text:" char",correct: false},
    {text:"string",correct: true},
    {text:"float",correct: false}
     ]

},{
    question:"Which keyword is used to define a macro in C++ ?",
    answer:[{text:"define",correct: false},
    {text:"#define",correct: true},
    {text:"macro",correct: false},
    {text:"#macro",correct: false}
     ]

}
,
{
    question:"Which operator is used to access members of a structure through a pointer ?",
    answer:[{text:".",correct: false},
    {text:"->",correct: true},
    {text:"&",correct: false},
    {text:"*",correct: false}
     ]

},
{
    question:"Which of the following is the correct way to allocate memory for an array in C++ ?",
    answer:[{text:"int* arr = new int[10];",correct: true},
    {text:" int arr = new int[10];",correct: false},
    {text:"int arr[10] = new int;",correct: false},
    {text:"int* arr = new int;",correct: false}
     ]

}],[{
    question:"What is the default value of a boolean variable in Java ?",
    answer:[{text:"true",correct: false},
    {text:" false",correct: true},
    {text:"0",correct: false},
    {text:"null",correct: false}
     ]

},{
    question:`What does the following code print?<br>int a = 5;
int b = 10;<br>
System.out.println(a > b ? a : b);`,
    answer:[{text:"5",correct: false},
    {text:" 10",correct: true},
    {text:"true",correct: false},
    {text:"false",correct: false}
     ]

},{
    question:`What is the output of System.out.println(10 + 20 + "30" + 40)?`,
    answer:[{text:"10203040",correct: false},
    {text:"303040",correct: true},
    {text:"3040",correct: false},
    {text:"302040",correct: false}
     ]

}
,
{
    question:"Which method is used to start a thread execution in Java?",
    answer:[{text:"run()",correct: false},
    {text:"start()",correct: true},
    {text:"execute()",correct: false},
    {text:"begin()",correct: false}
     ]

},
{
    question:`Java code snippet print?<br>
    System.out.println("hello" == new String("hello") ? "Equal" : "Not equal");
`,
    answer:[{text:"Equal",correct: false},
    {text:"Not equal",correct: true},
    {text:"error",correct: false},
    {text:"NaN",correct: false}
     ]

}],[{
    question:"Python is a:",
    answer:[{text:"Low-level language",correct: false},
    {text:"High-level language",correct: true},
    {text:"Middle-level language",correct: false},
    {text:"Machine-level language",correct: false}
     ]

},{
    question:"Which of the following is a mutable data type in Python",
    answer:[{text:"String",correct: false},
    {text:"Tuple",correct: false},
    {text:"List",correct: true},
    {text:"Integer",correct: false}
     ]

},{
    question:`What will be the output of the following Python code snippet<br>for i in [1, 2, 3, 4][::-1]:<br>print(i, end=' ')` ,
    answer:[{text:" 4 3 2 1",correct: true},
    {text:"error",correct: false},
    {text:"1 2 3 4",correct: false},
    {text:"none of the mentioned",correct: false}
     ]

}
,
{
    question:`Which of the following will correctly create a list of integers from 1 to 5?<br>
`,
    answer:[{text:"list1 = [1, 2, 3, 4, 5]",correct: false},
    {text:"list1 = list(range(1, 6))",correct: true},
    {text:"list1 = list(range(5))",correct: false},
    {text:"list1 = [1, 2, 3, 4, 5, 6]",correct: false}
     ]

},
{
    question:"The module Pickle is used to ___.",
    answer:[{text:"Serializing Python object structure",correct: false},
    {text:"De-serializing Python object structure",correct: false},
    {text:" Both A and B",correct: true},
    {text:"None of the mentioned above",correct: false}
     ]

}],[{
    question:"If the height of a pole is 2√3 metres and the length of its shadow is 2 metres, find the angle of elevation of the sun.",
    answer:[{text:"60°",correct: true},
    {text:"120°",correct: false},
    {text:"45°",correct: false},
    {text:"20°",correct: false}
     ]

},{
    question:`Find out wrong number in the sequence <br>6, 13, 18, 25, 30, 37, 40?`,
    answer:[{text:"25",correct: false},
    {text:"30",correct: false},
    {text:"37",correct: false},
    {text:"40",correct: true}
     ]

},{
    question:"The angle of elevation of the sun, when the length of the shadow of a tree is √3 times the height of the tree",
    answer:[{text:"30°",correct: true},
    {text:"45°",correct: false},
    {text:"60°",correct: false},
    {text:"90°",correct: false}
     ]

}
,
{
    question:"A 80 m long ladder is leaning on a wall. If the ladder makes an angle of 45 degrees with the ground, find the distance of the ladder from the wall.",
    answer:[{text:"40√2m",correct: true},
    {text:"40m",correct: false},
    {text:"40.6m",correct: false},
    {text:"34m",correct: false}
     ]

},
{
    question:`Find out wrong number in the sequence <br>
4, 6, 8, 9, 10,11,12.
`,
    answer:[{text:"10",correct: false},
    {text:"11",correct: true},
    {text:"12",correct: false},
    {text:"9",correct: false}
     ]

}]];


//  displaying the intial stage
function startquestion(in1){
    currentquestionindex=0;
    // nextmove.style.display="none";
    
          score=0;
          nextmove.innerHTML="Next";
        //   var n=Math.random();
        //   n=n*4;
        //   n=Math.floor(n);
        //   currentquestionindex=n;
          showquestion(in1,currentquestionindex);

}

function showquestion(in1,question_no){
    let question=questions[Number(in1)][question_no];
    // it will give one object that will be considered as question
    let no=question_no+1;
    // it is for generating the question no
    questionelement.innerHTML=no+". "+ question.question;

    reset();
    //this reseting to process the entire the  previous value

    // now add the each button element in the answer div as option
    for(var i=0;i<question.answer.length;i++){
        const button=document.createElement("button");
        button.innerHTML=question.answer[i].text;
        button.classList.add("option");
        answer.appendChild(button);
        if(question.answer[i].correct){
            // now we are adding the attribute to the element 
            button.dataset.correct=question.answer[i].correct;
            //now created the attribute called correct
        }
          button.addEventListener("click",selectanswer);
    }



}
// startquestion();
//reseting
function reset(){
    //   nextmove.style.display="none";
    while(answer.firstChild){
        answer.removeChild(answer.firstChild);
    }
}

function selectanswer(e){
                    // var.target;
                    // console.log(e);
                    const selectedbutton=e.target;
                    //here it will give the selected button detail

                    const corrects=selectedbutton.dataset.correct==='true';
                    if(corrects){
                        // when the answer is correct it will  increase the point
                        score++;
                         var audio=new Audio("./green copy.mp3");
                                     audio.play();
                         selectedbutton.classList.add("correctcolor");

                    }
                    else{
                        var audio=new Audio("./wrong.mp3");
                        audio.play();
                        selectedbutton.classList.add("incorrectcolor");
                        if(currentquestionindex===questions[0].length-1) {
                            document.getElementById('stop').click();

                       }
                       
                    }
                        Array.from(answer.children).forEach(button =>{
                            if(button.dataset.correct==="true"){
                               
                                    button.classList.add("correctcolor");
                                   if(currentquestionindex===questions[0].length-1) {
                                        document.getElementById('stop').click();

                                   }
                              
                            }
                            // now we need to disable other buttons also
                            button.disabled=true;

                        });
                                          
                          answer.appendChild(nextmove); 
                        nextmove.style.display="block";
                        nextmove.addEventListener('click',nextquestion);
                        

}
var name1;
// var type=new Typed(".auto-type",{
//     strings:["A Student" ," And   Front-End Developer","Youtuber"],
//     typeSpeed:100,
//     backSpeed:150,
//     loop:true
// });
function details(){
    // document.getElementById('stop').click();

    questionelement.innerHTML="Enter Your Details";
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");

    // Optionally, set attributes for the input element
    input1.type = "text";
    input1.placeholder = "Enter your name";
    input2.placeholder = "Enter your Dept-name eg:cse";

    // Get the container where you want to add the input element
    // var container = document.getElementById("inputContainer");
    
    // Append the input element to the container
    input1.classList.add("detail")
    input2.classList.add("detail")

    answer.appendChild(input1);
    answer.appendChild(input2);

    var buttonElement22 = document.createElement("button");
    buttonElement22.innerText = "submit";
    buttonElement22.classList.add("quit");
    answer.appendChild(buttonElement22);
    buttonElement22.addEventListener('click',function(){
                 var t=input1.value;
                 var t2=input2.value;
                 name1=t;
                 if(t=="" && t2==""){
                    alert("enter your name and dept-name");
                    
                 }
                 else if(t!="" && t2==""){
                    alert("enter your  dept-name");

                 }
                 else if(t=="" && t2!=""){
                    alert("enter your name");

                 }
                 else{
                    

        
                    
                     reset();
                    showscore();
                 }
    });

}

// }
function showscore(){
    // questionelement.classList.add(".font");
    questionelement.innerHTML=`your score is ${score} out of ${questions[0].length}`;
    const h2button2=document.createElement("h2");
    const h2button3=document.createElement("h2");

    const h2button=document.createElement("h2");
    var n=Math.random();
    n=n*9;
    n=Math.floor(n);
    h2button.innerHTML=`Hey <br> ${name1}, <br> ${thought[n]}​
    `



    h2button.classList.add("qto")
    const pabutton=document.createElement("p");
    pabutton.classList.add(".element");
    var divElement = document.createElement("div");
    // var buttonElement1 = document.createElement("button");
    
    var buttonElement2 = document.createElement("button");
    buttonElement2.innerText = "quit";
    divElement.classList.add("end");
     nextmove.classList.add("quit");
     buttonElement2.classList.add("quit");



  
     
     // Create a new button element
     var button3 = document.createElement("button");
     button3.textContent = "Download";
     
     // Append the button to the anchor element
    //  anchor.appendChild(button3);
    

    //  console.log(anchor);
     button3.classList.add("quit");
     button3.addEventListener("click", write);
  
     
    






    divElement.appendChild(nextmove);
    divElement.appendChild(button3);
    divElement.appendChild(buttonElement2);


    answer.appendChild(h2button);

    // answer.appendChild(pabutton);
//    document.getElementById("homeh14");
nextmove.style.display="block";
nextmove.innerHTML="Play again";
 buttonElement2.addEventListener('click',function(){
    // Reload the page when the button is clicked
    window.location.reload();

});
   answer.appendChild(divElement); 


}
// nextmove.addEventListener('click',nextquestion);
function nextquestion(){
    currentquestionindex++;
    if(currentquestionindex===questions[0].length-1){

        nextmove.innerHTML="Score";
    }
    if(currentquestionindex<questions[0].length){
        
           showquestion(x,currentquestionindex);
    }
    else if(currentquestionindex===questions[0].length){
        // alert(score+"/"+4);
        // document.getElementById('stop').click();

             reset();
             details();
        // showscore();
     

       
        

    }
    else{
        document.getElementById('reset').click();
        document.getElementById('start').click();

        startquestion(x);
    }







}

















function write()
{
// const  once value assigned in it we can't change it
const canvas=document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const nameofuser=document.getElementById("name");
const download=document.getElementById("down");
// ctx is a object  by which we draw a shapes and graphics

const image =new Image();
image.src='cer.png';
console.log(name1);
console.log(image);
image.onload=function(){
    drawImage();
}
function drawImage(){
    // this one of the method to draw the image
    // the first paramehhter is image
    // x,then y coordinate
    // then  and width  ,height
    ctx.drawImage(image,0,0,canvas.width,canvas.height);
    ctx.font='30px monotype corsiva';
    ctx.fillstyle='black';
    ctx.fillText(name1,300,245);
     ctx.font='20px monotype corsiva';
          ctx.fillText("NAVA BHARATHY",215,400);
          ctx.fillText(namee[questioner],480,400);
}
                drawImage();
setTimeout(function() {
 
   
    var link = document.createElement('a');
            
            // Set the URL of the file to be downloaded
            // anchor.href= canvas.toDataURL('image/jpg');
            // anchor.download = name1; // Replace with the desired file name
            
            // anchor.click();
download.href = canvas.toDataURL('image/jpg'); // Replace with the path to your file
            
            // Set the download attribute with the desired file name
            
download.download = name1; // Replace with the desired file name
            
            // Append the link to the body (it won't be visible)
            document.body.appendChild(link);
            
            // Programmatically click the link to trigger the download
            
download.click();
}, 2000);

}







window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0o0;
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let Interval;

    const startTimer = () => {
      tens++;
      if (tens <= 9) {
        appendTens.innerHTML = '0' + tens;
      }
      if (tens > 9) {
        appendTens.innerHTML = tens;
      }

      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;
      }

      if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
      }

      if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        appendSeconds.innerHTML = '0' + 0;
      }
    };

    startBtn.onclick = () => {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = () => {
      clearInterval(Interval);
    };

    resetBtn.onclick = () => {
      clearInterval(Interval);
      tens = '00';
      seconds = '00';
      minutes = '00';
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
      appendMinutes.innerHMTL = minutes;
    };
  };






