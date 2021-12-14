const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
<header class="navbar navbar-expand-md bd-navbar nav-dark position-absolute top-0 start-0 end-0 shadow-sm">
  <nav class="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">
    <a class="navbar-brand p-0 me-2" href="home.html" aria-label="Bootstrap">
      <img src="../images/topping.svg" width="40" height="35" class="d-block my-1">
    </a>

    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
      </svg>
    </button>

    <div class="navbar-collapse collapse show" id="bdNavbar" style="">
      <ul class="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link tab p-2 active text" href="home.html"><i class="fas fa-home" style="font-size: 1.2rem;"></i> Trang chủ</a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link tab p-2 text" aria-current="true" href="#product"><i class="fas fa-shopping-cart"></i> Mua sắm</a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link tab p-2 text" href="#policy"><i class="fas fa-phone-alt"></i> CSKH</a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link tab p-2 text" href="Trending.html"><i class="fas fa-chart-line"></i> Xu hướng</a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link tab p-2 text" href="About-us.html"><i class="fas fa-info-square"></i> Giới thiệu</a>
        </li>
      </ul>

      <hr class="d-md-none text-dark">

      <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link p-2" href="https://github.com/iamhafa" target="_blank" rel="noopener">
          <i class="fab fa-github icon"></i>
          </a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link p-2" href="https://instagram.com/iamhafa" target="_blank" rel="noopener">
          <i class="fab fa-instagram icon"></i>
          </a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link p-2" href="https://twitter.com/iamhafa" target="_blank" rel="noopener">
            <i class="fab fa-twitter icon"></i>
          </a>
        </li>
        <li class="nav-item col-6 col-md-auto">
          <a class="nav-link p-2">
          </a>
        </li>

        <!-- Cart -->
        <span class="cart__btn">
          <span class="menu__icon">
              <i class="fas fa-shopping-basket"></i>
              <div class="cart__items">0</div>
          </span>
        </span>
      </ul>

      
    </div>
  </nav>
</header>
`;
document.body.appendChild(navTemplate.content);