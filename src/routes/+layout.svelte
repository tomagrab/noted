<script lang="ts">
  import Footer from "$lib/Footer/Footer.svelte";
  import Navbar from "$lib/Navbar/Navbar.svelte";
  import "../app.css";
</script>

<div class="drawer overflow-hidden overflow-y-hidden">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <div class="flex-grow flex">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay" />
    <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a href="/Notes">Notes</a></li>
    </ul>
  </div>
</div>
