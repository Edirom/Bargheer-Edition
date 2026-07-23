// add event listener to all elements with attribute data-tipped-options (capture also elements added later to the DOM)
document.addEventListener('mouseover', function(e) {
    if (e.target.hasAttribute('data-tipped-options')) {
        // handle mouseover event
        var options = e.target.getAttribute('data-tipped-options');
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

document.addEventListener('mouseout', function(e) {
    if (e.target.hasAttribute('data-tipped-options')) {
        // handle mouseout event
        var options = e.target.getAttribute('data-tipped-options');
        var referencedElementId = options.match(/inline:\s*'([^']+)'/)[1];
        var referencedElement = document.getElementById(referencedElementId);
        if (referencedElement) {
            referencedElement.style.display = 'none';
        }
    }
}, true);