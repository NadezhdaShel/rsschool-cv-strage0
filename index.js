function Menu(setting) {
  let privates = {};
  privates.setting = setting;
  privates.navigation = document.querySelector(privates.setting.navigate);
  if (privates.navigation === null) { return; }
  privates.navPosition = privates.navigation.offsetTop;
  privates.nav = {
    "navMini": privates.navigation.querySelector(privates.setting.navMini),
    "navList": privates.navigation.querySelector(privates.setting.navList),
    "navLink": privates.navigation.querySelectorAll(privates.setting.navLink),
  }
  privates.class_active = privates.setting.class_active;
  privates.class_link_active = privates.setting.class_link_active;
  privates.class_on_scroll = privates.setting.class_on_scroll;

  //Methods
  this.clickMiniMenu = () => {
    privates.nav.navMini.classList.toggle(privates.class_active);
    privates.nav.navList.classList.toggle(privates.class_active);
    document.body.classList.toggle(privates.class_active);
  }
  this.clickMenuList = (event) => {
    if (event.target.tagName != "A") return;
    //Change class select menu
    if (window.matchMedia(`(min-width: ${setting.break_point + 1}px)`).matches) {
      event.target.classList.add(privates.class_link_active);
    }
    //Scroll to section
    event.preventDefault();
    let offsetTop = document.querySelector(event.target.getAttribute("href")).offsetTop - privates.navigation.offsetHeight;
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
    //Change class select menu
    if (window.matchMedia(`(min-width: ${setting.break_point + 1}px)`).matches) {
      scrollTimeout = setTimeout(() => {
        event.target.classList.remove(privates.class_link_active);
      }, 1000);
    }
    //Close burger
    if (window.matchMedia(`(max-width: ${setting.break_point}px)`).matches) {
      this.clickMiniMenu();
    }
  }

  // Change menu on Scroll
  this.animOnScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    //Add style of menu on scroll
    if (scrollTop > privates.navPosition) {
      privates.navigation.classList.add(privates.class_on_scroll);
    } else {
      privates.navigation.classList.remove(privates.class_on_scroll);
    }
  }
  this.eventOnScroll = () => {
    let scrollTimeout;
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        this.animOnScroll();
      }, 200);
    }
  }

  //Events
  window.addEventListener('scroll', () => {
    this.eventOnScroll();
  });

  if (privates.nav.navMini !== null) {
    privates.nav.navMini.addEventListener('click', () => {
      this.clickMiniMenu();
    });
  }
  if (privates.nav.navList !== null) {
    privates.nav.navList.addEventListener('click', (event) => {
      this.clickMenuList(event);
    });
  }
}

new Menu({
  "navigate": ".header__navbar",
  "navMini": ".nav__mini",
  "navList": ".nav__list",
  "navLink": ".nav__link",
  "class_active": "active-burger",
  "class_link_active": "nav__link_active",
  "class_on_scroll": "activ-scroll",
  "break_point": 768,
})

