<template>
  <div class="col-md-4">
    <div class="card" style="width: 18rem;">
      <img :src="blog.imgUrl" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">
          {{ blog.title }}
        </h5>
        <p class="card-text clip-text">
          {{ blog.body }}
        </p>
        <router-link :to="{name: 'BlogPost', params: {id:blog.id}}" class="selectable">
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
