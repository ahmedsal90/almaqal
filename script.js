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
    event.preventDefault(); // منع إرسال النموذج بشكل تقليدي

    let name = document.getElementById('nameInput').value.trim();
    let messageElement = document.getElementById('message');
    let dateTimeElement = document.getElementById('dateTime');
    let instructionElement = document.getElementById('instruction');

    if (!name) {
        messageElement.textContent = "من فضلك أدخل اسمًا صالحًا.";
        messageElement.style.color = 'red';
    } else {
        // حفظ الاسم ووقت الإدخال في localStorage
        let currentDateTime = new Date().toLocaleString('ar-EG');
        localStorage.setItem('userName', name);
        localStorage.setItem('userDateTime', currentDateTime);

        messageElement.textContent = `شكراً لتسجيل حضورك حضره المهندس/ة ${name}`;
        messageElement.style.color = 'green';
        document.getElementById('nameForm').style.display = 'none'; // إخفاء النموذج
        instructionElement.style.display = 'none'; // إخفاء التعليمات
        dateTimeElement.textContent = `تم تسجيل الحضور في: ${currentDateTime}`;
    }
});

// تحسين تجربة المستخدم
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nameForm');
    form.addEventListener('input', (e) => {
        const input = e.target;
        if (input.value.trim().length > 0) {
            input.style.borderColor = '#4CAF50';
        } else {
            input.style.borderColor = 'red';
        }
    });

    // إضافة رسالة ترحيب عند الدخول لأول مرة
    if (!localStorage.getItem('userName')) {
        setTimeout(() => {
            alert("مرحبًا بك في الموقع! نرجو تسجيل حضورك للاستفادة من الفعالية.");
        }, 1000);
    }
});
