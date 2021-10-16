<script>
  import FeaturesAndCta from "./FeaturesAndCta.svelte";
  import Pricing from "./Pricing.svelte";
</script>

<header
  class="bg-pricing-circles bg-no-repeat sm:h-48 sm:mb-6  h-48 bg-center flex items-center justify-center flex-col"
>
  <h1
    class="sm:text-4xl text-2xl text-center sm:mb-4 mb-2 font-semibold text-pricing-blue-500"
  >
    Simple, traffic-based pricing
  </h1>
  <p
    class="text-pricing-blue-400 w-56 sm:w-auto mx-auto tracking-wider sm:text-base text-sm text-center"
  >
    Sign-up for our 30-day trial. No credit card required.
  </p>
</header>

<main
  class="max-w-xl w-full shadow-2xl tracking-wider leading-none text-pricing-blue-400 rounded-lg bg-white"
>
  <Pricing />
  <FeaturesAndCta />
</main>
