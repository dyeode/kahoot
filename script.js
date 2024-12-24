javascript:(function(){
    function toggleCheatMode() {
        const cheatMode = document.getElementById('cheatModeToggle');
        if (cheatMode) {
            cheatMode.checked = !cheatMode.checked;
            applyCheatMode(cheatMode.checked);
        }
    }
    function applyCheatMode(enabled) {
        const questions = document.querySelectorAll('.question');
        questions.forEach(question => {
            const answers = question.querySelectorAll('.option');
            answers.forEach(answer => {
                const isCorrect = answer.getAttribute('data-correct') === 'true';
                answer.style.backgroundColor = enabled ? (isCorrect ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)') : '';
            });
        });
    }
    const toggleDiv = document.createElement('div');
    toggleDiv.style.position = 'fixed';
    toggleDiv.style.bottom = '10px';
    toggleDiv.style.right = '10px';
    toggleDiv.style.zIndex = '10000';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'cheatModeToggle';
    checkbox.onchange = function() { applyCheatMode(this.checked); };

    const label = document.createElement('label');
    label.htmlFor = 'cheatModeToggle';
    label.appendChild(document.createTextNode('Cheat Mode'));

    toggleDiv.appendChild(checkbox);
    toggleDiv.appendChild(label);
    document.body.appendChild(toggleDiv);
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                Array.from(mutation.addedNodes).forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('question')) {
                        applyCheatMode(document.getElementById('cheatModeToggle').checked);
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'c' && event.ctrlKey) {
            toggleCheatMode();
            event.preventDefault();
        }
    });
})();
