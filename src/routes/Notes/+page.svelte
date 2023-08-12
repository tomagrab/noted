<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData, PageData } from "./$types";

  export let data: PageData;
  export let form: ActionData;
</script>

<h1 class="text-4xl mb-4">take note</h1>

<form method="POST" action="?/createNote" use:enhance>
  <div class="flex flex-col">
    <label for="title">title</label>
    <input type="text" name="title" id="title" />
  </div>

  <div class="flex flex-col">
    <label for="content">content</label>
    <textarea name="content" id="content" class="notepad" />
  </div>

  <button type="submit">save</button>
</form>

<style lang="scss">
  .notepad {
    max-height: calc(100vh - 188px);
  }
</style>
