<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  import InputGroup from "./InputGroup.svelte";
  import Label from "./Label.svelte";

  import logo from "../images/logo.svg";
  import dollarIcon from "../images/icon-dollar.svg";
  import personIcon from "../images/icon-person.svg";

  let amount = undefined;
  let percent = undefined;
  let customPercent = undefined;
  let percents = [5, 10, 15, 25, 50];
  let tipAmountPerPerson = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });
  let totalAmountPerPerson = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  function splitter({ amount, percent, people }) {
    const isSomeNeg = [amount, percent, people].some((el) => el < 0);
    const isSomeFalsy = [amount, percent, people].some((el) => !el);
    if (isSomeNeg || isSomeFalsy) {
      tipAmountPerPerson.set(0);
      totalAmountPerPerson.set(0);
      return;
    }
    tipAmountPerPerson.set((amount * (percent / 100)) / people);
    totalAmountPerPerson.set((amount * (percent / 100 + 1)) / people);
  }

  $: people = amount > 0 ? 1 : undefined;
  $: peopleError =
    people === 0
      ? `Can't be zero`
      : people < 0
      ? `Can't be nagative`
      : undefined;
  $: customPercentError = customPercent < 0 ? `Can't be nagative` : undefined;
  $: amountError = amount < 0 ? `Can't be nagative` : undefined;
  $: percent = customPercent > 0 ? customPercent : percent;
  $: splitter({ amount, percent, people });

  function handleBtnClick(value) {
    customPercent = undefined;
    percent = value;
  }

  function onReset() {
    amount = undefined;
    percent = undefined;
  }
</script>

<main class="max-w-4xl">
  <div class="flex justify-center items-center mb-12 mt-6 md:mt-0">
    <img src={logo} alt="splitter logo" />
  </div>
  <div class="bg-white shadow-xl p-6 py-8 rounded-xl">
    <div class="md:flex">
      <div class="flex-1 md:px-4">
        <div class="mb-6 md:mb-8">
          <InputGroup
            bind:value={amount}
            id="bill"
            label="Bill"
            icon={dollarIcon}
            error={amountError}
          />
        </div>
        <div class="mb-6 md:mb-8">
          <div class="flex items-center justify-between">
            <Label text="Select Tip %" />
            {#if customPercentError}
              <p class="text-xs text-red-500">{customPercentError}</p>
            {/if}
          </div>
          <ul class="grid gap-2 grid-cols-2 md:grid-cols-3 mt-2">
            {#each percents as percentage}
              <li class=" overflow-hidden">
                <button
                  on:click={() => handleBtnClick(percentage)}
                  class:bg-calc-cyna-500={percent === percentage}
                  class="text-center  w-full py-2 px-2 text-xl font-bold bg-calc-cyna-900 hover:opacity-90  text-white rounded"
                  >{percentage}%</button
                >
              </li>
            {/each}
            <li class="rounded-md flex items-center bg-calc-gray-cyna-50">
              <input
                type="text"
                inputmode="numeric"
                placeholder="Custom"
                bind:value={customPercent}
                min={0}
                class="py-2 px-4 text-xl rounded-md focus:ring-2 ring-calc-cyna-500 outline-none appearance-none text-calc-cyna-900 font-bold text-right bg-transparent block w-full"
              />
            </li>
          </ul>
        </div>
        <div>
          <InputGroup
            bind:value={people}
            label="Number of People"
            id="people"
            icon={personIcon}
            error={peopleError}
          />
        </div>
      </div>
      <div
        class="mt-8 md:mt-0 flex-1 md:flex flex-col justify-between md:ml-6 bg-calc-cyna-900 text-calc-cyna-500 px-6 pt-8 pb-6 md:pb-8 rounded-xl font-bold"
      >
        <div class="">
          <div class="flex justify-between items-center mb-6 md:mb-10">
            <div class="text-white text-sm">
              <div>Tip Amount</div>
              <div class="text-xs text-calc-gray-cyna-200">/ person</div>
            </div>
            <div class="text-3xl ">${$tipAmountPerPerson.toFixed(2)}</div>
          </div>
          <div class="flex justify-between items-center mb-6 md:mb-0">
            <div class="text-white text-sm">
              <div>Total</div>
              <div class="text-xs text-calc-gray-cyna-200">/ person</div>
            </div>
            <div class="text-3xl">${$totalAmountPerPerson.toFixed(2)}</div>
          </div>
        </div>
        <button
          type="button"
          class="w-full py-2 px-4 bg-calc-cyna-500 hover:bg-calc-gray-cyna-100 hover:text-calc-cyna-900 text-white uppercase disabled:cursor-not-allowed disabled:text-calc-cyna-900 font-bold rounded-md disabled:bg-[#0d686d]"
          disabled={!$tipAmountPerPerson}
          on:click={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  </div>
  <div class="mt-8 text-center">
    Challenge by
    <a
      class="text-blue-500 hover:text-blue-600 hover:underline"
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank">Frontend Mentor</a
    >. Coded by
    <a
      href="https://vinaypuppal.com"
      class="text-blue-500 hover:text-blue-600 hover:underline"
      target="_blank">VinayPuppal</a
    >.
  </div>
</main>
