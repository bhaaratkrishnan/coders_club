<script>
  import { onMount } from "svelte";
  export let codeContentArray;
  let codeContent = "";
  let arrayIndex = 0;
  let charIndex = 0;
  const typeSpeed = 100;
  const eraseSpeed = 100;
  const nextTextSpeed = 1000;
  function typeText() {
    if (codeContent.length < codeContentArray[arrayIndex].length) {
      codeContent += codeContentArray[arrayIndex][charIndex];
      charIndex += 1;
      setTimeout(typeText, typeSpeed);
    } else {
      setTimeout(eraseText, nextTextSpeed);
    }
  }
  function eraseText() {
    if (codeContent.length > 0) {
      codeContent = codeContent.substring(0, charIndex - 1);
      charIndex -= 1;
      setTimeout(eraseText, eraseSpeed);
    } else {
      arrayIndex += 1;
      if (arrayIndex >= codeContentArray.length) {
        arrayIndex = 0;
      }
      setTimeout(typeText, nextTextSpeed);
    }
  }
  onMount(() => {
    setTimeout(typeText, nextTextSpeed + 200);
  });
</script>


  <!-- editor part  -->
  <div class="flex flex-col rounded-xl bg-[#1e1e1e]">
    <!-- top bar of editor  -->
    <div
      class="flex flex-row  bg-[#282828] space-x-4 py-4 px-4 justify-start items-center rounded-xl"
    >
      <!-- icons  -->
      <div class="container w-4 h-4 bg-red-500 rounded-full" />
      <div class="container w-4 h-4 bg-yellow-500 rounded-full" />
      <div class="container w-4 h-4 bg-green-500 rounded-full" />
      <div class="text-gray-500 font-normal text-4xl hidden md:block pl-10">+</div>
    </div>
    <!-- text section for editor  -->
    <div
      class="flex flex-col px-4 py-3 font-semibold text-lg md:text-xl font-mono tracking-wide"
    >
      <!-- include stdio  -->
      <div class="">
        <span class="text-[#b47baf]">def</span>
        <span class="text-[#dcdcaa]">main</span><span class="text-white">():</span>
      </div>
      
      <!-- printf statement  -->
      <div class="indent-8 text-white break-words">
        <span class="text-[#dcdcaa]">print</span><span class="text-white"
          >&lpar;</span
        ><span class="text-[#ce9178]">{codeContent}</span><span
          class="text-neutral-200 animate-pulse text-2xl">|</span
        ><span>&rpar;</span>
      </div>
      <div class="text-[#b47baf] indent-8">return</div>
    </div>
  </div>
  <!-- output part  -->
  <div class="flex flex-col rounded-xl bg-neutral-800">
    <!-- top bar of editor  -->
    <div
      class="flex flex-row bg-neutral-900 justify-end items-center space-x-4 py-4 px-4 rounded-xl"
    >
      <!-- icons  -->
      <div class="text-neutral-200 text-lg hidden md:block md:pr-60 font-medium">
        codersclub@codersclub-linux/~
      </div>
      <div class="container w-4 h-4 bg-red-500 rounded-full" />
      <div class="container w-4 h-4 bg-yellow-500 rounded-full" />
      <div class="container w-4 h-4 bg-green-500 rounded-full" />
    </div>
    <!-- terminal section  -->
    <div
      class="flex flex-col px-4 py-3 font-semibold text-xl font-mono tracking-wide"
    >
      <div class="text-green-600 text-base">
        codersclub@codersclub-linux/~$ <span class="text-white"
          >python3 main.py</span
        >
      </div>
      <div class="text-green-600 text-base break-words">
        codersclub@codersclub-linux/~$ <span class="text-white"
          >{codeContent.replaceAll("'","")}</span
        >
      </div>
    </div>
  </div>
