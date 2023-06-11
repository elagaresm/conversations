[
  {
    "key": "v",
    "label": "nextConv",
    "action": "javascript",
    "code": "document.querySelector(\"#gwt-debug-QueueGroup-AVAILABLE > div:nth-child(2) > div > div.GPMJHU2CI1J\").click()",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "activeInInputs": false
  },
  {
    "key": "x",
    "label": "allNeutral",
    "action": "javascript",
    "code": "document.querySelectorAll(\"#gwt-debug-SentimentSelector > div.GPMJHU2CGII.GPMJHU2CJII.gwt-debug-neutral-sentiment\").forEach((ele) => {\n    if (ele.classList.contains(\"selected\") || ele.closest(\".GPMJHU2CGXB\") != null || ele.closest(\".GPMJHU2CEWB\") != null) {\n        return\n    }\n    ele.click()\n})\n\nif (document.querySelectorAll(\"#gwt-debug-SentimentSelector\").length >= 12) {\n    fetch('http://localhost:3000/long', {\n        method: 'POST',\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({conversationID: document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").textContent})\n    })\n        .then(() => {\n            document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"green\"\n        })\n        .catch(() => {\n            document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"brown\"\n        })\n} else {\n    document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color = \"red\"\n}\n\ndocument.querySelectorAll(\".GPMJHU2CEWB\").forEach(ele => {\n    if (ele.querySelector(\"#gwt-debug-SentimentSelector > div.GPMJHU2CGII.GPMJHU2CLII.gwt-debug-positive-sentiment\").classList.contains(\"selected\")) {\n        return\n    }\n    ele.querySelector(\"#gwt-debug-SentimentSelector > div.GPMJHU2CGII.GPMJHU2CLII.gwt-debug-positive-sentiment\").click()\n})",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "activeInInputs": false
  },
  {
    "label": "wontRespond",
    "key": "f",
    "action": "javascript",
    "code": "if (document.querySelectorAll(\"#gwt-debug-SentimentSelector\").length >= 12) {\n    fetch('http://localhost:3000/long', {\n        method: 'POST',\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({conversationID: document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").textContent})\n    })\n        .then(() => {\n                document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"green\"\n        })\n        .catch(() => {\n                            document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"brown\"\n        })\n} else {\n    document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color = \"red\"\n}\n\n\ndocument.querySelector(\"#CloseTab > div\").click()\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(4)\").click()}, 100)\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div.GPMJHU2CD0E > button\").click()}, 200)\n\nsetTimeout(() => {document.querySelector(\"#gwt-debug-QueueGroup-AVAILABLE > div:nth-child(2) > div > div.GPMJHU2CI1J\").click()}, 200);",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "activeInInputs": false
  },
  {
    "key": "z",
    "label": "allNegative",
    "action": "javascript",
    "code": "document.querySelectorAll(\"#gwt-debug-SentimentSelector > div.GPMJHU2CGII.GPMJHU2CIII.gwt-debug-negative-sentiment\").forEach((ele) => {\n    if (ele.classList.contains(\"selected\") || ele.closest(\".GPMJHU2CEWB\") != null) {\n        return\n    }\n    ele.click()\n})\n\nif (document.querySelectorAll(\"#gwt-debug-SentimentSelector\").length >= 12) {\n    fetch('http://localhost:3000/long', {\n        method: 'POST',\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({conversationID: document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").textContent})\n    })\n        .then(() => {\n            document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"green\"\n        })\n        .catch(() => {\n            document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"brown\"\n        })\n} else {\n    document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color = \"red\"\n}\n\ndocument.querySelectorAll(\".GPMJHU2CEWB\").forEach(ele => {\n    if (ele.querySelector(\"#gwt-debug-SentimentSelector > div.GPMJHU2CGII.GPMJHU2CLII.gwt-debug-positive-sentiment\").classList.contains(\"selected\")) {\n        return\n    }\n    ele.querySelector(\"#gwt-debug-SentimentSelector > div.GPMJHU2CGII.GPMJHU2CLII.gwt-debug-positive-sentiment\").click()\n})\n",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "activeInInputs": false
  },
  {
    "key": "c",
    "label": "allPositive",
    "action": "javascript",
    "code": "document.querySelectorAll(\"#gwt-debug-SentimentSelector > div.GPMJHU2CGII.GPMJHU2CLII.gwt-debug-positive-sentiment\").forEach(ele => {\n    if (ele.classList.contains(\"selected\")) {\n        return\n    }\n    ele.click()\n})\n\nif (document.querySelectorAll(\"#gwt-debug-SentimentSelector\").length >= 12) {\n    fetch('http://localhost:3000/long', {\n        method: 'POST',\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({conversationID: document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").textContent})\n    })\n        .then(() => {\n            document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"green\"\n        })\n        .catch(() => {\n            document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"brown\"\n        })\n} else {\n    document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color = \"red\"\n}\n",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "blacklist": "whitelist",
    "activeInInputs": false
  },
  {
    "label": "french",
    "key": "g",
    "action": "javascript",
    "code": "document.querySelector(\"#gwt-debug-AssignedWidget-arrowButton\").click()\nsetTimeout(() => {\n    document.querySelector(\"#assignedSelectBox > table > tbody > tr > td:nth-child(2) > div\").click()\n}, 100)\nsetTimeout(() => {\n    let options = document.querySelectorAll(\"div.gwt-Label\")\n    let french = Array.from(options).find(ele => (ele.innerText.includes('LOTR French')))\n    french.click();\n}, 100)",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "d",
    "label": "spam",
    "action": "javascript",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "code": "document.querySelector(\"#CloseTab > div\").click()\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)\").click()}, 100)\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div.GPMJHU2CD0E > button\").click()}, 200)\n\nsetTimeout(() => {document.querySelector(\"#gwt-debug-QueueGroup-AVAILABLE > div:nth-child(2) > div > div.GPMJHU2CI1J\").click()}, 200);",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "activeInInputs": false
  },
  {
    "key": "r",
    "label": "resolved",
    "action": "javascript",
    "code": "(function () {\n    let answer = prompt(`Reason to hide?\n        1 - Bad Emoji vomit monkey poop clown\n        2 - Attack on Talent\n        3 - Hate / Anti-diversity\n        4 - Inciting / Trolling / Bullying\n        5 - Spam: Self-promo / Unrelated URL / Phishing\n        6 - Abuse and Self-Harm\n        7 - *Notification to Client: Leak, Copyright, Piracy, Imminent Danger, etc...\n        8 - Hidden for Completely Different Reason\n        9 - Long Conversation\n        `)\n\n    if (answer) {\n\n        console.log(typeof answer)\n        \n        switch (answer) {\n            case \"1\": \n                answer = \"Bad Emoji vomit monkey poop clown\";\n                break;\n            case \"2\": \n                answer = \"Attack on Talent\"\n                break;\n            case \"3\":\n                answer = \"Hate / Anti-diversity\"\n                break;\n            case \"4\":\n                answer = \"Inciting / Trolling / Bullying\"\n                break;\n            case \"5\":\n                answer = \"Spam: Self-promo / Unrelated URL / Phishing\"\n                break;\n            case \"6\":\n                answer = \"Abuse and Self-Harm\"\n                break;\n            case \"7\":\n                answer = \"*Notification to Client: Leak, Copyright, Piracy, Imminent Danger, etc...\"\n                break;\n            case \"8\":\n                answer = \"Hidden for Completely Different Reason\"\n                break;\n            case \"9\":\n                answer = \"Long Conversation\"\n                break;\n        }\n\n        console.log(answer)\n\n        fetch('http://localhost:3000/hide', {\n            method: 'POST',\n            headers: {\n                \"Content-Type\": \"application/json\",\n            },\n            body: JSON.stringify({conversationID: document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").textContent, reason: answer})\n        })\n            .then(() => {\n                document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"orange\"\n            })\n            .catch(() => {\n                document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"brown\"\n            })\n        document.querySelector(\"#CloseTab > div\").click()\n        setTimeout(() => {document.querySelector(\"#ClosePanel > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)\").click()}, 100)\n        setTimeout(() => {document.querySelector(\"#ClosePanel > div > div.GPMJHU2CD0E > button\").click()}, 200)\n    }\n})()\n",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "s",
    "label": "irrelevant",
    "action": "javascript",
    "code": "document.querySelector(\"#CloseTab > div\").click()\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)\").click()}, 100)\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div.GPMJHU2CD0E > button\").click()}, 200)\n\nsetTimeout(() => {document.querySelector(\"#gwt-debug-QueueGroup-AVAILABLE > div:nth-child(2) > div > div.GPMJHU2CI1J\").click()}, 200);",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "activeInInputs": false
  },
  {
    "key": "1",
    "label": "ticket1",
    "action": "javascript",
    "code": "document.querySelector(\"#gwt-debug-QueueGroup-ASSIGNED > div:nth-child(2) > div > div.GNB2KQADNO > div:nth-child(1) > div\").querySelectorAll('div')[1].click()",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "blacklist": "whitelist"
  },
  {
    "key": "e",
    "label": "escalate",
    "action": "javascript",
    "code": "(function () {\n    const answer = confirm('Send this conversation ID to the Escalation list?')\n    if (answer) {\n        fetch('http://localhost:3000/escalations', {\n            method: 'POST',\n            headers: {\n                \"Content-Type\": \"application/json\",\n            },\n            body: JSON.stringify({conversationID: document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").textContent})\n        })\n            .then(() => {\n                document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"orange\"\n            })\n            .catch(() => {\n                document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"brown\"\n            })\n    }\n    document.querySelector(\"#gwt-debug-AssignedWidget-arrowButton\").click()\n    setTimeout(() => {\n        document.querySelector(\"#assignedSelectBox > table > tbody > tr > td:nth-child(2) > div\").click()\n    }, 100)\n    setTimeout(() => {\n        let options = document.querySelectorAll(\"div.gwt-Label\")\n        let escalation = Array.from(options).find(ele => (ele.innerText.includes('Escalation')))\n        escalation.click();\n    }, 100)\n})()",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "p",
    "label": "portuguese",
    "action": "javascript",
    "code": "document.querySelector(\"#gwt-debug-AssignedWidget-arrowButton\").click()\nsetTimeout(() => {\n    document.querySelector(\"#assignedSelectBox > table > tbody > tr > td:nth-child(2) > div\").click()\n}, 100)\nsetTimeout(() => {\n    let options = document.querySelectorAll(\"div.gwt-Label\")\n    let portuguese = Array.from(options).find(ele => (ele.innerText.includes('LOTR Portuguese')))\n    portuguese.click();\n}, 100)",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "blacklist": "whitelist"
  },
  {
    "key": "u",
    "label": "turkish",
    "action": "javascript",
    "code": "document.querySelector(\"#gwt-debug-AssignedWidget-arrowButton\").click()\nsetTimeout(() => {\n    document.querySelector(\"#assignedSelectBox > table > tbody > tr > td:nth-child(2) > div\").click()\n}, 100)\nsetTimeout(() => {\n    let options = document.querySelectorAll(\"div.gwt-Label\")\n    let turkish = Array.from(options).find(ele => (ele.innerText.includes('LOTR Turkish')))\n    turkish.click();\n}, 100)",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "blacklist": "whitelist"
  },
  {
    "key": "q",
    "label": "link",
    "action": "javascript",
    "code": "document.querySelectorAll(\"#gwt-debug-MainMessageView > div > table > tbody > tr > td:nth-child(2) > div > div.GNB2KQADM1I > div.GNB2KQADL1I > div:nth-child(8) > table.GNB2KQADD2I > tbody > tr > td > table > tbody > tr > td:nth-child(2) > div\")[0].click()",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "w",
    "label": "submitEscalate",
    "action": "javascript",
    "code": "setTimeout(() => {\n    document.querySelector(\"#gwt-debug-submit-assignment-button\").click()\n}, 100)",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "2",
    "label": "ticket2",
    "action": "javascript",
    "code": "document.querySelectorAll(\"#gwt-debug-QueueGroup-ASSIGNED > div:nth-child(2) > div > div.GNB2KQADNO > div:nth-child(1) > div\")[1].click()",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "3",
    "label": "ticket3",
    "action": "javascript",
    "code": "document.querySelectorAll(\"#gwt-debug-QueueGroup-ASSIGNED > div:nth-child(2) > div > div.GNB2KQADNO > div:nth-child(1) > div\")[2].click()",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "4",
    "label": "ticket4",
    "action": "javascript",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "code": "document.querySelectorAll(\"#gwt-debug-QueueGroup-ASSIGNED > div:nth-child(2) > div > div.GNB2KQADNO > div:nth-child(1) > div\")[3].click()",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "5",
    "label": "ticket5",
    "action": "javascript",
    "code": "document.querySelectorAll(\"#gwt-debug-QueueGroup-ASSIGNED > div:nth-child(2) > div > div.GNB2KQADNO > div:nth-child(1) > div\")[4].click()",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "a",
    "label": "firstPositive",
    "action": "javascript",
    "code": "let myVar = {\n        negative: document.querySelectorAll(\"#gwt-debug-SentimentSelector > div.GPMJHU2CGII.GPMJHU2CIII.gwt-debug-negative-sentiment\")\n    }",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "activeInInputs": false
  },
  {
    "key": "b",
    "label": "arabic",
    "action": "javascript",
    "code": "document.querySelector(\"#gwt-debug-AssignedWidget-arrowButton\").click()\nsetTimeout(() => {\n    document.querySelector(\"#assignedSelectBox > table > tbody > tr > td:nth-child(2) > div\").click()\n}, 100)\nsetTimeout(() => {\n    let options = document.querySelectorAll(\"div.gwt-Label\")\n    let arabic = Array.from(options).find(ele => (ele.innerText.includes('LOTR Arabic')))\n    arabic.click();\n}, 100)",
    "activeInInputs": false,
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "i",
    "label": "italian",
    "action": "javascript",
    "code": "document.querySelector(\"#gwt-debug-AssignedWidget-arrowButton\").click()\nsetTimeout(() => {\n    document.querySelector(\"#assignedSelectBox > table > tbody > tr > td:nth-child(2) > div\").click()\n}, 100)\nsetTimeout(() => {\n    let options = document.querySelectorAll(\"div.gwt-Label\")\n    let italian = Array.from(options).find(ele => (ele.innerText.includes('LOTR Italian')))\n    italian.click();\n}, 100)",
    "activeInInputs": false,
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "[",
    "label": "turnON",
    "action": "javascript",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "code": "getTicket = setInterval(() => {\n    if (document.querySelector(\"#gwt-debug-PostList-ASSIGNED > div:nth-child(1)\").childElementCount < 4) {\n        document.querySelector(\"#gwt-debug-QueueGroup-AVAILABLE > div:nth-child(2) > div > div.GNB2KQADF1J\").click()\n    }\n}, 500);",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "]",
    "label": "turnOFF",
    "action": "javascript",
    "code": "clearInterval(getTicket)",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "l",
    "label": "yank conversation ID",
    "action": "javascript",
    "code": "(async function() {\n    navigator.clipboard.writeText(document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").textContent)\n        .then(() => {\n            alert(`Conversation ID yanked with ${document.querySelectorAll(\"#gwt-debug-SentimentSelector\").length} posts`)\n        })\n        .catch(() => {\n            alert('Yanked failed')\n        })\n})()",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "key": "n",
    "label": "post request",
    "action": "javascript",
    "code": "if (document.querySelectorAll(\"#gwt-debug-SentimentSelector\").length >= 12) {\n    fetch('http://localhost:3000/long', {\n        method: 'POST',\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({conversationID: document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").textContent})\n    })\n        .then(() => {\n                document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"green\"\n        })\n        .catch(() => {\n                            document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"brown\"\n        })\n} else {\n    document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color = \"red\"\n}\n",
    "blacklist": "whitelist"
  },
  {
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "key": "shift+r",
    "label": "add hidden conversation",
    "action": "javascript",
    "blacklist": "whitelist",
    "code": "(function () {\n    let answer = prompt(`Reason to hide?\n        1 - Bad Emoji vomit monkey poop clown\n        2 - Attack on Talent\n        3 - Hate / Anti-diversity\n        4 - Inciting / Trolling / Bullying\n        5 - Spam: Self-promo / Unrelated URL / Phishing\n        6 - Abuse and Self-Harm\n        7 - *Notification to Client: Leak, Copyright, Piracy, Imminent Danger, etc...\n        8 - Hidden for Completely Different Reason\n        9 - Long Conversation\n        `)\n\n    if (answer) {\n\n        console.log(typeof answer)\n        \n        switch (answer) {\n            case \"1\": \n                answer = \"Bad Emoji vomit monkey poop clown\";\n                break;\n            case \"2\": \n                answer = \"Attack on Talent\"\n                break;\n            case \"3\":\n                answer = \"Hate / Anti-diversity\"\n                break;\n            case \"4\":\n                answer = \"Inciting / Trolling / Bullying\"\n                break;\n            case \"5\":\n                answer = \"Spam: Self-promo / Unrelated URL / Phishing\"\n                break;\n            case \"6\":\n                answer = \"Abuse and Self-Harm\"\n                break;\n            case \"7\":\n                answer = \"*Notification to Client: Leak, Copyright, Piracy, Imminent Danger, etc...\"\n                break;\n            case \"8\":\n                answer = \"Hidden for Completely Different Reason\"\n                break;\n            case \"9\":\n                answer = \"Long Conversation\"\n                break;\n        }\n\n        console.log(answer)\n\n        fetch('http://localhost:3000/hide', {\n            method: 'POST',\n            headers: {\n                \"Content-Type\": \"application/json\",\n            },\n            body: JSON.stringify({conversationID: document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").textContent, reason: answer})\n        })\n            .then(() => {\n                document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"orange\"\n            })\n            .catch(() => {\n                document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"brown\"\n            })\n})()\n"
  },
  {
    "sites": "https://chaoticgood.response.lithium.com/*",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ],
    "key": "shift+f",
    "label": "wr without new conv",
    "action": "javascript",
    "blacklist": "whitelist",
    "code": "if (document.querySelectorAll(\"#gwt-debug-SentimentSelector\").length >= 12) {\n    fetch('http://localhost:3000/long', {\n        method: 'POST',\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({conversationID: document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").textContent})\n    })\n        .then(() => {\n                document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"green\"\n        })\n        .catch(() => {\n                            document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color= \"brown\"\n        })\n} else {\n    document.querySelector(\"#gwt-debug-PostViewHeader-HeaderText\").style.color = \"red\"\n}\n\n\ndocument.querySelector(\"#CloseTab > div\").click()\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(4)\").click()}, 100)\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div.GPMJHU2CD0E > button\").click()}, 200)\n\n//setTimeout(() => {document.querySelector(\"#gwt-debug-QueueGroup-AVAILABLE > div:nth-child(2) > div > div.GPMJHU2CI1J\").click()}, 200);"
  },
  {
    "key": "shift+d",
    "label": "spam without new conv",
    "action": "javascript",
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "code": "document.querySelector(\"#CloseTab > div\").click()\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)\").click()}, 100)\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div.GPMJHU2CD0E > button\").click()}, 200)\n\n//setTimeout(() => {document.querySelector(\"#gwt-debug-QueueGroup-AVAILABLE > div:nth-child(2) > div > div.GPMJHU2CI1J\").click()}, 200);",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  },
  {
    "key": "shift+s",
    "label": "irrelevant without new conv",
    "action": "javascript",
    "activeInInputs": false,
    "blacklist": "whitelist",
    "sites": "https://chaoticgood.response.lithium.com/*",
    "code": "document.querySelector(\"#CloseTab > div\").click()\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)\").click()}, 100)\nsetTimeout(() => {document.querySelector(\"#ClosePanel > div > div.GPMJHU2CD0E > button\").click()}, 200)\n\n//setTimeout(() => {document.querySelector(\"#gwt-debug-QueueGroup-AVAILABLE > div:nth-child(2) > div > div.GPMJHU2CI1J\").click()}, 200);",
    "sitesArray": [
      "https://chaoticgood.response.lithium.com/*"
    ]
  }
]
