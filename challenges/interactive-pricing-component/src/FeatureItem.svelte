<script>
  import IconCheck from "../images/icon-check.svg";
  import Icon from "./Icon.svelte";
</script>

<li class="flex items-center justify-center sm:justify-start text-sm mb-2">
  <Icon src={IconCheck} alt="check icon" className="w-3 h-3 mr-2" />
  <slot />
</li>
