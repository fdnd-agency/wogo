<script lang="ts">
  import { Link, WogoLogo } from '$lib/index'
  export let items: any
</script>

<a class="skip-link" href="#main">Skip to content</a>

<WogoLogo />

<button type="button" id="mainMenuOpen" tabindex="-1" hidden><span></span></button>
<nav>
  <ul>
    {#each items as item}
      <li>
        <Link href={item.url} title={item.internalName} />
        {#if item.subLinksCollection.items.length > 0}
          <ul class="sub-menu">
            {#each item.subLinksCollection.items as subItem}
              <li><Link href={subItem.url} title={subItem.internalName} /></li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  .sub-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: max-content;
    right: 1rem;
    padding: 1rem 0;
    opacity: 0;
  }

  .sub-menu .sub-menu li {
    display: flex;
  }

  nav li:focus-within .sub-menu,
  nav li:hover .sub-menu {
    display: flex;
    opacity: 1;
  }

  nav li {
    position: relative; /* Nodig voor de positionering van het submenu */
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
  nav ul > li {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 500;
    list-style: none;
    padding: 0 1rem;
  }

  @media (max-width: 40rem) {
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
      content: 'close';
      display: block;
      position: absolute;
      top: 1.5rem;
      right: 1rem;
      font-size: 1.5rem;
      line-height: 1;
      cursor: pointer;
    }
  }
</style>
