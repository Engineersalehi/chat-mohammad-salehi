const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// 🔑 اینجا API Key خود را جایگذاری کنید!
const API_KEY = "const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// 🔑 اینجا API Key خود را جایگذاری کنید!
const API_KEY = "اینجا API خود را بگذارید"; 
const API_URL = "https://api.openai.com/v1/chat/completions";

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
        بدن :   ج  .قدم  زدن({
            مدل :   "gpt-3.5-turbo",
            پیام :   [{ نقش :   "کاربر" ,   content :   پیام }]
        })
    })
      .  بعد(پاسخ   =>   {
        اگر (!پاسخ.ok) {
            پرتاب  تازه  اشتباه(`خطای شبکه: ${پاسخ.وضعیت}`);
        }
        بازگشت  پاسخ.ج سون();
    })
      .  بعد(داده   =>   {
        اگر (داده.انتخاب   &&   داده.انتخاب.طول   >   0) {
            پیام  پیوست("🤖 ربات: "   +   داده.انتخاب[0].پیام.content ,   "
        } دیگر  {
            پیام  پیوست("⚠ پاسخ نامعتبر از سرور دریافت شد." ,   "
        }
    })
      .  گیر کن(اشتباه  =>  {
        کنسول.اشتباه("خطا:",  اشتباه);
        پیام  پیوست("❌ خطا در دریافت پاسخ. لطفاً API Key را بررسی کنید!",  ");
    });

    در  این  پوت.ارزش  =  "";
}

عملکرد  appendMessage(text,  sender) {
    const پیام رسانی  =  سند.createElement(");
 پیام رسانی کلاس.اضافه  کنیدکنید("
 پیام رسانی متن متن  =  متن;
    چت  باکس.کودک را  تشویق  می  کند(پیام  رسانی);
    چت  باکس.طومار تاپ  =  چت  باکس.طومار هاییت;
}";  
const آپی  =  "https://api.openai.com/v1/chat/completions";

عملکرد  sendMessage() {
    const پیام  =  در  این  پوت.ارزش.سه،();
    اگر (پیام  ===  "") بازگشت;

    پیام  پیوست("👤 شما: "  +  پیام,  "کاربر");

    fetch(آپی,  {
        روش:  "پست",
        سر سر سر: {
            "نوع محتوا":  "App/json",
            "مجوز":  `Bearer ${آپی_کی}`
        },
        بدن:  ج  .قدم  زدن({
            مدل:  "gpt-3.5-turbo",
            پیام:  [{ نقش:  "کاربر",  content:  پیام }]
        })
    })
     . بعد(پاسخ  =>  {
const چت باکس   =   سند.getElementById("چت-باکس");اگر (!پاسخ.ok) {
صورت صورت استفاده  از  این  استفاده از این پول  در این پوت   =   سند.getElementById("کاربر-input");سند.getElementById("کاربر-input");پرتاب  تازه  Error(`خطای شبکه: ${پاسخ.وضعیت}`);
        }
// 🔑 اینجا API Key خود را جایگذاری کنید!return response.json();
صورت صورت آپی_کی  =  "const chatBox = document.getElementById("گپ-جعبه");})
صورت  صورت در  این پوت   =   document.getElementById("کاربر-input");بعد(داده   =>   {
        اگر (داده.انتخاب   &&   داده.انتخاب.طول   >   0) {
// 🔑 اینجا API Key خود را جایگذاری کنید!appendMessage("🤖 ربات: " + data.choices[0].message.content, "bot");
const آپی_کی   =   "اینجا API خود را بگذارید"  ;    } دیگر  {
صورت  صورت API_URLconst آپی   =   "https://api.openai.com/v1/chat/completions";"https://api.openai.com/v1/chat/completions";پیام پیوست("⚠ پاسخ نامعتبر از سرور دریافت شد." ,   ");
        }
تابع  ارسال  پیام () {})
      .  پیام const   =   در این پوت.ارزش.سه،() ;   گیر  کن(اشتباه   =>   {
 اگر.(پیام   ==   بازگشت؛ کنسول.error(بازگشت؛ کنسول.error("
 پیام پیوست ("❌ خطا در دریافت پاسخ. لطفاً API Key را بررسی کنید!",  ");
 پیام پیوست(" شما: "  +  پیام,  "کاربر");  (" شما: "  +  پیام,  "کاربر");  });

 fetch (آپی,  { در این پوت.ارزش   =   "";
}

عملکرد  "نوع محتوا":  "اپ/json".  پیام پیوست(متن ,   فرستنده) {
 "مجوز": خرس {آپی_کی const پیام رسانی   =   سند.createElement(");
         },  پیام  .کلاس.اضافه  کنید("
 بدن: JSON.قدم زدن ({ stringify ({ پیام رسانی.متن;
 مدل: "gpt-3.5-turbo".  chatBox.کودک را تشویق می کند(رسانی);
 پیام ها.[نقش   =   کاربر" }) chatBox.scrollTop = chatBox.scrollHeight;
                        }
