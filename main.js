const codeBlocks = document.querySelectorAll('code');
let copyButtons;


// add copy button 
codeBlocks.forEach(block => {
    block.insertAdjacentHTML('afterend', '<button class="copy-button" title="copy button"><i class="fa-solid fa-lg fa-clipboard"></i></button>');
    copyButtons = document.querySelectorAll('.copy-button');
})

// Event Delegation
document.addEventListener('click', e => {
    const target = e.target;

    // Check clicking target
    if (target.classList.contains('copy-button')) {
        // Selecting the code element
        const codeBlock = target.previousElementSibling;
        // Copy code to clipboard
        navigator.clipboard.writeText(codeBlock.textContent);
    }
})