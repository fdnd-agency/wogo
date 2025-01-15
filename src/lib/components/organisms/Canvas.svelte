<div class="canvas">
    <!-- Main road -->
    <div class="road"></div>

    <!-- Appartment building -->
    <div class="building">
        <div class="windows"></div>
        <div class="windows"></div>
    </div>

    <!-- Car -->
    <div class="car">
        <div class="roof"></div>
        <div class="wheel"></div>
        <div class="wheel"></div>
        <div class="headlight"></div>
        <div class="windshield"></div>
    </div>

    <!-- Appartment building with porch -->
    <div class="building">
        <div class="windows"></div>
        <div class="windows"></div>
        <div class="windows"></div>
        <div class="windows"></div>
        <div class="porch">
            <div class="support"></div>
            <div class="stairs"></div>
            <div class="floor"></div>
            <div class="rail"></div>
        </div>
    </div>

    <!-- House -->
    <div class="house">
        <div class="door">
            <div class="doorknob"></div>
        </div>
        <div class="crossed-window"></div>
        <div class="crossed-window"></div>
    </div>
    <div class="chimney"></div>
    <div class="roof-trim"></div>

    <!-- Bridge elements -->  
    <div class="bridge">
        <div class="outer-road"></div>
        <div class="lever">
            <div class="rope"></div>
        </div>
        <div class="road">
            <div class="fence"></div>
        </div>
    </div>
    <div class="bridge">
        <div class="outer-road"></div>
        <div class="lever">
            <div class="rope"></div>
        </div>
        <div class="road">
            <div class="fence"></div>
        </div>
    </div>
</div>

<style>
  /* Canvas */
  .canvas {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 15rem;
  }
  .canvas div {
      position: absolute;
  }

  /* Main road */
  .road {
      width: 100%;
      height: 1rem;
      background: var(--accent2-primary);
      bottom: 0;
  }

  /* House */
  .house {
      width: 12rem;
      aspect-ratio: 1;
      bottom: 1rem;
      clip-path: polygon(0 100%, 0 50%, 33% 15%, 66% 50%, 100% 66%, 100% 100%);        
      background: var(--accent2-primary);
  }
  .door {
      width: 2rem;
      height: 3rem;
      bottom: 0;
      right: 1rem;
      background: white;
      transform-origin: right;
      transition: 0.5s ease;
  }
  .doorknob {
      content: "";
      position: absolute;
      width: 0.4rem;
      aspect-ratio: 1;
      border-radius: 50px;
      background: var(--page-bg-color);
      bottom: 1rem;
      left: 0.25rem;
  }
  .crossed-window {
      width: 2rem;
      aspect-ratio: 1;
      bottom: 1rem;
      left: 1.4rem;
      background: linear-gradient(
          to right,
          transparent 45%,
          var(--accent2-primary) 45% 55%,
          transparent 55%
      ), linear-gradient(
          var(--page-bg-color) 45%,
          var(--accent2-primary) 45% 55%,
          var(--page-bg-color) 55%
      );
  }
  .crossed-window:last-of-type {
      left: 4.8rem;
  }
  .roof-trim {
      width: 12.5rem;
      aspect-ratio: 1;
      bottom: 1rem;
      clip-path: polygon(0 57%, 0 50%, 33% 15%, 70% 48%, 100% 62%, 100% 71%, 66% 60%, 33% 23%);
      background: var(--accent2-primary);
  }
  .chimney {
      height: 3rem;
      width: 1.5rem;
      background: var(--accent2-primary);
      left: 7rem;
      top: 5rem;
  }
  .chimney::before {
      content: "";
      position: absolute;
      width: 130%;
      height: 0.5rem;
      left: -15%;
      background: var(--accent2-primary);
  }

  /* Car */
  .car {
      width: 8rem;
      height: 2rem;
      background: var(--accent2-primary);
      bottom: 1.5rem;
      left: 88rem;
      animation: driving-car 30s infinite;
  }
  @keyframes driving-car {
      0% {
          transform: translateX(0);
      } 
      10%, 20% {
          transform: translateX(-20rem);
      }
      100% {
          transform: translateX(-150rem);
      }
  }
  .wheel {
      width: 2rem;
      aspect-ratio: 1;
      background: red;
      border-radius: 50px;
      top: 0.5rem;
      left: 1rem;
      background: radial-gradient(
          var(--accent2-primary) 50%,
          var(--page-bg-color) 50%
      );
  }
  .wheel:nth-of-type(2) {
      top: 0.5rem;
      left: 5.5rem;
  }
  .roof {
      width: 6rem;
      height: 1.5rem;
      top: -1.5rem;
      right: 0;
      background: var(--accent2-primary);
      clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  }
  .windshield {
      width: 5rem;
      height: 1.25rem;
      top: -1.25rem;
      right: 0.5rem;
      background: linear-gradient(
          to right,
          var(--page-bg-color)47%,
          var(--accent2-primary) 47% 53%,
          var(--page-bg-color) 53%
      );
      clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  }
  .headlight {
      width: 0.5rem;
      height: 0.75rem;
      top: 0.25rem;
      border-radius: 0px 50px 50px 0px;
      background: white;
  }

  /* Building */
  .building {
      width: 30rem;
      height: 15rem;
      left: 10rem;
      bottom: 0;
      opacity: 50%;
      background: var(--accent2-primary);
  }
  .building::before {
      content: "";
      position: absolute;
      width: 104%;
      height: 2rem;
      top: -1rem;
      left: -2%;
      aspect-ratio: 1;
      background: var(--accent2-primary);
  }
  .building ~ .building {
      width: 30rem;
      height: 20rem;
      bottom: 0;
      left: 85rem;
      opacity: 100%;
      background: var(--accent2-primary);
  }
  .windows {
      width: 90%;
      height: 3rem;
      top: 1rem;
      left: 5%;
      background: linear-gradient(
          to right,
          var(--page-bg-color) 50%,
          var(--accent2-primary) 50%
      );
      background-size: 13.3%;
  }
  .windows:nth-of-type(2) {
      top: 5rem;
  }
  .windows:nth-of-type(3) {
      top: 9rem;
  }
  .windows:nth-of-type(4) {
      top: 13rem;
  }
  .porch {
      width: 5rem;
      height: 1rem;
      left: -5rem;
      bottom: 6rem;
      background: var(--accent2-primary);
  }
  .floor {
      width: 5rem;
      height: 1.5rem;
      left: 0;
      top: 4.5rem;
      background: var(--accent2-primary);
  }
  .support {
      width: 0.5rem;
      height: 5rem;
      left: 0.5rem;
      top: 0;
      background: var(--accent2-primary);
  }
  .stairs {
      width: 1.5rem;
      aspect-ratio: 1;
      top: 5rem;
      left: -1.5rem;
      clip-path: polygon(0 100%, 100% 100%, 100% 0, 66% 0, 66% 33%, 33% 33%, 33% 66%, 0 66%);
      background: var(--accent2-primary);
  }

  /* Bridge */
  .bridge {
      width: 1rem;
      height: 8rem;
      background: var(--accent2-primary);
      left: 50rem;
      bottom: 0;
  }
  .bridge > .road {
      width: 8rem;
      height: 1rem;
      background: var(--accent2-primary);
      bottom: 0;
      transform-origin: left;
      animation: open-bridge 10s infinite;
  }
  .outer-road {
      width: 7rem;
      height: 1rem;
      background: var(--page-bg-color);
      bottom: 0;
      left: 1rem;
  }
  .lever {
      width: 8rem;
      height: 1rem;
      background: var(--accent2-primary);
      left: 50%;
      top: 0;
      left: -1rem;
      transform-origin: left;
      animation: open-bridge 10s infinite;
  }
  .rope {
      width: 0.25rem;
      height: 8rem;
      background: var(--accent2-primary);
      right: 1.5rem;
      animation: none;
      animation: straighten-rope 10s infinite;
  }
  .fence {
      width: 8rem;
      height: 2.5rem;
      background: linear-gradient(
          var(--accent2-primary) 50%,
          transparent 50%
      );
      background-size: 5px 5px;
      background-repeat: repeat;
      bottom: 0;
  }
  .bridge:last-of-type {
      transform: translateX(15rem) rotateY(180deg);
  }
  @keyframes open-bridge {
      0%, 75% {
          transform: rotateZ(0deg);
      }
      25%, 50% {
          transform: rotateZ(-20deg);
      }
  }
  @keyframes straighten-rope {
      0%, 75% {
          transform: rotateZ(0deg);
      }
      25%, 50% {
          transform: rotateZ(20deg);
      }
  }
</style>