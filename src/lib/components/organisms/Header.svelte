<script>
  import { Link, Image, CartIcon, Translation } from '$lib/index'
  import logo from '$lib/components/atoms/icons/logo.png'

  export let navigationItems
</script>

<header>
  <a class="skip-link" href="#main">Skip to content</a>
  <Image src={logo} height="80" width="80" alt="The Wogo Logo" />
  <button type="button" id="mainMenuOpen" tabindex="-1"><span></span></button>
  <nav>
    <ul>
      {#each navigationItems[0].navigationLinksCollection.items as link}
        <li>
          <Link href={link.slug} title={link.title} aria-label={link.label} noHover={true} />
          {#if link.subLinksCollection.items.length > 0}
            <ul class="sub-menu" aria-label="Submenu">
              {#each link.subLinksCollection.items as subItem}
                <li>
                  <Link
                    href={subItem.slug}
                    aria-label={link.label}
                    title={subItem.title}
                    noHover={true}
                  />
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
  <div>
    <Translation />
    <CartIcon />
  </div>
</header>

<style>
  header {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 1.5rem;
    z-index: 900;
  }

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
    font-size: var(--fs-md);
    font-weight: 500;
    list-style: none;
    padding: 0 1rem;
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
      order: 4;
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
      top: 5px;
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
      font-size: 3rem;
      font-weight: 500;
    }

    #mainMenuOpen + nav > ul:after {
      content: '\2715';
      color: var(--accent2-primary);
      display: block;
      position: absolute;
      top: 1.8rem;
      right: 1.2rem;
      font-size: 2.8rem;
      line-height: 1;
      cursor: pointer;
    }
  }
</style>
