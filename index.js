//Burger Menu
function Burger(setting) {
  let privates = {};
  privates.setting = setting;
  privates.navigation = document.querySelector(privates.setting.navigate);
  if (privates.navigation === null) { return; }

  privates.nav = {
    "navMini": privates.navigation.querySelector(privates.setting.navMini),
    "navList": privates.navigation.querySelector(privates.setting.navList),
    "navLink": privates.navigation.querySelectorAll(privates.setting.navLink),
    "navLinkActive": 0,
  }
  privates.class_active = privates.setting.class_active;
  privates.class_link_active = privates.setting.class_link_active;
  privates.class_on_scroll = privates.setting.class_on_scroll;

  privates.sectionItems = [];
  for (let i = 0; i < privates.nav.navLink.length; i++) {
    privates.sectionItems[i] = document.querySelector(privates.nav.navLink[i].getAttribute("href"));
  }
  //Methods
  this.clickMiniMenu = () => {
    privates.nav.navMini.classList.toggle(privates.class_active);
    privates.nav.navList.classList.toggle(privates.class_active);
    document.body.classList.toggle(privates.class_active);
  }
  this.clickMenuList = (event) => {
    if (event.target.tagName != "A") return;
    //Change class select menu
    // privates.nav.navLink[privates.nav.navLinkActive].classList.remove(privates.class_link_active);
    // privates.nav.navLinkActive = [].indexOf.call(event.target.parentNode, event.target);
    //Scroll to section
    event.preventDefault();
    let offsetTop = document.querySelector(event.target.getAttribute("href")).offsetTop - privates.navigation.offsetHeight;
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });

    //Change class select menu
    // privates.nav.navLink[privates.nav.navLinkActive].classList.add(privates.class_link_active);
    if (privates.nav.navMini.style.display !== "none") {
      this.clickMiniMenu();
    }

  }

  // Change menu on Scroll
  this.animOnScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //Add style of menu on scroll
    if (scrollTop > 0) {
      privates.navigation.classList.add(privates.class_on_scroll);
    } else {
      privates.navigation.classList.remove(privates.class_on_scroll);
    }
    //Change menu item on Scroll
    for (let i = 0; i < privates.sectionItems.length; i++) {
      if (privates.sectionItems[i] != null) {
        let top = privates.sectionItems[i].getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (top <= windowHeight / 4 && top > 0) {
          privates.nav.navLink[privates.nav.navLinkActive].classList.remove(privates.class_link_active);
          privates.nav.navLinkActive = i;
          privates.nav.navLink[privates.nav.navLinkActive].classList.add(privates.class_link_active);
        }
      }
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
  if (privates.sectionItems.length > 0) {
    window.addEventListener('scroll', () => {
      this.eventOnScroll();
    });
  }
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

new Burger({
  "navigate": "nav",
  "navMini": ".nav__mini",
  "navList": ".nav__list",
  "navLink": ".nav__link",
  "class_active": "active-burger",
  "class_link_active": "nav__link_active",
  "class_on_scroll": "activ-scroll",
})

