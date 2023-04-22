<script>
  import PythonCode from "./PythonCode.svelte";
  import CCode from "./CCode.svelte";
  import JsCode from "./JsCode.svelte";
  let languageIdx = 0;
  const languageArray = ["C.png", "Python.png", "Javascript.png"];
  const wordsArray = ["'hello world'", "'வணக்கம்'", "'Namasate'","'Good Day !'"];
</script>

<div
  class="flex flex-col  space-y-8 transition ease-in-out
 duration-300 scale-75 lg:scale-100 m-4"
>
    {#if languageIdx === 0}
        <CCode codeContentArray={wordsArray}/>
    {:else if languageIdx == 1}
        <PythonCode codeContentArray={wordsArray}/>
    {:else}
        <JsCode codeContentArray={wordsArray}/>
    {/if}
  <div class="flex flex-row space-x-8 m-4">
    {#each languageArray as langImg, index}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div  on:click={() => languageIdx  = index}
        class={"transition ease-in-out hover:scale-110 animate-pulseFast hover:grayscale-0 " + (index === languageIdx ? "" : " grayscale")}
      >
        <img
          src={"/imgs/" + langImg}
          class="w-14 h-14 object-cover rounded-full"
          alt=""
        />
      </div>
    {/each}
  </div>
</div>
