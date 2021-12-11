// Button Scroll
const scrollTop = document.createElement('template');
scrollTop.innerHTML = `
<div class=title>
    </div>
    <div id="jsScroll" class="scroll" onclick="scrollToTop();">
    <i class="fad fa-arrow-up"></i>
</div>
`;
document.body.appendChild(scrollTop.content)