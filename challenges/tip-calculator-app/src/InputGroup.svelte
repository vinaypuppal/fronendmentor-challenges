<script>
  import clsx from "clsx";

  import Label from "./Label.svelte";
  export let value;
  export let icon;
  export let label;
  export let id;
  export let error;
</script>

<div>
  <div class="flex items-center justify-between">
    <Label {id} text={label} />
    {#if error}
      <p class="text-xs text-red-500">{error}</p>
    {/if}
  </div>
  <div class="relative flex items-center rounded-md bg-calc-gray-cyna-50">
    <img src={icon} alt="icon" class="left-4 absolute" />
    <input
      {id}
      type="number"
      inputmode="numeric"
      name="bill"
      placeholder="0"
      autocomplete="off"
      class={clsx(
        "pl-6 border border-transparent outline-none rounded-md bg-calc-gray-cyna-50 appearance-none focus:ring-2  text-calc-cyna-900 font-bold text-right pr-4 py-2 text-2xl bg-transparent block w-full",
        error
          ? "border-red-500 ring-transparent"
          : " border-transparent ring-calc-cyna-500"
      )}
      bind:value
    />
  </div>
</div>
