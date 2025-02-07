<script>
  import { onMount } from 'svelte'
  import { Link, CartIcon, ArrowDown, Button } from '$lib/index'
  import logo from '$lib/assets/logo.webp'
  export let navigation

  // custom js
  onMount(() => {
    const mediaQuery = window.matchMedia('(max-width: 65rem)'),
      mobileMenu = document.querySelector('.mobileMenu'),
      hider = document.querySelector('.mobileHide'),
      openMenuBtn = document.getElementById('mainMenuOpen'),
      closeMenuBtn = document.getElementById('mobileMenuClose')

    // toggle mobile menu & desktop menu
    function updateMenu() {
      if (mediaQuery.matches) {
        hider.style.display = 'none'
        openMenuBtn.style.display = 'block'
        console.log(9)
      } else {
        hider.style.display = 'block'
        openMenuBtn.style.display = 'none'
      }
    }

    updateMenu()
    mediaQuery.addEventListener('change', updateMenu)

    // open & closing mobile menu
    openMenuBtn.addEventListener('click', showing)

    function showing() {
      mobileMenu.classList.remove('hiding')
      mobileMenu.classList.add('showing')
    }

    closeMenuBtn.addEventListener('click', hiding)
    function hiding() {
      mobileMenu.classList.remove('showing')
      mobileMenu.classList.add('hiding')
    }
  })
</script>

<header>
  <span class="skip-link">
    <Button
      variant="secondair"
      href="#content"
      title="skip to content"
      size="lg"
      aria-label="skip to content"
      data-sveltekit-preload-data="false"
    />
  </span>
  <img src={logo} height="70" width="70" alt="Wogo Logo" />
  <button type="button" id="mainMenuOpen" aria-label="hamburger-button"><span></span></button>
  <nav>
    <ul class="mobileHide">
      {#each navigation.navigationLinksCollection.items as link}
        {#if link.title === 'More'}
          <li class="more-button">
            <button>
              <span class="btn-icon">
                More
                <ArrowDown />
              </span>
            </button>
            <ul class="more-dropdown">
              {#each link.subLinksCollection.items as sublink}
                <li>
                  <Link href={sublink.slug} title={sublink.title} aria-label={sublink.label} />
                </li>
              {/each}
            </ul>
          </li>
        {:else}
          <li>
            <Link
              href={link.slug}
              title={link.title}
              arialabel={link.label}
              color="var(--txt-primary-clr)"
            />
            {#if link.subLinksCollection.items.length > 0}
              <ul class="sub-menu" aria-label="Submenu">
                {#each link.subLinksCollection.items as sublink}
                  <li>
                    <Link
                      href={sublink.slug}
                      title={sublink.title}
                      aria-label={sublink.label}
                      color="var(--txt-dark-clr)"
                    />
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/if}
      {/each}
    </ul>
  </nav>
  <section class="mobileMenu">
    <nav>
      <ul>
        {#each navigation.navigationLinksCollection.items as link}
          {#if link.title === 'More'}
            <li class="more-button">
              <button class="">
                <span class="btn-icon">
                  More
                  <ArrowDown />
                </span>
              </button>
              <ul class="more-dropdown">
                {#each link.subLinksCollection.items as sublink}
                  <li>
                    <Link href={sublink.slug} title={sublink.title} aria-label={sublink.label} />
                  </li>
                {/each}
              </ul>
            </li>
          {:else}
            <li>
              <Link
                href={link.slug}
                title={link.title}
                arialabel={link.label}
                color="var(--txt-primary-clr)"
                filter="var(--filter-drop)"
              />
              {#if link.subLinksCollection.items.length > 0}
                <ul class="sub-menu" aria-label="Submenu">
                  {#each link.subLinksCollection.items as sublink}
                    <li>
                      <Link
                        href={sublink.slug}
                        title={sublink.title}
                        aria-label={sublink.label}
                        color="var(--txt-dark-clr)"
                      />
                    </li>
                  {/each}
                </ul>
              {/if}
            </li>
          {/if}
        {/each}
      </ul>
    </nav>
    <button type="button" id="mobileMenuClose" aria-label="close-menu-button"><span></span></button>
  </section>
  <div class="button-cart-container">
    <CartIcon width="60px" height="60px" fill="var(--accent2-primary)" />
  </div>
</header>

<style>
  .skip-link {
    position: absolute;
    left: -9999px;
    z-index: 999;
    padding: 1em;
    opacity: 0;
  }

  .skip-link:focus-within {
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }

  header {
    display: flex;
    position: sticky;
    background-color: var(--accent1-tertiary);
    top: 0;
    right: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 1.5rem;
    z-index: 900;
  }

  :global(.mobileMenu, #mainMenuOpen) {
    display: none;
  }

  nav li:focus-within .sub-menu,
  nav li:hover .sub-menu {
    display: flex;
    opacity: 1;
  }

  nav li {
    position: relative;
    font-size: var(--fs-md);
    text-transform: lowercase;
    padding: 0.5rem 1rem;
  }
  
  :global(nav li:hover::after) {
    content: "";
    width: 100%;
    height: 2px;
    background: var(--accent2-primary);
    display: block;
    margin: auto;
    transition: 0.5s;
  }

  nav li:last-of-type {
    margin-left: 5px;
  }

  nav ul > li {
    display: inline-block;
  }

  .more-button {
    position: relative;
  }

  .more-button button {
    width: 5rem;
    background: none;
    font-size: var(--fs-md);
    border: none;
    padding: 0;
    color: var(--txt-primary-clr);
  }

  .btn-icon {
    display: flex;
    flex-wrap: nowrap;
    fill: #ffe5d9;
  }

  :global(.more-button svg) {
    height: 0.7em;
    stroke: currentColor;
  }

  .more-dropdown {
    display: none;
    position: absolute;
    top: 150%;
    left: 0;
    background-color: var(--accent2-tertiary);
    border-radius: var(--radius-md);
    overflow: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  .more-button:focus-within .more-dropdown,
  .more-button:hover .more-dropdown {
    display: block;
    opacity: 1;
  }

  .more-dropdown li {
    display: block;
    white-space: nowrap;
  }

  .sub-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: max-content;
    right: 1rem;
    padding: 1rem 0;
    opacity: 0;
    background-color: var(--page-bg-color);
  }

  li:focus-within > .sub-menu {
    display: block;
  }

  .sub-menu .sub-menu li {
    display: flex;
  }

  .button-cart-container {
    display: flex;
    align-items: center;
    position: relative;
    top: 0;
    right: 20px;
    gap: 2rem;
  }

  @media (max-width: 65rem) {
    .mobileHide {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    header {
      justify-content: 0;
    }
    :global(.mobileMenu) {
      display: none;
      position: absolute;
      height: 100vh;
      width: 100vw;
      left: 0;
      top: -100vh;
      background: var(--page-bg-color);
      z-index: 999;
    }

    .mobileMenu nav {
      margin-top: 20%;
    }
    .mobileMenu nav li {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 40vw;
      padding-top: 2rem;
      font-size: 2rem;
    }

    #mainMenuOpen {
      display: none;
      width: 40px;
      height: 30px;
      flex-grow: 0;
      border: 0;
      background: transparent;
      cursor: pointer;
      order: 4;
    }

    #mainMenuOpen span,
    #mainMenuOpen span::before,
    #mainMenuOpen span::after {
      display: block;
      position: absolute;
      content: '';
      width: 40px;
      height: 3px;
      background: var(--accent2-primary);
      border-radius: var(--radius-lg);
      z-index: 998;
    }
    #mainMenuOpen span::before {
      margin-top: -12px;
    }

    #mainMenuOpen span::after {
      margin-top: 12px;
    }

    #mainMenuOpen::before {
      top: -8px;
    }

    #mobileMenuClose {
      display: block;
      position: absolute;
      width: 40px;
      height: 35px;
      flex-grow: 0;
      border: 0;
      background: transparent;
      cursor: pointer;
      order: 4;
      right: 2rem;
      top: 2rem;
    }
    #mobileMenuClose span,
    #mobileMenuClose span::after {
      display: block;
      position: absolute;
      content: '';
      width: 40px;
      height: 3px;
      background: var(--accent2-primary);
      border-radius: var(--radius-lg);
    }

    #mobileMenuClose span {
      rotate: 45deg;
    }

    #mobileMenuClose span::after {
      rotate: 90deg;
    }

    .button-cart-container {
      display: flex;
      margin: 0 auto;
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
      top: 5px;
    }
    :global(.showing) {
      top: 0vh;
      display: block;
    }
    :global(.hiding) {
      display: none;
    }
    @media (prefers-reduced-motion: no-preference) {
      :global(.showing) {
        animation: shower 1s forwards;
        top: -100vh;
        display: block;
      }
      @keyframes shower {
        0% {
          transform: translateY(0vh);
        }
        100% {
          transform: translateY(100vh);
        }
      }
      :global(.hiding) {
        animation: hider 1s forwards;
      }
      @keyframes hider {
        0% {
          display: block;
          transform: translateY(100vh);
        }
        100% {
          display: none;
          transform: translateY(0vh);
        }
      }
    }
  }
  @media (max-width: 35rem) {
    .mobileMenu nav li {
      font-size: 1.5rem;
    }
  }
</style>
