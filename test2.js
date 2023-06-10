(function () {
    let answer = prompt(`Reason to hide?
        1 - Bad Emoji vomit monkey poop clown
        2 - Attack on Talent
        3 - Hate / Anti-diversity
        4 - Inciting / Trolling / Bullying
        5 - Spam: Self-promo / Unrelated URL / Phishing
        6 - Abuse and Self-Harm
        7 - *Notification to Client: Leak, Copyright, Piracy, Imminent Danger, etc...
        8 - Hidden for Completely Different Reason
        9 - Long Conversation
        `)

    if (answer) {

        console.log(typeof answer)
        
        switch (answer) {
            case "1": 
                answer = "Bad Emoji vomit monkey poop clown";
                break;
            case "2": 
                answer = "Attack on Talent"
                break;
            case "3":
                answer = "Hate / Anti-diversity"
                break;
            case "4":
                answer = "Inciting / Trolling / Bullying"
                break;
            case "5":
                answer = "Spam: Self-promo / Unrelated URL / Phishing"
                break;
            case "6":
                answer = "Abuse and Self-Harm"
                break;
            case "7":
                answer = "*Notification to Client: Leak, Copyright, Piracy, Imminent Danger, etc..."
                break;
            case "8":
                answer = "Hidden for Completely Different Reason"
                break;
            case "9":
                answer = "Long Conversation"
                break;
        }

        console.log(answer)

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
        setTimeout(() => {document.querySelector("#ClosePanel > div > div.GPMJHU2CD0E > button").click()}, 200)
    }
})()
