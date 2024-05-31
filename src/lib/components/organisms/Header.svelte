<script>
  import { Link, Image, CartIcon, BaseButton, ArrowDown } from '$lib/index'
  import logo from '$lib/components/atoms/icons/logo.png'
  export let navigationItems
</script>

<header>
  <a class="skip-link" href="#main">Skip to content</a>
  <Image src={logo} height="70px" width="70px" alt="The Wogo Logo" />
  <button type="button" id="mainMenuOpen" tabindex="-1"><span></span></button>
  <nav>
    <ul>
      {#each navigationItems[0].navigationLinksCollection.items as link}
        {#if link.title === 'More'}
          <li class="more-button">
            <BaseButton
              btnSize="sm"
              icon={ArrowDown}
              iconWidth="16"
              iconHeight="16"
              title="More"
              backgroundColor="var(--btn-primary-bg)"
              color="var(--btn-primary-text-clr)"
            />

            <ul class="more-dropdown">
              {#each link.subLinksCollection.items as sublink}
                <li>
                  <Link
                    href={sublink.slug}
                    aria-label={sublink.label}
                    color="var(--text-dark-color)">{sublink.title}</Link
                  >
                </li>
              {/each}
            </ul>
          </li>
        {:else}
          <li>
            <Link
              href={link.slug}
              title={link.title}
              aria-label={link.label}
              color="hsl(19.6, 100%, 80.2%)"
              filter="drop-shadow(0 0 0.4rem #000)"
            />
            {#if link.subLinksCollection.items.length > 0}
              <ul class="sub-menu" aria-label="Submenu">
                {#each link.subLinksCollection.items as sublink}
                  <li>
                    <Link
                      href={sublink.slug}
                      aria-label={sublink.label}
                      title={sublink.title}
                      color="var(--text-dark-color)"
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
  <div>
    <CartIcon />
  </div>
</header>

<style>
  .skip-link {
    position: absolute;
    left: -9999px;
    z-index: 999;
    padding: 1em;
    background-color: var(--accent2-primary);
    color: white;
    opacity: 0;
  }

  .skip-link:focus {
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }

  header {
    display: flex;
    position: fixed;
    font-weight: 500;
    top: 0;
    right: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 1.5rem;
    z-index: 900;
    font-size: var(--fs-md);
  }

  #mainMenuOpen {
    display: none;
  }

  nav li:focus-within .sub-menu,
  nav li:hover .sub-menu {
    display: flex;
    opacity: 1;
  }

  nav li {
    position: relative;
  }

  nav ul > li {
    display: inline-block;
    list-style: none;
    padding: 0 1rem;
  }

  .more-button {
    position: relative;
  }

  .more-dropdown {
    display: none;
    position: absolute;
    top: 150%;
    left: 0;
    background-color: var(--accent2-tertiary);
    border-radius: 4px;
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
    padding: 0.75rem 1rem;
    white-space: nowrap;
    text-decoration: none;
    color: var(--text-color);
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

  div {
    display: flex;
    align-items: center;
    position: relative;
    top: 0;
    right: 20px;
    gap: 2rem;
  }

  @media (max-width: 60em) {
    header {
      justify-content: 0;
    }

    #mainMenuOpen {
      display: block;
      width: 40px;
      height: 3px;
      flex-grow: 0;
      border: 0;
      background: transparent;
      color: var(--accent2-primary);
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
      border-radius: 3px;
    }

    a:focus,
    a:hover {
      transform: scale(1.2);
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

    #mainMenuOpen + nav {
      position: fixed;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      overflow: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      background: var(--page-bg-color);
      transition:
        top 2s 0.5s,
        opacity 0.5s;
    }
    #mainMenuOpen:focus + nav,
    #mainMenuOpen + nav:focus-within {
      left: 0;
      opacity: 1;
      transition:
        top 0s,
        opacity 0.5s;
    }

    #mainMenuOpen + nav li {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      font-weight: 500;
    }

    #mainMenuOpen + nav > ul:after {
      content: '\2715';
      color: var(--accent2-primary);
      display: block;
      position: absolute;
      top: 1.8rem;
      right: 1.2rem;
      line-height: 1;
      cursor: pointer;
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
      top: 5px;
    }
  }
</style>
