class DynamicNavbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="navbar p-1">
            <nav class="container d-flex item-center justify-space-between">
                <div class="logo">
                    <a href="#"><img src="./assets/images/home-img/logo.webp" alt=""></a>
                </div>
                <div class="menu-and-buttons d-flex item-center gap-2">
                    <div class="menu">
                        <ul class="menu-list d-flex gap-4">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="publications.html">Publications</a></li>
                            <li><a href="feedback.html">Feedback</a></li>
                        </ul>
                    </div>
                    <div class="two-buttons d-flex item-center gap-2">
                        <a href="#" class="get-a-franchise border-1">Get a Franchise</a>
                        <a href="#" class="order-online border-1 d-flex gap-1 item-center">Order Online <i
                                class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </nav>
        </div>
      `;
    }
  }
      
  customElements.define('dynamic-navbar', DynamicNavbar);


  class DynamicFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="footer pt-7 pb-7">
            <div class="container">
                <div class="footer-infO d-flex gap-5">
                    <div class="img-para d-flex flex-direction gap-3">
                        <img src="./assets/images/home-img/logo.webp" alt="">
                        <p>The Salt’n Pepper Restaurants are an example of gracious dinning, outstanding service,
                            extraordinary classic and contemporary cuisine. The restaurants have become the ultimate dinning
                            destinations in Lahore. From family occasions to business dinner and moments of the heart, this
                            place is where unforgettable memories are made.</p>
    
                            <div class="terms-policy d-flex gap-2">
                                <a href="#" class="terms link">Terms & Conditions</a>
                            <a href="#" class="privacy link">Privacy Policy</a>
                            </div>
                    </div>
                    <div class="site-links d-flex flex-direction gap-4">
                        <h2 class="f-heading">Site Links</h2>
                        <ul class="menu-list d-flex flex-direction gap-2">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="publications.html">Publications</a></li>
                            <li><a href="feedback.html">Feedback</a></li>
                        </ul>
                    </div>
                    <div class="contact-us d-flex flex-direction gap-4">
                        <h2 class="f-heading">Contact Us</h2>
                        <div class="numbre d-flex flex-direction gap-2">
                            <a href="#" class="numbers link">+92 42 358 509 31 (Head Office)</a>
                        <a href="#" class="numbers link">+92 42 358 509 30 (Head Office)</a>
                        <a href="#" class="numbers link">+92 42 111 100 678 (Delivery)</a>
                        <a href="#" class="numbers link">+92 03 111 444 610 (Delivery)</a>
                        <a href="#" class="email link">snpfood@brain.net.pk</a>
                        <p>23-Usman Block, New GardenTown, Lahore, Pakistan</p>
                        </div>
                    </div>
                    <div class="follow-us d-flex flex-direction gap-4">
                        <div class="social-medias d-flex gap-1 justify-center">
                            <i class="fa-brands fa-facebook-f social-icon"></i>
                            <i class="fa-brands fa-instagram social-icon"></i>
                            <i class="fa-brands fa-twitter social-icon"></i>
                        </div>
                        <div class="clients d-flex flex-direction gap-1">
                            <img src="./assets/images/home-img/app-store.webp" alt="">
                            <img src="./assets/images/home-img/google.webp" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
      `;
    }
  }
      
  customElements.define('dynamic-footer', DynamicFooter);