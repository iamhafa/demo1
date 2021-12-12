const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
  <nav class="navbar navbar-expand-md navbar-light position-absolute top-0 start-0 end-0" style="background-color: #AED6F1 ;">
    <div class="container-fluid">
      <img src="./images/topping.svg" width="40" height="32" class="d-inline-block align-text-top">
      <a class="navbar-brand" href="home.html"><b>Topping Shop</b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="home.html"><i class="fas fa-home" style="font-size: 1.1rem;"></i> Trang chủ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#service"><i class="fas fa-list" style:"font-size: 1.1rem"></i> Dịch vụ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#product"><i class="fas fa-shopping-cart" style:"font-size: 1.1rem"></i> Mua sắm</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about-us.html"><i class="fas fa-info-square" style="font-size: 1.1rem;"></i> Giới thiệu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="trending.html"><i class="fas fa-chart-line" style="font-size: 1.1rem;"></i> Xu hướng</a>
          </li>
        </ul>
          <style>
            nav .collapse a:hover {
              box-shadow: inset 0 -4px 0 0 #f09d51;
              max-width: 200px
            }
          </style>
          
      <!-- Cart -->
        <span class="cart__btn">
          <span class="menu__icon">
              <i class="fas fa-shopping-basket"></i>
              <div class="cart__items">0</div>
          </span>
        </span>
        
      </div>
    </div>
  </nav>
`;
document.body.appendChild(navTemplate.content);