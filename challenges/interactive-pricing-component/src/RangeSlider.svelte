<script>
  export let rangeIndex = 0;
  export let rangeMaxIndex = 4;
  export let rangeStep = 1;
  export let filledWidth = 0;
</script>

<div class="flex justify-center mt-10 relative">
  <div
    class="w-full absolute overflow-hidden bg-pricing-blue-200 inset-0 h-2 rounded-lg z-10"
  >
    <div class="bg-pricing-cyan-100 h-full" style="width: {filledWidth}%" />
  </div>
  <label for="pricing" class="sr-only" aria-label="price slider" />
  <input
    id="pricing"
    type="range"
    class="price-range relative z-20"
    bind:value={rangeIndex}
    min="0"
    max={rangeMaxIndex}
    step={rangeStep}
  />
</div>

<style>
  .price-range {
    width: 100%;
    height: 10px;
    -webkit-appearance: none;
    background: transparent;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: none;
  }
  .price-range:focus {
    outline: none;
  }
  .price-range::-webkit-slider-runnable-track {
    -webkit-appearance: none;
  }
  .price-range::-moz-range-track {
    -webkit-appearance: none;
  }
  .price-range::-webkit-slider-thumb {
    box-shadow: none;
    border: 0px solid #ffffff;
    box-shadow: 0px 12px 20px 0px hsl(174deg 86% 61%);
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background-color: hsl(174, 86%, 45%);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px;
    background-image: url(../images/icon-slider.svg);
    background-position: center 14px;
    background-repeat: no-repeat;
  }
  .price-range:hover::-webkit-slider-thumb {
    background-color: #25aea4;
  }
</style>
