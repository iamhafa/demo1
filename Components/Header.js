const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #85C1E9;">
    <div class="container-fluid">
      <img src="./images/topping.svg" width="40" height="32" class="d-inline-block align-text-top">
      <a class="navbar-brand" href="home.html"><b>Topping Shop</b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="home.html"><i class="fas fa-home" style="font-size: 1.2rem;"></i> Trang chủ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about-us.html"><i class="fas fa-info-square" style="font-size: 1.2rem;"></i> Giới thiệu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="trending.html"><i class="fas fa-chart-line" style="font-size: 1.2rem;"></i> Xu hướng</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
          <style>
            nav .collapse a:hover {
              box-shadow: inset 0 -4px 0 0 #f09d51;
            }
          </style>
      <!-- CART -->
        <span class="cart__btn">
          <span class="menu__icon">
              <i class="fas fa-shopping-basket"></i>
              <div class="cart__items">0</div>
          </span>
        </span>
        <!-- <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
`;
document.body.appendChild(navTemplate.content);