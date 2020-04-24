<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TutorialDataService from "@/services/TutorialDataService";
import Tutorial from "@/types/Tutorial";

@Component
export default class AddTutorial extends Vue {
  private tutorial: Tutorial = {
    id: null,
    title: "",
    description: "",
    published: false,
  };

  private submitted: boolean = false;

  saveTutorial() {
    let data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
    };

    TutorialDataService.create(data)
      .then((response) => {
        this.tutorial.id = response.data.id;
        console.log(response.data);
        this.submitted = true;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {} as Tutorial;
  }
}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
