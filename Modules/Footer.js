const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<footer class="bd-footer py-5 mt-5 bg-light">
  <div class="container py-5">
  <img src="./images/footer-daylight.svg" alt="" style="margin-top: 5rem; background-color: antiquewhite;">
  <div style="background-color: #0058A3; height: 162px; width: 100%;"></div>
    <div class="row">
      <div class="col-lg-3 mb-3">
        <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="home.html" aria-label="Topping Shop">
          <img src="./images/topping.svg" width="40" height="32" class="d-inline-block align-text-top">
          <span class="fs-5">Topping Shop</span>
        </a>
        <ul class="list-unstyled small text-muted">
          <li class="mb-2">Mang tiện nghi tới ngay bên bạn &hearts;</li>
          <li class="mb-2"></li>
          <li class="mb-2"></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/">Home</a></li>
          <li class="mb-2"><a href="/docs/5.1/">Docs</a></li>
          <li class="mb-2"><a href="/docs/5.1/examples/">Examples</a></li>
          <li class="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
          <li class="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Guides</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="/docs/5.1/getting-started/">Getting started</a></li>
          <li class="mb-2"><a href="/docs/5.1/examples/starter-template/">Starter template</a></li>
          <li class="mb-2"><a href="/docs/5.1/getting-started/webpack/">Webpack</a></li>
          <li class="mb-2"><a href="/docs/5.1/getting-started/parcel/">Parcel</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Projects</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap">Bootstrap 5</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap 4</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/icons">Icons</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/rfs">RFS</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap-npm-starter">npm starter</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3">
        <h5>Community</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap/issues">Issues</a></li>
          <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions">Discussions</a></li>
          <li class="mb-2"><a href="https://github.com/sponsors/twbs">Corporate sponsors</a></li>
          <li class="mb-2"><a href="https://opencollective.com/bootstrap">Open Collective</a></li>
          <li class="mb-2"><a href="https://bootstrap-slack.herokuapp.com/">Slack</a></li>
          <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5">Stack Overflow</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
`;

document.body.appendChild(footerTemplate.content)