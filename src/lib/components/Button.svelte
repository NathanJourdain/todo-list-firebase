<script>
    export let content;
    export let type = "button";
</script>

<button on:click type="{type}">
    {content}
</button>

<style>
    button{
    padding: 10px;
    background-color: #EFEAD8;
    color: #333;
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    cursor: pointer;
    font-size: 1.05em;
    margin: 0.5em;
    position: relative;

    transition: 0.3s box-shadow;
    }
    button:hover{
        box-shadow: -0.3em -0.3em #5F7161,
                    0.3em 0.3em #6D8B74;
    }
</style>