const infos = ["Hello there!", "I'm Golnar Kaviani", "A recent Computer Science graduate and a full-stack developer trainee", "I enjoy coding and problem solving", "You can find out more out me here"];
const classNames=["typing","myName","education","likes","findOut"]
const timer = ms => new Promise(res => setTimeout(res, ms))
var index = 0;
var check=true;
var count=0;

async function type() {
   
    while( check === true && count < infos.length ){

        check=false;
        var letter = "";
        var text=infos[count];
        var class_name=classNames[count];
        const selectedText = document.querySelector(`.${class_name}`);

        while(letter.length !== text.length){  
            await timer(50) 
            letter = text.slice(0, ++index);
            selectedText.textContent = letter;
        }

        index = 0;
        clearInterval(run);
        await timer(1000);
        count++;
        check=true;      
    }        
}
 
// async function typeMyName(){
//     const myName = document.querySelector('.myName');
//     myName.textContent= "I'm Golnar, a recent Computer Scienct graduate";
//     myName.style.transition = "0.5s";
// }

const run = setInterval(type, 500);

