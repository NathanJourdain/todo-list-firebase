<script>
    import Button from '$lib/components/Button.svelte';
    import ModalSignIn from '$lib/components/ModalSignIn.svelte';
    import {openModalSignInState, user} from '$lib/stores';


    function openModalSignIn(){
        openModalSignInState.set(true);
    }
</script>

<h2>La meilleure application pour ne plus rien oublié !</h2>

{#if !$user }
<div class="button">
    <Button content="Se connecter" on:click={openModalSignIn}/>
</div>
{/if}


{#if !$user }
    <ModalSignIn />
{/if}

<style>
    h2{
        font-size: clamp(25px, 6vw, 40px);
        font-weight: 700;
    }
    .button{
        text-align: center;
        padding: 10px;
    }
</style>