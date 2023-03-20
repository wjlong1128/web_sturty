import { onMounted } from "vue";

interface Options {
  el: string;
}

export default function (options: Options) {
  return new Promise<{ base64Url: string }>((resolve) => {
    onMounted(() => {
      let img = document.querySelector(options.el) as HTMLImageElement;
      console.log(img);
      img.onload = () => {
        const url = base64(img);
        resolve({
          base64Url: url,
        });
      };
    });
    const base64 = (img: HTMLImageElement) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.height = img.height;
      canvas.width = img.width;
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      let temp = img.src.split(".");
      return canvas.toDataURL("image/" + temp[temp.length - 1]);
    };
  });
}
