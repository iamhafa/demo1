var footerNewTemplate = document.createElement('template');

footerNewTemplate.innerHTML = `
<footer id="footer">
        <div class="footer-message">
        <div class="footer-1">
            <img src="../../images/footer-1.svg" alt="footer-1" class="footer-image">
        </div>
        <div class="footer-distance"></div>
        <div class="footer-2">
        </div>
</footer>
`;

document.body.appendChild(footerNewTemplate.content)