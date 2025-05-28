<script>
 
  import { Reviews, GiftCard} from '$lib/index'
  export let items
</script>

<h1>Reviews</h1>
<div class="wrapper-giftcard-review">
  <Reviews reviews={items[4].componentsCollection.items} />
  <GiftCard items={items?.[3]}/>
</div>
<style>
  .wrapper-giftcard-review {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 
  h1 {
    color: var(--accent2-primary);
    text-align: center;
  
  }

  /* SCROLL DRIVEN ANIMATION  */
  @keyframes reveal {
		from {
			opacity: 0;
			transform: translateY(50%);
		}
		40% {
			opacity: 1;
			transform: translateY(0);
		}
  }
@media (min-width: 50em) {
  .wrapper-giftcard-review {
    display: flex;
    flex-direction: row;
  }

}


  @media (prefers-reduced-motion: no-preference) {
    /* article {
      animation: reveal linear forwards;
      animation-timeline: view();
    } */
  }

  @media (min-width: 50em) {
    .wrapper-giftcard-review {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

  }
</style>
