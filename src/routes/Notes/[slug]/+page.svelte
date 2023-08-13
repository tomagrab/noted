<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1 class="text-4xl mb-4">edit note</h1>

<!-- Form to edit notes -->
<form method="POST" action="?/updateNote" use:enhance>
  <input type="hidden" name="id" value={data.note?.id} />

  <div class="flex flex-col">
    <label for="title">title</label>
    <input
      type="text"
      name="title"
      id="title"
      value={data.note?.title}
      class="py-2 px-4"
    />
  </div>

  <div class="flex flex-col my-4">
    <label for="content">content</label>
    <textarea name="content" id="content" class="py-2 px-4"
      >{data.note?.content}</textarea
    >
  </div>

  <butto class="btn btn-secondary" type="submit">update</butto>
</form>

<!-- Back to notes -->

<a href="/Notes" class="btn btn-ghost mt-4">Back to notes</a>
