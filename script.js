document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.show-translation-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const translation = this.nextElementSibling;
            const translationText = this.getAttribute('data-translation');

            if (translation.style.display === 'block') {
                translation.style.display = 'none';
                this.textContent = '🔍 Show Translation';
            } else {
                translation.textContent = translationText;
                translation.style.display = 'block';
                this.textContent = '🚫 Hide Translation';
            }
        });
    });
});