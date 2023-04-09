<script>
  export let item;
  let name = "";
  let posting = "";
  let cursor = 0;
  let colSpan = Math.floor(Math.random() * 4);
  const typeSpeed = 100;
  function typeNamePosting() {
    if (name.length < item.name.length) {
      cursor = 1;
      name += item.name.charAt(name.length);
      setTimeout(typeNamePosting, typeSpeed);
    } else if (posting.length < item.posting.length) {
      cursor = 2;
      posting += item.posting.charAt(posting.length);
      setTimeout(typeNamePosting, typeSpeed);
    } else {
      cursor = 0;
      return;
    }
  }
  typeNamePosting();
</script>

<div
  class={`group  flex flex-col items-center justify-center 
  space-y-4 rounded-xl  transition-all m-2
  duration-300 ease-in-out hover:scale-110 hover:bg-white` +
    (item.lead ? " p-4 lg:p-12" : " p-8")}
>
  <!-- image  -->
  <div
    class="rounded-full shadow-lg shadow-neutral-500 transition-all duration-300 ease-in-out group-hover:shadow-black"
  >
    <img
      src={item.imgLink}
      class={"rounded-full object-cover object-center" +
        (item.lead ? " lg:h-48 lg:w-48 h-24 w-24" : " h-52 w-52")}
      alt=""
    />
  </div>
  <div class="flex flex-col">
    <!-- name  -->
    <div
      class="text pt-4 font-serif text-xl lg:text-3xl font-light text-white subpixel-antialiased group-hover:font-semibold
      group-hover:text-black"
    >
      {item.name}
      <!-- {#if cursor === 1}
        <span class="text-white font-bold animate-pulse">|</span>
      {/if} -->
    </div>
    <!-- posting  -->
    <div
      class="text font-mono text-lg lg:text-2xl font-semibold text-neutral-500 subpixel-antialiased"
    >
      {item.posting}
      <!-- {#if cursor === 2}
        <span class="text-white font-bold animate-pulse">|</span>
      {/if} -->
    </div>
  </div>
</div>
