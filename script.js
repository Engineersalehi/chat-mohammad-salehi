const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// sk-svcacct-n3rnUdEW14bx0Gu2meHbrx5O6A9Bm_OeZxxG8chIbT9d6FMuAgDzSSf0sTxDZ2QQsszgV2Fq3P4xrQA
const آپی_کی   =   "اینجا API خود را بگذارید" ;   
const آپیرول  =  "https://api.openai.com/v1/chat/completions";

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage("👤 شما: " + message, "user");

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }]
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`خطای شبکه: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.choices && data.choices.length > 0) {
            appendMessage("🤖 ربات: " + data.choices[0].message.content, "bot");
        } else {
            appendMessage("⚠ پاسخ نامعتبر از سرور دریافت شد.", "bot");
        }
    })
    .catch(error => {
        console.error("خطا:", error);
        appendMessage("❌ خطا در دریافت پاسخ. لطفاً API Key را بررسی کنید!", "bot");
    });

    userInput.value = "";
}

function appendMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
