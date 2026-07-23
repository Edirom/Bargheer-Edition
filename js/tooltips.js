// add event listener to all elements with class inline-comment (capture also elements added later to the DOM)
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('inline-comment')) {
        
        // get attribute data-tipped-options from parent element
        var parentElement = e.target.parentElement;
        var options = parentElement.getAttribute('data-tipped-options');
        var referencedElementId = options.match(/inline:\s*'([^']+)'/)[1];
        var referencedElement = document.getElementById(referencedElementId);
        if (referencedElement) {
            referencedElement.style.display = 'block';
            referencedElement.style.background = '#eee';
            referencedElement.style.border = '1px dashed black';
            referencedElement.style.padding = '10px';
        }
    }
}, true);

// add event listener to all elements with class inline-comment (capture also elements added later to the DOM)
document.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('inline-comment')) {
        var parentElement = e.target.parentElement;
        var options = parentElement.getAttribute('data-tipped-options');
        var referencedElementId = options.match(/inline:\s*'([^']+)'/)[1];
        var referencedElement = document.getElementById(referencedElementId);
        if (referencedElement) {
            if (!referencedElement.classList.contains('show')) {
                referencedElement.style.display = 'none';
            }
        }
    }
}, true);

// add event listener to all elements with class inline-comment (capture also elements added later to the DOM)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('inline-comment')) {
        var parentElement = e.target.parentElement;
        var options = parentElement.getAttribute('data-tipped-options');
        var referencedElementId = options.match(/inline:\s*'([^']+)'/)[1];
        var referencedElement = document.getElementById(referencedElementId);
        if (referencedElement) {
            // toggle display of referenced element depending on its current state
            if (referencedElement.classList.contains('show')) {
                referencedElement.classList.remove('show');
                referencedElement.style.display = 'none';
            } else {
                referencedElement.classList.add('show');
            }
        }
    }
}, true);