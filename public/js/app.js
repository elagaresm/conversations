const li = document.querySelectorAll("li");
for (let conversation of li) {
    conversation.addEventListener('click', () => {
        // navigator.clipboard.writeText(conversation.textContent.match(regex)[0])
        copy(conversation);
    })
}


function copy(element) {
    const regex = /\d{8}/
    navigator.clipboard.writeText(element.textContent.match(regex)[0]);
    iziToast.show({
        title: "Success",
        message: "Conversation ID copied to clipboard"
    })
}
