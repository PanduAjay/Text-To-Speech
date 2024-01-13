let inputEl = document.createElement("input");
inputEl.type = "text";
inputEl.id = "input";
inputEl.placeholder = "Write here..."
container.appendChild(inputEl);

let btnEl = document.createElement("button");
btnEl.id = "btn";
btnEl.textContent = "Speak";
container.appendChild(btnEl);

btnEl.addEventListener("click",()=>{
    const text = input.value;
    const textSpeak = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(textSpeak);
})
