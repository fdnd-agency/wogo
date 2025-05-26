<script>
 
  import { Reviews, GiftCard} from '$lib/index'
  export let items
</script>


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
</style>
