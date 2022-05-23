<script>
    import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
    import {auth} from '$lib/firebase';
    import {openModalSignInState} from '$lib/stores';
    import Button from './Button.svelte';

    let state;
    openModalSignInState.subscribe(v => state = v);

    let data = {
        pageIndex: 0,
        email: "",
        password: "",
        confirm: "",
        error: null
    }

    function closeModal(){
        data.email = "";
        data.password = "";
        data.error = null;

        openModalSignInState.set(false);
    }

    function changePage(pageIndex){
        data.pageIndex = pageIndex;
    }
    function signIn(){
        data.password = "";
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then(user => {
            console.log(user);
        })
        .catch(error => {      
            data.error = "Vérifie tes identifiants et réessaie";
        })
    }
    function signUp(){
        if(data.password != data.confirm) {
            data.error = "Les deux mots de passes ne correspondent pas";
            return;
        }
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(user => {

        })
        .catch(error => {
            data.error = "Cet email est déjà utilisé";
        })
    }

</script>

<aside class="{state ? 'open' : 'close'}">
    <div class="overlay" on:click="{closeModal}"></div>
    <section>
        <nav>
            <h2 on:click="{() => changePage(0)}" class="{data.pageIndex == 0 ? 'active' : ''}">Connecte toi</h2>
            <h2 on:click="{() => changePage(1)}" class="{data.pageIndex == 1 ? 'active' : ''}">Inscris toi</h2>
        </nav>

        {#if data.pageIndex == 0}
            <form on:submit|preventDefault={signIn}>
                {#if data.error}
                    <p class="error">{data.error}</p>
                {/if}
                <label for="email">Ton email</label>
                <input type="email" bind:value="{data.email}" required>
        
                <label for="password">Ton mot de passe</label>
                <input type="password" bind:value="{data.password}" required>
        
                <div class="button">
                    <Button content="Me connecter" type="submit"/>
                </div>
            </form>
        {:else if data.pageIndex == 1}
        <form on:submit|preventDefault={signUp}>
            {#if data.error}
                <p class="error">{data.error}</p>
            {/if}
            <label for="email">Ton email</label>
            <input type="email" bind:value="{data.email}" required>
    
            <label for="password">Ton mot de passe</label>
            <input type="password" bind:value="{data.password}" required>

            <label for="password">Confirmation mot de passe</label>
            <input type="password" bind:value="{data.confirm}" required>
    
            <div class="button">
                <Button content="M'inscrire" type="submit"/>
            </div>
        </form>
        {/if}
    </section>
</aside>


<style>
    aside{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        display: none;
    }
    aside.open{
        display: flex;
        animation: fadeIn 0.2s forwards;
    }
    @keyframes fadeIn{
        from{transform: translateY(10px); opacity: 0;}
        to{transform: translateY(0); opacity: 1;}
    }


    .overlay{
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: -1;
    }
    section{
        background-color: #333;
        border-radius: 5px;
        padding: 40px 20px;
    }
    section > nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
        cursor: pointer;
    }
    h2{
        grid-column: 1 / 3;
        text-transform: uppercase;
        cursor: pointer;
    }
    h2.active{
        border-bottom: 2px solid currentColor;
    }

    form{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 20px;
        grid-column-gap: 10px;
    }
    label{
        font-size: 1.125em;
        align-self: center;
    }
    input{
        padding: 8px;
        border: 1px solid transparent;
        border-bottom: 1px solid #f1f1f1;
        background-color: transparent;
        color: #f1f1f1;
        font-size: 1em;
        align-self: center;
    }
    input:focus{
        outline: none;
        border: 1px solid #f1f1f1;
    }

    .error{
        grid-column: 1 / 3;
        background-color: rgba(255, 0, 0, 0.3);
        border: 1px solid rgba(255, 0, 0, 1);   
        padding: 10px;
        width: max-content;
    }
    .button{
        grid-column: 2 / 3
    }
    
</style>