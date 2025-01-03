// التحقق إذا كان الاسم موجودًا بالفعل في localStorage
if (localStorage.getItem('userName')) {
    let userName = localStorage.getItem('userName');
    let messageElement = document.getElementById('message');
    let dateTimeElement = document.getElementById('dateTime');
    let instructionElement = document.getElementById('instruction');

    messageElement.textContent = `مرحبًا ${userName}! تم تسجيل حضورك بنجاح.`;
    dateTimeElement.textContent = `تم تسجيل الحضور في: ${localStorage.getItem('userDateTime')}`;
    document.getElementById('nameForm').style.display = 'none'; // إخفاء النموذج
    instructionElement.style.display = 'none'; // إخفاء التعليمات
}

// التعامل مع إرسال النموذج
document.getElementById('nameForm').addEventListener('submit', function(event) {
    let name = document.getElementById('nameInput').value.trim();
    let messageElement = document.getElementById('message');
    let dateTimeElement = document.getElementById('dateTime');
    let instructionElement = document.getElementById('instruction');

    if (!name) {
        event.preventDefault(); // منع الإرسال إذا كان الاسم غير صالح
        messageElement.textContent = "من فضلك أدخل اسمًا صالحًا.";
        messageElement.style.color = 'red';
    } else {
        // حفظ الاسم ووقت الإدخال في localStorage
        let currentDateTime = new Date().toLocaleString('ar-EG');
        localStorage.setItem('userName', name);
        localStorage.setItem('userDateTime', currentDateTime);

        messageElement.textContent = `شكراً لتسجيل حضورك حضره المهندس/ة ${name}`;
        messageElement.style.color = 'green';
        dateTimeElement.textContent = `تم تسجيل الحضور في: ${currentDateTime}`;
    }
});

