// 1. Refresh Data Simulation (تحديث البيانات وتغيير الأرقام بحركة تفاعلية)
const refreshBtn = document.querySelector('.btn-refresh');
const metricNumbers = document.querySelectorAll('.metric-card .number');

if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
        // تغيير شكل الأيقونة لتأثير التحميل
        const icon = refreshBtn.querySelector('i');
        icon.classList.add('fa-spin');
        
        // محاكاة تحميل البيانات وتغيير الأرقام عشوائياً
        setTimeout(() => {
            icon.classList.remove('fa-spin');
            
            metricNumbers.forEach((num, index) => {
                let currentNum = parseFloat(num.innerText.replace(/,/g, ''));
                let randomChange;
                
                if (index === 0) { // Automation Tasks
                    randomChange = Math.floor(Math.random() * 20) + 5;
                    num.innerText = (currentNum + randomChange).toLocaleString();
                } else if (index === 1) { // Factory Efficiency
                    randomChange = (Math.random() * 2 - 1).toFixed(1);
                    let newEff = (parseFloat(currentNum) + parseFloat(randomChange)).toFixed(1);
                    if (newEff > 100) newEff = 100;
                    num.innerText = newEff + '%';
                }
            });
            
            alert('Dashboard data updated successfully!');
        }, 800);
    });
}

// 2. Action Buttons Alerts (التفاعل مع أزرار الجدول)
const deleteButtons = document.querySelectorAll('.btn-delete');
deleteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        const processName = row.querySelector('strong').innerText;
        
        if (confirm(`Are you sure you want to stop and delete: "${processName}"?`)) {
            row.style.opacity = '0.5';
            setTimeout(() => {
                row.remove();
            }, 300);
        }
    });
});

// 3. Menu Items Active State (تنقل نشط بين عناصر القائمة)
const menuItems = document.querySelectorAll('.sidebar-menu li');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});