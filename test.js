fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({conversationID: document.querySelector("#gwt-debug-PostViewHeader-HeaderText").textContent})
});



(async function() {
    navigator.clipboard.writeText(document.querySelector("#gwt-debug-PostViewHeader-HeaderText").textContent)
        .then(() => {
            alert(`Conversation ID yanked with ${document.querySelectorAll(".GNB2KQADA-B").length} posts`)
        })
        .catch(() => {
            alert('Yanked failed')
        })
})()


if (document.querySelectorAll(".GNB2KQADA-B").length >= 12) {
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({conversationID: document.querySelector("#gwt-debug-PostViewHeader-HeaderText").textContent})
    })
        .then(() => {
                document.querySelector("#gwt-debug-PostViewHeader-HeaderText").style.color= "green"
        })
        .catch(() => {
            alert('Post request failed')
        })
} else {
    document.querySelector("#gwt-debug-PostViewHeader-HeaderText").style.color = "red"
}
