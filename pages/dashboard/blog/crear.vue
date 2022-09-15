<template>
  <div>
    <h3 class="text-3xl">Creando nuevo post</h3>
    <div>
      <label
        for="title"
        class="
          block
          mb-2
          text-sm
          font-medium
          text-gray-900
          dark:text-gray-300
          mt-4
        "
        >Titulo</label
      >
      <input
        type="text"
        v-model="item.title"
        required
        class="input w-full bg-white block"
      />
      <div
        class="alert alert-error shadow-lg text-sm p-2 mt-3"
        v-if="errorTitle"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Campo requerido</span>
        </div>
      </div>
      <div class="flex gap-5">
        <div class="w-1/2">
          <label
            for="title"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
              mt-4
            "
            >Categoria</label
          >
          <select required v-model="item.category" class="select select-bordered bg-white w-full">
            <option
              v-for="(item, index) in categories"
              :key="index"
              :value="item.value"
            >{{item.text}}</option>
          </select>
        </div>
        <div class="w-1/2">
          <label
            for="image"
            class="
              mt-4
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >Imagen Destacada</label
          >
          <WidgetImage @cleanImg="clearImg" @changed="onFileChange" />
          <progress
            v-if="uploading.active"
            class="progress progress-accent w-full"
            :value="uploading.porcentage"
            max="100"
          ></progress>
        </div>
      </div>
      <div
        class="alert alert-error shadow-lg text-sm p-2 mt-3"
        v-if="errorCate"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Campo requerido</span>
        </div>
      </div>
      <div class="mt-3">
        <label
          for="content"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-300
          "
          >Contenido</label
        >
        <wysiwyg v-model="item.content" />
        <div
          class="alert alert-error shadow-lg text-sm p-2 mt-3"
          v-if="errorContent"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Campo requerido</span>
          </div>
        </div>
      </div>
      <button @click="sendForm" class="btn btn-primary mt-5">Guardar</button>
    </div>
  </div>
</template>
<script>
import { db } from "~/plugins/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import WidgetImage from "~/components/widgets/UploadImage";
export default {
  layout: "dashboard",
  components: {
    WidgetImage,
  },
  data() {
    return {
      uploading: { active: false, porcentage: 0 },
      errorTitle: false,
      errorCate: false,
      errorContent: false,
      categories: [
        {
          value: "ong",
          text: "ONG",
        },
        {
          value: "tableta",
          text: "Tableta para tu carpeta",
        },
        {
          value: "pueblo",
          text: "Adopta un pueblo",
        },
      ],
      item: {
        title: "",
        content: "",
        category: "ong",
        url: "",
        slug:""
      },
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e[0];
      this.uploadImage();
    },
    clearImg() {
      this.file = null;
    },
    async uploadImage() {
      if (this.file != null) {
        this.uploading.active = true;
        const storage = getStorage();
        const storageRef = ref(storage, `${this.file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, this.file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.uploading.porcentage = progress;
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
              this.item.url = downloadURL;
              this.uploading.active = false;
            });
          }
        );
      } else {
        return;
      }
    },
    async sendForm() {
      if (this.item.title == "") {
        this.errorTitle = true;
      } else {
        this.errorTitle = false;
      }
      if (this.item.category == "") {
        this.errorCate = true;
      } else {
        this.errorCate = false;
      }
      if (this.item.content == "") {
        this.errorContent = true;
      } else {
        this.errorContent = false;
      }
      if (
        this.item.title != "" &&
        this.item.content != "" &&
        this.item.content != ""
      ) {
        try {
          this.item.slug = this.item.title.split(" ").join("-")
          await addDoc(collection(db, "blog"), this.item);
          this.$router.push("/dashboard/blog");
        } catch (e) {
          alert("Error!");
          console.error(e);
        }
      }
    },
  },
};
</script>
<style scoped>
</style>