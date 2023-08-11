<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<div class="flex-grow grid grid-cols-5 gap-4 px-16 pt-4">
  <aside class="col-span-1">
    <h2 class="text-2xl mb-4">browse notes</h2>
    <ul>
      <li><a href="/Notes">Notes</a></li>
      <li><a href="/Notes">Notes</a></li>
      <li><a href="/Notes">Notes</a></li>
      <li><a href="/Notes">Notes</a></li>
      <li><a href="/Notes">Notes</a></li>
    </ul>
  </aside>

  <main class="col-span-4 flex flex-col">
    <slot />
  </main>
</div>
