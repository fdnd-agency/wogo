<script>
  import { Header, Footer } from '$lib/index'
  export let data

  import { onNavigate } from '$app/navigation';
   onNavigate((navigation) => {
       if (!document.startViewTransition) return;
       return new Promise((resolve) => {
           document.startViewTransition(async () => {
               resolve();
               await navigation.complete;
           });
       });
   });
</script>

<Header navigation={data.navigation} />

<main id="content">
  <slot />
</main>

<Footer footerItems={data.footer} />