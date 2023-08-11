<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1 class="text-4xl mb-4">take note</h1>

<div class="notepad flex-grow overflow-y-auto">
  <form class="form">
    <div class="form-control">
      <label class="label">
        <span class="label-text">title</span>
      </label>
      <input type="text" placeholder="title" class="input input-bordered" />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">content</span>
      </label>
      <textarea placeholder="content" class="textarea textarea-bordered" />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">tags</span>
      </label>
      <input type="text" placeholder="tags" class="input input-bordered" />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">date</span>
      </label>
      <input type="date" placeholder="date" class="input input-bordered" />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">time</span>
      </label>
      <input type="time" placeholder="time" class="input input-bordered" />
    </div>
    <div class="form-control">
      <button class="btn">note</button>
    </div>
  </form>
</div>

<style lang="scss">
  .notepad {
    max-height: calc(100vh - 188px);
  }
</style>
