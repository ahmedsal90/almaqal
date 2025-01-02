// ملف script.js

function validateInput() {
    var input = document.getElementById("nameInput");
    var value = input.value;

    // السماح فقط بالحروف (لا أرقام أو رموز)
    var regex = /^[A-Za-z\u0600-\u06FF\s]+$/;  // يسمح بالحروف العربية والإنجليزية
    if (!regex.test(value)) {
        input.setCustomValidity("الرجاء إدخال اسم صحيح بدون أرقام أو رموز.");
    } else {
        input.setCustomValidity("");
    }
}

document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();  // منع النموذج من الانتقال إلى صفحة Formspree

    var nameInput = document.getElementById("nameInput").value.trim();

    if (nameInput === "") {
        alert("الرجاء إدخال اسمك.");
        return;
    }

    // إظهار مؤشر التحميل
    document.getElementById("loadingIndicator").style.display = "block";
    
    // إرسال البيانات عبر Formspree
    fetch("https://formspree.io/f/xrbbobwz", {
        method: "POST",
        headers: {
            "Accept": "application/json"
        },
        body: new URLSearchParams({
            name: nameInput
        })
    })
    .then(function(response) {
        if (response.ok) {
            // إخفاء مؤشر التحميل
            document.getElementById("loadingIndicator").style.display = "none";
            
            // تغيير الخلفية
            document.body.style.backgroundColor = "#007acc";

            // عرض رسالة شكر
            var responseMessage = document.getElementById("responseMessage");
            responseMessage.textContent = `شكرا لك ايها المهندس ${nameInput} على تسجيلك!`;
            responseMessage.style.opacity = 1;

            // إخفاء رسالة الترحيب
            document.getElementById("welcomeMessage").style.opacity = 0;

            // إضافة تأثير تغيير خلفية
            document.querySelector(".container").classList.add("changeBackground");
        } else {
            alert("حدث خطأ أثناء إرسال البيانات.");
        }
    })
    .catch(function(error) {
        console.log("حدث خطأ في الاتصال:", error);
        document.getElementById("loadingIndicator").style.display = "none";
    });
});
