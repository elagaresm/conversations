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



// send to escalation list


(function () {
    const answer = confirm('Send this conversation ID to the Escalation list?')
    if (answer) {
        fetch('http://localhost:3000/escalations', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({conversationID: document.querySelector("#gwt-debug-PostViewHeader-HeaderText").textContent})
        })
            .then(() => {
                document.querySelector("#gwt-debug-PostViewHeader-HeaderText").style.color= "orange"
            })
            .catch(() => {
                document.querySelector("#gwt-debug-PostViewHeader-HeaderText").style.color= "brown"
            })
    }
    document.querySelector("#gwt-debug-AssignedWidget-arrowButton").click()
    setTimeout(() => {
        document.querySelector("#assignedSelectBox > table > tbody > tr > td:nth-child(2) > div").click()
    }, 100)
    setTimeout(() => {
        let options = document.querySelectorAll("div.gwt-Label")
        let escalation = Array.from(options).find(ele => (ele.innerText.includes('Escalation')))
        escalation.click();
    }, 100)
})()



// hidden content


(function () {
    const answer = prompt('Reason to hide?')
    if (answer) {
        fetch('http://localhost:3000/hide', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({conversationID: document.querySelector("#gwt-debug-PostViewHeader-HeaderText").textContent, reason: answer})
        })
            .then(() => {
                document.querySelector("#gwt-debug-PostViewHeader-HeaderText").style.color= "orange"
            })
            .catch(() => {
                document.querySelector("#gwt-debug-PostViewHeader-HeaderText").style.color= "brown"
            })
        document.querySelector("#CloseTab > div").click()
        setTimeout(() => {document.querySelector("#ClosePanel > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)").click()}, 100)
        setTimeout(() => {document.querySelector("#ClosePanel > div > div.GNB2KQADB0E > button").click()}, 200)
    }
})()
