<script lang="ts">
  // The ordering of these imports is critical to your app working properly
  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  // Most of your app wide CSS should be put in this file
  import "../app.postcss";
  import jwtDecode from "jwt-decode";
  import { onMount } from "svelte";
  import { authToken } from "../stores/auth.store";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  onMount(() => {
    let token: string | null = "";
    token = localStorage.getItem("expense-auth");
    if (token && $page.route.id !== "/sign-up") {
      const decodedToken = jwtDecode(token, { header: true });
      console.log(decodedToken);
      authToken.update((val) => {
        val = token;
        return val;
      });
      goto("/dashboard");
    }
    if (!token && $page.route.id !== "/sign-up") {
      authToken.update((val) => {
        val = "";
        return val;
      });
      goto("/login");
    }
  });

  const signOut = () => {
    localStorage.removeItem("expense-auth");
    authToken.update((val) => {
      val = "";
      return val;
    });
    goto("/login");
  };
</script>

<div class="container">
  <header>
    <button
      disabled={!$authToken}
      on:click={signOut}
      type="button"
      class="btn variant-filled">Sign Out</button
    >
  </header>
  <slot />
</div>

<style>
  header {
    @apply w-full flex justify-end mt-8 mr-8 absolute top-0 right-0;
  }
  .container {
    @apply h-full mx-auto flex flex-col justify-center items-center;
  }
</style>
