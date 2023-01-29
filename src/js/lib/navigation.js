(function () {
    const siteNavigation = document.getElementById('navigation');
    const mobileNavTrigger = document.getElementById('navigation-header-mobile-toggle');
    const mobileNavTriggerTitle = document.getElementById('navigation-header-mobile-toggle-title');
    const submenuToggleButtons = document.querySelectorAll('.navigation-menu__submenu-toggle');
    const headerNavigationLinks = document.querySelectorAll('.navigation-menu__link');
    const footerNavigationLinks = document.querySelectorAll('.footer-navigation__link');
    let mobileMenuOpen = false;

    // Mobile Menu Toggle Active
    function toggleMobileActive () {
      mobileMenuOpen = !mobileMenuOpen;
	    siteNavigation.classList.toggle('navigation--mobile-active');
		  mobileNavTriggerTitle.innerHTML = mobileMenuOpen ? 'Close' : 'Menu';
	  }

    // Toggle Submenu Elements
    function toggleSubmenuActive (submenuParent) {
	  	submenuParent.classList.toggle('navigation-menu__item--submenu-active');
  	}

    // Adding Event Listeners to Touch and Click Events
    function setupClickEventListener (element, functionCall) {
      if (typeof window.ontouchstart === 'undefined') {
        element.addEventListener('click', functionCall)
      } else {
        element.addEventListener('touchstart', functionCall)
      }
    }

    // Set Sticky Navigation on Scroll
    function setStickyNav (currentScroll) {
      if (currentScroll > 0) {
        siteNavigation.classList.add('navigation--sticky')
      } else {
        siteNavigation.classList.remove('navigation--sticky')
      }
    }

    // Add Event Listener to Window to Check if Navigation Has Scrolled
    function handleScroll () {
      const currentScroll = document.scrollingElement ? document.scrollingElement.scrollTop : document.documentElement.scrollTop

      setStickyNav(currentScroll)
    }

    // Initialize Mobile Menu Toggle Event
	  setupClickEventListener(mobileNavTrigger, toggleMobileActive)

    // Initialize Submenu Toggle Event
    for(let i = 0; i < submenuToggleButtons.length;  i++) {
      setupClickEventListener(submenuToggleButtons[i], () => {
        const submenuParent = submenuToggleButtons[i].closest('.navigation-menu__item--has-submenu')
        toggleSubmenuActive(submenuParent)
		  })
    }

    
    /**
     * When a navigation link is clicked, prevent the default behavior, get the target element's href
     * attribute, find the element with the matching id, and scroll to it
     * @param event - The event object that is passed to the event handler.
     */
    function handleNavigationLinkClick (event) {
      event.preventDefault()
      const target = event.currentTarget
      const targetHref = target.getAttribute('href')
      const targetElement = document.querySelector(targetHref)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }

    /** 
     * Using the spread operator to combine the two arrays into one, then looping through the array and adding 
     * the event listener to each element.
    */
    [...headerNavigationLinks, ...footerNavigationLinks].forEach(link => {
      setupClickEventListener(link, handleNavigationLinkClick)
    })

    // Add Event Listener to Window to Check if Navigation Has Scrolled
    window.addEventListener('scroll', handleScroll)
})();
