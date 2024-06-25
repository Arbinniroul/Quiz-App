const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
           {text:"Elephant",correct:"false"},
           {text:"Whale",correct:"true"},
           {text:"Cow",correct:"false"},
           {text:"Giraffe",correct:"false"}
        ]
        
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
           {text:"Nepal",correct:"false"},
           {text:"Bhutan",correct:"false"},
           {text:"Maldives",correct:"false"},
           {text:"Vatican city ",correct:"true"}
        ]
        
    },
    {
        question:"Which is the largest country in the world?",
        answers:[
           {text:"Canada",correct:"false"},
           {text:"USA",correct:"false"},
           {text:"Russia",correct:"true"},
           {text:"Australia",correct:"false"}
        ]
        
    },
    {
        question:"Which is the tallest mountain in the world?",
        answers:[
           {text:"Mt Fuji",correct:"false"},
           {text:"Mt Annapurna",correct:"false"},
           {text:"Mt Machapuchre",correct:"false"},
           {text:"Mt Everest",correct:"true"}
        ]
        
    }
];
const questionElement=document.getElementById('question');
const answerButtons=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');
 
let currentQuestionindex=0;
let score=0;
function startQuiz() {
    currentQuestionindex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionindex];
    let questionNo=currentQuestionindex+1;
    questionElement.innerHTML=questionNo+" . "+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
            const button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button)
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click",(e)=>{
                const selectedBtn=e.target;
                const isCorrect=selectedBtn.dataset.correct=="true";
                if(isCorrect){
                      selectedBtn.classList.add("correct");
                      score++;
                      answerButtons.style.color="black";
                }
                else{
                    selectedBtn.classList.add("incorrect");
                }
                Array.from(answerButtons.children).forEach(button=>{
                if(button.dataset.correct ==="true"){
                    button.classList.add("correct")
                }
                button.disabled=true;
                })
                nextButton.style.display="block";
            })
    })
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}.`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionindex< questions.length){
     handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();