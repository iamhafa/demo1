var footerNewTemplate = document.createElement('template')
footerNewTemplate.innerHTML = `
<footer id="footer">
        <div class="footer-message">
        <div class="footer-backgroundImage">
            <img src="./images/footer.svg" alt="footer" class="footer-image">
        </div>
        <div class="footer-backgroundColor">
            
        </div>
            
            <style>
                ::selection{
                    color: #fff;
                    background: #F39C12;
                }
                #footer{
                    background-color: #f0ede8;
                    height: auto;
                    margin-top: 8rem;
                }
                .footer-image {
                    margin-left: 2rem;
                    margin-right: 2rem;
                }
                .footer-backgroundImage img{
                    margin-top: 7rem;
                    background-image: url(./images/footer-shine.svg);
                }
                .footer-backgroundColor{
                    background-color: #0058A3;
                    height: 200px;
                    width: 100%;
                }
            </style>
    </footer>
`;
document.body.appendChild(footerNewTemplate.content)