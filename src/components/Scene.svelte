<script lang="ts">
  import { onMount } from "svelte";
  import scene from "@3d/scene.ts";

  let elem: HTMLDivElement;

  onMount(() => scene(elem));
</script>

<div bind:this={elem} />
