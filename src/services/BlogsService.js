import { AppState } from '../AppState'
import { Blog } from '../Models/Blog'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BlogsService {
  async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log(res.data)
    AppState.blogs = res.data.map(b => new Blog(b))
  }

  async getBlog(blogId) {
    debugger
    const res = await api.get('api/blogs/' + blogId)
    logger.log('get blog res', res.data)
    AppState.blog = new Blog(res.data)
    logger.log(AppState.blog)
  }
}
export const blogsService = new BlogsService()
