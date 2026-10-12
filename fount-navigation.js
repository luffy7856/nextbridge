(() => {
  const siteHome = "/invest";
  const mainHome = "https://www.thefount.co.kr/";
  const syncLinks = () => {
    document.querySelectorAll(".nav .fount-logo, .nbMobileBrand").forEach((logo) => {
      if (logo.getAttribute("href") !== siteHome) logo.setAttribute("href", siteHome);
      if (logo.getAttribute("aria-label") !== "벤처투자 첫 화면") logo.setAttribute("aria-label", "벤처투자 첫 화면");
    });

    const desktopNav = document.querySelector(".navInner");
    if (desktopNav && !desktopNav.querySelector(":scope > .fount-home-link")) {
      const homeLink = document.createElement("a");
      homeLink.className = "fount-home-link";
      homeLink.href = mainHome;
      homeLink.textContent = "더파운트 홈페이지 ↗";
      desktopNav.insertBefore(homeLink, desktopNav.querySelector(".navCta"));
    }

    const mobileLinks = document.querySelector(".nbMenuLinks");
    if (mobileLinks && !mobileLinks.querySelector(".fount-home-link")) {
      const homeLink = document.createElement("a");
      homeLink.className = "fount-home-link nbFountLink";
      homeLink.href = mainHome;
      homeLink.textContent = "더파운트 홈페이지 ↗";
      mobileLinks.appendChild(homeLink);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncLinks, { once: true });
  } else {
    syncLinks();
  }
  new MutationObserver(syncLinks).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["href"] });
})();
