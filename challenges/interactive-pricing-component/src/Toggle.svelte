<script>
  export let id = "";
  export let label = "";
  export let checked = false;
</script>

<div
  class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in"
>
  <input
    {id}
    type="checkbox"
    class="peer absolute block w-5 h-5 rounded-full bg-white border-[3px] border-pricing-blue-300 appearance-none cursor-pointer checked:right-0 checked:border-pricing-cyan-200"
    bind:checked
  />
  <label
    aria-label={label}
    for={id}
    class="block overflow-hidden h-5 rounded-full bg-pricing-blue-300 cursor-pointer peer-checked:bg-pricing-cyan-200"
  />
</div>
