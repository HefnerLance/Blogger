<template>
  <div class="container" v-if="blog">
    <div class="row">
      <div class="col-md-12">
        <div class="card" style="width: 18rem;">
          <img :src="blog.imgUrl" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">
              {{ blog.title }}
            </h5>
            <p class="card-text ">
              {{ blog.body }}
            </p>
            <!-- <router-link :to="{name: 'BlogPost', params: {id:blog.creatorId}}" class="selectable">
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { blogsService } from '../services/BlogsService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'

export default {
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await blogsService.getBlog(route.params.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      blog: computed(() => AppState.blog)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
