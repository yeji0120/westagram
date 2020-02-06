const textInput = document.getElementsByClassName("text-input")[0];
const sendBtn = document.getElementsByClassName("send-btn")[0];
const textPlace = document.getElementsByClassName("text-place")[0];

const changeBc=()=>{
    if(textInput.value.length > 0){
        sendBtn.style.opacity = 1;
    }
    else{
        buttonOff();
    }
}

const buttonOff=()=>{
    sendBtn.style.color = "#3797ef";
    sendBtn.style.opacity = 0.5;
}

const sendMessage=()=>{
    if(textInput.value.length !== 0){
        let msgContainer = document.createElement("div");
        let message = document.createElement("span");

        msgContainer.setAttribute("class" , "msgContainer");
        message.setAttribute("class" , "message");

        message.innerText = textInput.value
        textPlace.appendChild(msgContainer);
        msgContainer.appendChild(message);
        textInput.value="";

        goToBottom();
    }
    buttonOff();
}

const goToBottom=()=>{
    textPlace.scrollTop = textPlace.clientHeight;
}
