// التحقق إذا كان الاسم موجودًا بالفعل في localStorage
if (localStorage.getItem('userName')) {
    let userName = localStorage.getItem('userName');
    let messageElement = document.getElementById('message');
    let dateTimeElement = document.getElementById('dateTime');

    messageElement.textContent = `مرحبًا ${userName}! تم إدخال اسمك بنجاح!`;
    dateTimeElement.textContent = `تم إدخال الاسم في: ${localStorage.getItem('userDateTime')}`;
    document.getElementById('nameForm').style.display = 'none'; // إخفاء النموذج
}

// التعامل مع إرسال النموذج
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل تقليدي

    let name = document.getElementById('nameInput').value.trim();
    let messageElement = document.getElementById('message');
    let dateTimeElement = document.getElementById('dateTime');

    if (!name) {
        messageElement.textContent = "من فضلك أدخل اسمًا صالحًا.";
        messageElement.classList.add('error');
    } else {
        // حفظ الاسم ووقت الإدخال في localStorage
        let currentDateTime = new Date().toLocaleString();
        localStorage.setItem('userName', name);
        localStorage.setItem('userDateTime', currentDateTime);

        messageElement.textContent = `شكراً لتسجيل حضورك حضره المهندس/ه ${name}`;
        messageElement.classList.remove('error');
        document.getElementById('nameForm').style.display = 'none'; // إخفاء النموذج
        dateTimeElement.textContent = `تم إدخال الاسم في: ${currentDateTime}`;
    }
});
