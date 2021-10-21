<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import Toggle from "./Toggle.svelte";
  import Price from "./Price.svelte";
  import RangeSlider from "./RangeSlider.svelte";

  const priceRanges = [
    {
      pageViews: "10K",
      price: 8,
    },
    {
      pageViews: "50K",
      price: 12,
    },
    {
      pageViews: "100k",
      price: 16,
    },
    {
      pageViews: "500K",
      price: 24,
    },
    {
      pageViews: "1M",
      price: 36,
    },
  ];

  const rangeMaxIndex = 4;
  const rangeStep = 1;
  const discount = 25;
  let price = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  let payYearly = false;
  let rangeIndex = 2;

  $: priceRange = priceRanges[rangeIndex];
  $: $price = getDiscountedPrice(priceRange.price, payYearly);

  function getDiscountedPrice(price, payYearly) {
    if (payYearly) {
      return Math.floor(price - (price * discount) / 100);
    }
    return price;
  }
</script>

<div class="px-4 sm:px-8 sm:py-12 sm:pb-10 py-10">
  <div class="flex justify-center sm:justify-between items-center">
    <div class="uppercase text-base tracking-wider">
      {priceRange.pageViews} Pageviews
    </div>
    <div class="hidden sm:block">
      <Price amount={$price} />
    </div>
  </div>
  <RangeSlider bind:value={rangeIndex} max={rangeMaxIndex} step={rangeStep} />
  <div class="sm:hidden mt-10">
    <Price amount={$price} />
  </div>
  <div
    class="flex relative items-center justify-center sm:mt-14 mt-10 sm:text-sm text-xs"
  >
    <span class="inline-flex mr-2 xs:mr-4">Monthly Billing</span>
    <Toggle id="yearly" label="pay yearly" bind:checked={payYearly} />
    <span class="inline-flex ml-2 xs:ml-4 relative"
      >Yearly Billing
      <span
        class="-right-2 relative sm:inline-flex text-[10px] sm:text-[11px] sm:absolute sm:-right-28 sm:top-0 px-1 sm:px-2 leading-none py-1 rounded-full bg-pricing-red-100 text-pricing-red-200"
      >
        <span class="hidden sm:inline">{discount}% discount</span>
        <span class="sm:hidden">-{discount}%</span>
      </span>
    </span>
  </div>
</div>
