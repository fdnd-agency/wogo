<!-- TO DO:
Toegankelijkheid toepassen -->
<script>
  import { Link, WogoLogo } from '$lib/index'
</script>

<a href="/" class="logo">
  <WogoLogo />
</a>

<a class="hamburger-container" href="#menu-open">
  <div class="hamburger">
    <span></span>
  </div>
</a>

<nav>
  <ul id="menu-open" role="list">
    <li><Link href="/" title="test" /></li>
    <li><Link href="/" title="test" /></li>
    <li><Link href="/" title="test" /></li>
    <li><Link href="/" title="test" /></li>

    <!-- SUB MENU -->
    <a href="#sub-open">open</a>
    <li>
      <Link href="#menu2" title="more" />
      <ul id="menu2" class="sub-menu">
        <li><Link href="/" title="test" /></li>
        <li><Link href="/" title="test" /></li>
        <a href="#sub-close">close</a>
      </ul>
    </li>

    <a href="#menu-close" class="cross">
      <div>
        <span></span>
      </div>
    </a>
  </ul>
</nav>

<style>
  .logo {
    align-self: flex-start;
  }

  .hamburger-container {
    position: absolute;
    right: 24px;
  }

  .hamburger {
    display: block;
    height: 3px;
    width: 40px;
    cursor: pointer;
  }

  .hamburger span,
  .hamburger span::before,
  .hamburger span::after {
    content: '';
    display: block;
    position: absolute;
    width: 40px;
    height: 3px;
    background: var(--accent2-primary);
    border-radius: 3px;
    transition: 0.3s ease-in-out;
  }

  .hamburger span::before {
    margin-top: -12px;
  }

  .hamburger span::after {
    margin-top: 12px;
  }

  .hamburger::before {
    top: -8px;
  }

  .hamburger::after {
    bottom: -8px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
  }

  nav ul {
    gap: 0 1rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a[href='#sub-open'] {
    display: none;
  }

  .sub-menu {
    display: none;
    position: absolute;
  }

  @supports selector(:target) {
    .sub-menu:target {
      display: block;
    }
  }

  .cross {
    position: absolute;
    right: 39px;
    top: 39px;
    width: 40px;
  }

  .cross:before,
  .cross:after {
    content: ' ';
    position: absolute;
    left: 15px;
    width: 40px;
    height: 3px;
    border-radius: 3px;
    background: var(--accent2-primary);
  }
  .cross:before {
    transform: rotate(45deg);
  }
  .cross:after {
    transform: rotate(-45deg);
  }

  nav .cross {
    position: absolute;
    right: 39px;
  }

  .hamburger,
  .cross {
    display: none;
  }

  /* MOBILE SCREEN */
  @media only screen and (max-width: 600px) {
    .hamburger,
    .cross {
      display: block;
    }

    nav {
      display: flex;
    }

    nav ul:nth-child(1) {
      font-size: 3rem;
      display: none;
      position: fixed;
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      text-align: center;
      background: var(--page-bg-color);
      color: var(--accent2-primary);
      animation: reveal-nav 0.25s ease-in forwards;
    }

    @supports selector(:target) {
      nav ul:target {
        display: block;
      }
    }
  }

  @keyframes reveal-nav {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
