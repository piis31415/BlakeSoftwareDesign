<!-- REPURPOSED FROM: https://github.com/katendeglory/editor-js-with-svelte/blob/master/src/Editor.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  let editor;
  export let tools;
  export let holder = "editorjs";
  export let data = {};
  export let resize = { w: 750, h: 750, q: 75 };
  onMount(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const ImageTool = (await import("@editorjs/image")).default;
    const Header = (await import( "@editorjs/header")).default;
    const Table = (await import( "@editorjs/table")).default;
    const Embed = (await import( "@editorjs/embed")).default;
    const Quote = (await import( "@editorjs/quote")).default;
    const Code = (await import( "@editorjs/code")).default;
    const List = (await import( "@editorjs/list")).default;
    const Delimiter = (await import( "@editorjs/delimiter")).default;
    const Checklist = (await import( "@editorjs/checklist")).default;
    const Resizer = (await import("react-image-file-resizer")).default;
    
    let resizeImage = (file) => {
      return new Promise((resolve, reject) => {
        Resizer.imageFileResizer(
          file,
          resize.w,
          resize.h,
          "JPEG",
          resize.q,
          0,
          (uri) => {
            resolve(uri);
          },
          "base64"
          );
        });
      };
      
      const _getBase64 = (file, onLoadCallback) => {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();
          reader.onload = function () {
            return resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      };
    tools = {
      header: {
        class: Header,
        inlineToolbar: true,
      },
      embed: Embed,
      quote: Quote,
      code: Code,
      delimiter: Delimiter,
      table: Table,
      list: List,
      checklist: Checklist,
      image: {
        class: ImageTool,
        config: {
          uploader: {
            async uploadByFile(file) {
              // return _getBase64(file, function (e) {}).then((data) => {
              //   console.log(data);
              //   return { success: 1, file: { url: data } };
              // });
              return resizeImage(file).then((data) => {
                console.log(data);
                return { success: 1, file: { url: data } };
              });
            },
          },
        },
      },
    };
    
    editor = new EditorJS({
      holder,
      data,
      tools,
      hideToolbar: false,
      onReady: () => {
        console.log(` Editor.js is ready to work!`);
      },
      //onChange: () => {console.log(`Editor's content changed!`)}
    });
  });
  let dispatch = createEventDispatcher();
  let onSave = async () => {
    const savedData = await editor.save();
    console.log(savedData)
    dispatch("save", savedData);
  };
</script>

<div class="p-4 bg-gray-100" id="editorjs" />

<div class="flex flex-row p-4">
  <button on:click={onSave} class="p-2 border-solid border-highlight-blue border-2 rounded-lg m-4 transition duration-100 ease-in-out hover:bg-gray-200">Send Message!</button>
</div>

<style style lang="postcss">
  :global(h2) {
    @apply text-4xl;
  }
</style>
