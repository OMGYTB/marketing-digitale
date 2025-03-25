document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Ferme toutes les autres questions
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Ouvre/ferme la question cliquée
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

