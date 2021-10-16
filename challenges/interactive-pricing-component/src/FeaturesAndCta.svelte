<script>
  import FeatureItem from "./FeatureItem.svelte";
</script>

<div
  class="flex flex-col sm:flex-row justify-between items-center px-8 py-8 border-t border-[#f2f1f5]"
>
  <ul>
    <FeatureItem>Unlimited websites</FeatureItem>
    <FeatureItem>100% data ownership</FeatureItem>
    <FeatureItem>Email reports</FeatureItem>
  </ul>
  <div class="mt-8 sm:mt-0">
    <button
      class="bg-pricing-blue-500 text-pricing-blue-300 hover:text-white px-4 w-48 py-3 rounded-full shadow-md text-sm"
      >Start my trial</button
    >
  </div>
</div>
