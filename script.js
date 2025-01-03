document.addEventListener('DOMContentLoaded', function () {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const messageElement = document.getElementById('message');
    const instructionElement = document.getElementById('instruction');
    const dateTimeElement = document.getElementById('dateTime');

    // تحقق إذا كان الاسم موجودًا مسبقًا في localStorage
    const savedName = localStorage.getItem('userName');
    const savedDateTime = localStorage.getItem('userDateTime');

    if (savedName) {
        // إذا كان الاسم موجودًا
        messageElement.textContent = `مرحبًا ${savedName}! تم تسجيل حضورك مسبقًا.`;
        dateTimeElement.textContent = `تم التسجيل في: ${savedDateTime}`;
        nameForm.style.display = 'none'; // إخفاء النموذج
        instructionElement.style.display = 'none'; // إخفاء التعليمات
    }

    // التعامل مع إرسال النموذج
    nameForm.addEventListener('submit', function (event) {
        event.preventDefault(); // منع الإرسال الافتراضي للنموذج

        const userName = nameInput.value.trim();
        if (!userName) {
            messageElement.textContent = "من فضلك أدخل اسمًا صالحًا.";
            messageElement.style.color = 'red';
            return;
        }

        // تخزين الاسم وتاريخ التسجيل
        const currentDateTime = new Date().toLocaleString('ar-EG');
        localStorage.setItem('userName', userName);
        localStorage.setItem('userDateTime', currentDateTime);

        // تحديث الرسائل والواجهة
        messageElement.textContent = `شكراً لتسجيل حضورك، ${userName}!`;
        messageElement.style.color = 'green';
        dateTimeElement.textContent = `تم التسجيل في: ${currentDateTime}`;
        nameForm.style.display = 'none'; // إخفاء النموذج
        instructionElement.style.display = 'none'; // إخفاء التعليمات
    });
});
