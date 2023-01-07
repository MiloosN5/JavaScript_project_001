/* QUIZ wrapper */
var quizWrapper = document.getElementById("my-quiz-wrapper"); 

/* INTRO elements */
var portfolioIntro = document.getElementById("my-portfolio-INTRO");
var bigheaderIntro = document.getElementById("my-bigheader-INTRO");
var noteIntro = document.getElementById("my-note-INTRO");

/* Q1 elements */
var questionLabelQ1 = document.getElementById("my-question-label-Q1");
var questionTitleQ1 = document.getElementById("my-question-title-Q1");
var noteQ1 = document.getElementById("my-note-Q1"); 
var floatingDivQ1 = document.getElementById("my-floating-div-Q1");
var formFloatingQ1 = document.getElementById("my-formFloating-Q1");  
var buttonIntro = document.getElementById("my-button-INTRO");
var inputQ1 = document.getElementById("my-input-Q1");  
var labelQ1 = document.getElementById("my-label-Q1");  

/* Buttons for Q2, Q3, Q4 & A5 */
var buttonsDiv = document.getElementById("my-buttons-div");
var buttonQ1 = document.getElementById("my-button-Q1");
var buttonQ2 = document.getElementById("my-button-Q2");
var buttonQ3 = document.getElementById("my-button-Q3");
var buttonQ4 = document.getElementById("my-button-Q4");
var buttonQ5 = document.getElementById("my-button-Q5");

/* Show/hide input (Q2) */
var toggleInput = document.createElement("input");

/* Range (Q5) */ 
var rangeLabel = document.createElement("label");
var rangeInput = document.createElement("input");

/* Final messages */
var finalMessageThanks = document.createElement("p");
var finalMessageRating = document.createElement("p");
/* variables */

var quizIndex = 0;
// var ff2;
// var ff3;
var tirkizBoja = "rgb(175, 228, 221)";

/* Startuj quiz i pokreni Q1 */
function startQuiz() {
    questionLabelQ1.textContent = `Question ${++quizIndex} of 5`; // Question 1 of 5
    /* sakrij INTRO sadrzaj */
    portfolioIntro.style.display = "none";
    bigheaderIntro.style.display = "none";
    noteIntro.style.display = "none";
    /* prikazi Question 1 (Q1) sadrzaj */
    questionLabelQ1.setAttribute("class", "d-inline-block mb-1 px-2");
    questionLabelQ1.style.paddingTop = "3px";
    questionLabelQ1.style.paddingBottom = "3px";
    questionLabelQ1.style.width = "auto";
    questionLabelQ1.style.backgroundColor = tirkizBoja;
    questionLabelQ1.style.fontSize = "15px";
    questionTitleQ1.setAttribute("class", "d-block my-1 fw-bold");
    questionTitleQ1.style.fontSize = "25px";
    noteQ1.setAttribute("class", "d-block pb-1 mb-1 fw-bold");
    noteQ1.style.fontSize = "14px";
    noteQ1.style.color = "rgb(38, 144, 130)";
    floatingDivQ1.style.display = "block";
    inputQ1.classList.add("border", "mb-2", "border-dark", "border-2", "rounded-1", "w-100");
    inputQ1.style.paddingTop = "16px";
    inputQ1.style.paddingLeft = "12px";
    inputQ1.style.paddingBottom = "4px";
    inputQ1.style.height = "50px";
    inputQ1.style.lineHeight = "0.1";
    inputQ1.style.fontSize = "14px";
    labelQ1.style.fontSize = "14px";
    labelQ1.style.fontWeight = "bold";
    labelQ1.style.padding = "24px 12px";
    formFloatingQ1.style.lineHeight = "0.1";
    buttonQ1.classList.remove("d-none");
    buttonQ1.classList.add("d-inline-block");

    /* sakriti dugme sa INTRO-a */
    buttonIntro.classList.add("d-none");

    /* sada sadrzaj quizWrapper-a treba da bude poravnat levo */
    quizWrapper.classList.remove("text-center");
    quizWrapper.classList.add("text-start");
    quizWrapper.style.maxWidth = "500px";

    /* div gde se nalaze dugmad, treba da bude poravnat levo */
    buttonsDiv.classList.remove("text-center");
    buttonsDiv.classList.add("text-start");
    buttonsDiv.style.maxWidth = "500px";
}

/* Submit Q1 i pokreni Q2 */
function submitQ1() {
    /* ako ime nije uneto, ne izvrsava se telo submitQ1 funkcije */
    if(inputQ1.value == "") {
        alert("Name must be filled out");
    } 
    else {
        floatingDivQ1.style.display = "none";
        questionLabelQ1.textContent = `Question ${++quizIndex} of 5`; // Question 2 of 5
        questionTitleQ1.textContent = "Where are you in your career?";
        noteQ1.classList.add("d-none");
        inputQ1.classList.add("d-none");
        /* pravljenje input polja putem for petlje */
        for (var i =0; i < 7; i++) {
            window['inputPar'+i] = document.createElement("p"); // pravljenje paragrafa u koji se stavlja input i label
            window['inputPar'+i].setAttribute("class", "w-100 border border-dark border-2 align-middle d-flex align-items-start ms-0");
            window['inputPar'+i].style.padding = "8px";
            window['inputPar'+i].style.margin = "2px";
            window['inputPar'+i].style.backgroundColor = tirkizBoja;
            window['inputPar'+i].classList.add("mb-0");
            window['inputField'+i] = document.createElement("input"); // pravljenje inputa
            window['inputField'+i].setAttribute("type", "radio");
            window['inputField'+i].setAttribute("id", `my-radio${i}`);
            window['inputField'+i].setAttribute("name", "radioButton");
            window['inputField'+i].setAttribute("class", "ms-1 me-2 my-1");
            window['inputLabel'+i] = document.createElement("label"); // pravljenje label-a
            window['inputLabel'+i].setAttribute("id", `my-label${i}`);
            window['inputLabel'+i].setAttribute("for", `my-radio${i}`);
            window['inputLabel'+i].style.fontSize = "15px";
            switch(i) { // u zavisnosti od id-a label-a, ispisi njegov sadrzaj
                case 0:
                    window['inputLabel'+i].textContent = "I know what career I want, and I need to learn some skills";
                    break;
                case 1:
                    window['inputLabel'+i].textContent = "I like my career-or, at least, I don't HATE it-but I keep wondering if there's something more out there.";               
                    break;  
                case 2:
                    window['inputLabel'+i].textContent = "I took a break from my career, and now I'm ready to get back into the workforce";
                    break;
                case 3:
                    window['inputLabel'+i].textContent = "I want to make a career change, but I'm also super busy.";
                    break;   
                case 4:
                    window['inputLabel'+i].textContent = "I'm just starting out.";
                    break;  
                case 5:
                    window['inputLabel'+i].textContent = "I'm burnt out from going into an office every day and ready to make my own hours";
                    break;
                case 6:
                    window['inputLabel'+i].textContent = "Other (please enter)!";
                    break;                                              
            }

            /* ubaci input i label u paragraf, pa onda paragraf u quizWrapper */
            window['inputPar'+i].appendChild(window['inputField'+i]);
            window['inputPar'+i].appendChild(window['inputLabel'+i]);
            quizWrapper.appendChild(window['inputPar'+i]);
        }

        /* toggle input polje koje se pojavljuje kada je selektovano input polje "Other" */
        toggleInput.setAttribute("type", "text");
        toggleInput.setAttribute("id", "my-toggle-input");
        toggleInput.setAttribute("class", "mb-1 form-control mb-2 border border-dark border-2 rounded-1 fw-bold p-2 w-100");
        toggleInput.style.fontSize = "14px";
        toggleInput.style.display = "none";
        toggleInput.setAttribute("placeholder", "Type your answer here ...");
        quizWrapper.appendChild(toggleInput);

        /* pristupi svim radio elementima preko njihovih id-eva */
        var radioInput1 = document.getElementById("my-radio1");
        radioInput1.addEventListener("click", toggleInputCheck);
        var radioInput2 = document.getElementById("my-radio2");
        radioInput2.addEventListener("click", toggleInputCheck);
        var radioInput3 = document.getElementById("my-radio3");
        radioInput3.addEventListener("click", toggleInputCheck);
        var radioInput4 = document.getElementById("my-radio4");
        radioInput4.addEventListener("click", toggleInputCheck);
        var radioInput5 = document.getElementById("my-radio5");
        radioInput5.addEventListener("click", toggleInputCheck);
        var radioInput6 = document.getElementById("my-radio6");
        radioInput6.addEventListener("click", toggleInputCheck);

        /* funkcija koja proverava ako je selektovan (cekiran) input sa id-em "my-radio6" da prikaze dodatno input polje */
        function toggleInputCheck() {
            if(radioInput6.checked) {
                toggleInput.style.display = "block";
            }
            else {
                toggleInput.style.display = "none";
            }
        }

        /* kad nam se prikaze sadrzaj za Q1, treba sakriti njegov button i prikazati button za naredno pitanje */
        buttonQ1.classList.remove("d-inline-block");
        buttonQ1.classList.add("d-none");
        buttonQ2.classList.remove("d-none");
        buttonQ2.classList.add("d-inline-block");

   }
}

/* Submit Q2 i pokreni Q3 */
function submitQ2() {

    /* sakri toggle input polje jer nije deo sadrzaja Q2 */
    toggleInput.style.display = "none";
    questionLabelQ1.textContent = `Question ${++quizIndex} of 5`; // Question 3 of 5
    questionTitleQ1.textContent = "What's your biggest concern about learning tech skills?";


    /* kad nam se prikaze sadrzaj za Q2, treba sakriti njegov button i prikazati button za naredno pitanje */
    buttonQ2.classList.remove("d-inline-block");
    buttonQ2.classList.add("d-none");
    
    buttonQ3.classList.remove("d-none");
    buttonQ3.classList.add("d-inline-block");

    /* za Q3 ne treba kreira nova input polja, vec se menja sadrzaj vec postojecih */
    for (var j =0; j < 7; j++) {
        switch(j) {
            case 0:
                window['inputLabel'+j].textContent = "Even if I learned the skills, with my weird resume, why would they hire me over a computer science grad?";
                break;
            case 1:
                window['inputLabel'+j].textContent = "I don't have the time to learn new skills.";             
                break;  
            case 2:
                window['inputLabel'+j].textContent = "I dream of a remote job-but do those jobs REALLY exist for, you know, REAL people like me?";
                break;
            case 3:
                window['inputLabel'+j].textContent = "It's too late in my career/life to make this big of a change.";
                break;   
            case 4:
                window['inputLabel'+j].textContent = "Learning tech skills is expensive and I'm on a tight budget-I'm not sure it's worh it.";
                break;  
            case 5:
                window['inputLabel'+j].textContent = "My career is okay and learning skills is expensive-why should I rock the boat?";
                break;
            case 6:
                window['inputPar6'].classList.add("d-none"); // s obzirom da Q3 ima jednu opciju manje, poslednji sa prethodnog pitanja treba sakriti (d-none)
                break;                                               
        }
    }

}

/* Submit Q3 i pokreni Q4 */
function submitQ3() {
    questionLabelQ1.textContent = `Question ${++quizIndex} of 5`; // Question 4 of 5
    questionTitleQ1.textContent = "Picture the perfect workplace for you. What do you see?";

    /* kad nam se prikaze sadrzaj za Q3, treba sakriti njegov button i prikazati button za naredno pitanje */
    buttonQ3.classList.remove("d-inline-block");
    buttonQ3.classList.add("d-none");
    
    buttonQ4.classList.remove("d-none");
    buttonQ4.classList.add("d-inline-block");

    /* menjanje sadrzaja input polja */
    for (var j =0; j < 7; j++) {
        switch(j) {
            case 0:
                window['inputLabel'+j].textContent = "A bustling agency where I'm surronded by incredible creative talent.";
                break;
            case 1:
                window['inputLabel'+j].textContent = "A collaborative environment where I'm LEADING the team.";             
                break;  
            case 2:
                window['inputLabel'+j].textContent = "A collaborative environment where I'm a full-time member of a team working shoulder-to-shoulder with fun, experienced team members.";
                break;
            case 3:
                window['inputLabel'+j].textContent = "A coworking spot! I work with my team sometimes in-person and then have the freedom to finish my work around my busy schedule.";
                break;   
            case 4:
                window['inputLabel'+j].textContent = "A video conference with coworkers on my screen ... and the beach behind it.";
                break;  
            case 5:
                window['inputLabel'+j].textContent = "Work at home in the morning, with time for kids' soccer practice in the afternoon.";
                break;                                              
        }
    }

}

/* Submit Q4 i pokreni Q5 */

function submitQ4() {
    questionLabelQ1.textContent = `Question ${++quizIndex} of 5`; // Question 5 of 5
    questionTitleQ1.textContent = "Just one more thing! How much you like this survey?";

    /* opet prikazi note koji je bio prisitan u Q1, samo sada treba promeniti sadrzaj */
    noteQ1.classList.remove("d-none");
    noteQ1.classList.add("d-block");
    noteQ1.textContent = "(We hope think you'll like it)";

    /* kad nam se prikaze sadrzaj za Q4, treba sakriti njegov button i prikazati button za naredno pitanje */
    buttonQ4.classList.remove("d-inline-block");
    buttonQ4.classList.add("d-none");
    buttonQ5.classList.remove("d-none");
    buttonQ5.classList.add("d-inline-block");

    /* sakriti input polja */
    for (var j =0; j < 7; j++) {
        window['inputPar'+j].classList.add("d-none");                                             
    }
    
    /* pravljenje range-a -> labela i input tipa "range" */
    rangeLabel.textContent = "1-5";
    rangeLabel.setAttribute("id", "my-rangeLabel");
    rangeLabel.setAttribute("for", "my-rangeInput");
    rangeLabel.setAttribute("class", "d-block form-label");
    rangeLabel.style.fontSize = "15px";
    rangeLabel.classList.add("my-1");

    rangeInput.setAttribute("type", "range");
    rangeInput.setAttribute("id", "my-rangeInput");
    rangeInput.setAttribute("min", "1");
    rangeInput.setAttribute("max", "5");
    rangeInput.setAttribute("step", "1");
    rangeInput.setAttribute("class", "d-block form-range me-2");

    /* ubaci (dodaj) range u quizWrapper */
    quizWrapper.appendChild(rangeLabel);
    quizWrapper.appendChild(rangeInput);

}

/* Submit Q5 i prikazi poslednju poruku */
function submitQ5() {
    
    /* sakriti paragraf gde stoji broj pitanja (pr. Question 1 of 5) */
    questionLabelQ1.classList.remove("d-block");
    questionLabelQ1.classList.add("d-none");

    /* Ispisati "Hi *username*" */
    questionTitleQ1.textContent = `Hi ${inputQ1.value}`; // treba pokupiti vrednost koju korisnik unosi iz Q1 (ime korisnika)

    /* treba ukloniti note, dugme i range */
    noteQ1.classList.remove("d-block");
    noteQ1.classList.add("d-none");
    buttonQ5.classList.remove("d-inline-block");
    buttonQ5.classList.add("d-none");
    rangeLabel.classList.remove("d-block");
    rangeInput.classList.remove("d-block");
    rangeLabel.classList.add("d-none");
    rangeInput.classList.add("d-none");

    /* ispisati poruke korisnika za zahvalnost i povratnu poruku u zavinosti od ocene korisnika */
    finalMessageThanks.setAttribute("class", "fw-bold mb-1 p-0");
    finalMessageThanks.textContent = "Thank you for your time!";
    finalMessageThanks.setAttribute("id", "my-finalThanks");
    finalMessageThanks.style.fontSize = "25px";

    finalMessageRating.setAttribute("class", "mb-1 pb-2");
    finalMessageRating.setAttribute("id", "my-finalRating");
    finalMessageRating.style.fontSize = "13px";

    /* sadrzaj quizWrapper treba da opet bude poravnat centrirano */
    quizWrapper.appendChild(finalMessageThanks);
    quizWrapper.appendChild(finalMessageRating);
    quizWrapper.classList.remove("text-start");
    quizWrapper.classList.add("text-center");

    /* pokupiti vrednost range-a koju je korisnik odabrao */
    var rate = document.getElementById("my-rangeInput").value;

    /* u zavisnosti od ocene korisnika, ispisati odredjenu poruku korisniku i odredjeni smajli */
    switch(rate) {
        case "1":
            finalMessageRating.textContent = "We appreciate your opinion. Oooops, sorry to disappoint you.";
            var finalSmileDiv1 = document.createElement("div");
            var finalSmileIcon1 = document.createElement("i");
            finalSmileIcon1.setAttribute("class", "fa-solid fa-face-sad-tear fa-4x");
            finalSmileIcon1.style.webkitTextStrokeColor = "white";
            finalSmileIcon1.style.webkitTextStrokeWidth = "6px";
            finalSmileIcon1.style.color = "rgba(0,0,0,0)";
            finalSmileDiv1.appendChild(finalSmileIcon1);
            quizWrapper.appendChild(finalSmileDiv1);
            break;
        case "2":
            finalMessageRating.textContent = "We appreciate your opinion. We hope it will be better next time!";
            var finalSmileDiv2 = document.createElement("div");
            var finalSmileIcon2 = document.createElement("i");
            finalSmileIcon2.setAttribute("class", "fa-solid fa-face-frown fa-4x");
            finalSmileIcon2.style.webkitTextStrokeColor = "white";
            finalSmileIcon2.style.webkitTextStrokeWidth = "6px";
            finalSmileIcon2.style.color = "rgba(0,0,0,0)";
            finalSmileDiv2.appendChild(finalSmileIcon2);
            quizWrapper.appendChild(finalSmileDiv2);      
            break;
        case "3":
            finalMessageRating.textContent = "We appreciate your opinion. Golden middle!";
            var finalSmileDiv3 = document.createElement("div");
            var finalSmileIcon3 = document.createElement("i");
            finalSmileIcon3.setAttribute("class", "fa-solid fa-face-smile fa-4x");
            finalSmileIcon3.classList.add("text-white");
            finalSmileDiv3.appendChild(finalSmileIcon3);
            quizWrapper.appendChild(finalSmileDiv3);
            break;
        case "4":
            finalMessageRating.textContent = "We appreciate your opinion. Thanks for the very good rating!";
            var finalSmileDiv4 = document.createElement("div");
            var finalSmileIcon4 = document.createElement("i");
            finalSmileIcon4.setAttribute("class", "fa-solid fa-face-grin-beam fa-4x");
            finalSmileIcon4.classList.add("text-white");
            finalSmileDiv4.appendChild(finalSmileIcon4);
            quizWrapper.appendChild(finalSmileDiv4);
            break;
        case "5":
            finalMessageRating.textContent = "We appreciate your opinion. Perfect! We are glad to meet your requirements!";
            var finalSmileDiv5 = document.createElement("div");
            var finalSmileIcon5 = document.createElement("i");  
            finalSmileIcon5.setAttribute("class", "fa-solid fa-face-grin-hearts fa-4x");
            finalSmileIcon5.style.webkitTextStrokeColor = "white";
            finalSmileIcon5.style.webkitTextStrokeWidth = "6px";
            finalSmileIcon5.style.color = "rgba(0,0,0,0)";
            finalSmileDiv5.appendChild(finalSmileIcon5);
            quizWrapper.appendChild(finalSmileDiv5);
            break;
    } 

}
    
