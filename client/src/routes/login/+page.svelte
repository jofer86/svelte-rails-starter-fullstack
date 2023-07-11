<script lang="ts">
  import axios from 'axios';
  import { goto } from '$app/navigation';
  import { authToken } from '../../stores/auth.store';
  let userName = '';
  let password = '';
  const submit = async () => {
    try {
      let res = await axios.post('http://localhost:3000/users/sign_in', {
        user: {
          email: userName,
          password
        }
      });
      let token = res.headers['authorization'];
      if (token) {
        token = token.split(' ')[1];
        localStorage.setItem('expense-auth', token);
        authToken.update((val) => {
          val = token;
          return val;
        });
        goto('/dashboard');
      }
    } catch (e) {
      goto('sign-up')
    }
  };
</script>

  <div class="space-y-5">
    <h1 class="h1">Please login</h1>
    <p>Enter your email and password:</p>
    <form on:submit={submit}>
      <label class="label">
        <span>Email</span>
        <input bind:value={userName} class="input" type="text" placeholder="Input" />
      </label>

      <label class="label">
        <span>Password</span>
        <input bind:value={password} class="input" type="password" placeholder="Input" />
      </label>

      <a href="/sign-up">Don't have an account? Sign-up</a>

      <button type="submit">Login</button>
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
