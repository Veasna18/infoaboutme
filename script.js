function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(sec => {
        sec.style.display = 'none';
        sec.classList.remove('active');
    });

    const target = document.getElementById(sectionId);
    if (target) {
        // បង្ហាញតាមប្រភេទ Layout
        target.style.display = (sectionId === 'pageinfo') ? 'flex' : 'block';
        
        setTimeout(() => {
            target.classList.add('active');
        }, 10);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function toggleDark() {
    const body = document.body;
    const btn = document.getElementById('mode-btn');
    
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
}

// ចាប់ផ្តើមជាមួយទំព័រ Home
document.addEventListener('DOMContentLoaded', () => {
    showSection('pageinfo');
});