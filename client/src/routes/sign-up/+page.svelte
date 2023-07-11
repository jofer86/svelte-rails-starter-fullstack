<script lang="ts">

  import axios from 'axios';
  import { goto } from '$app/navigation';

  let form = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  }

  const submit = async () => {
    return await axios.post('http://localhost:3000/users', {
      user: {
        name: form.name,
        last_name: form.lastName,
        email: form.email,
        password: form.password
      }
    }).then(() => {
      goto('/login');
    }).catch((error) => {
      console.log(error)
    })
  }
</script>

<div class="space-y-5">
  <h1 class="h1">Please Sign Up</h1>
  <p>Required fields</p>
  <form on:submit={submit}>
    <label class="label">
      <span>Name</span>
      <input bind:value={form.name} class="input" type="text" placeholder="Input" />
    </label>

    <label class="label">
      <span>Last Name</span>
      <input bind:value={form.lastName} class="input" type="text" placeholder="Input" />
    </label>

    <label class="label">
      <span>Email</span>
      <input bind:value={form.email} class="input" type="text" placeholder="Input" />
    </label>

    <label class="label">
      <span>Password</span>
      <input bind:value={form.password} class="input" type="password" placeholder="Input" />
    </label>


    <button type="submit">Sign Up</button>
  </form>
</div>


<style>
    label {
        @apply  w-full my-4;
    }

    form {
        @apply flex flex-col justify-around items-center;
    }

    form > button {
        @apply btn variant-filled-primary my-4;
    }
</style>
