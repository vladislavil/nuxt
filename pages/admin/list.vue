<template>
  <el-table
    :data="posts"
    style="width: 100%">
    <el-table-column
      prop="title"
      label="Назавание"
    >
    </el-table-column>
    <el-table-column
      label="Дата"
      width="180">
      <template slot-scope="{row: {date}}">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ new Date(date).toLocaleDateString() }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Просмотры"
      width="180">
      <template slot-scope="{row: {views}}">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Комментарии"
      width="180">
      <template slot-scope="{row: {comments}}">
        <i class="el-icon-chat-dot-square"></i>
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Действия">
      <template slot-scope="{row}">
        <el-tooltip effect="dark" content="Редактировать" placement="top">
          <el-button
            icon="el-icon-edit"
            circle
            type="primary"
            @click="open(row._id)"
          >
          </el-button>
        </el-tooltip>
         <el-tooltip effect="dark" content="Удалить" placement="top">
          <el-button
            icon="el-icon-delete"
            circle
            type="danger"
            @click="remove(row._id)"
          >
          </el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

  export default {
    layout: "admin",
    middleware: 'admin-auth',
    async asyncData({store}) {
      const posts = await store.dispatch('post/fetchAdmin');
      return {posts};
    },
    head() {
      return {
        title: `Все посты | ${process.env.appName}`
      }
    },
    methods: {
      open(id) {
        this.$router.push(`/admin/post/${id}`)
      },
      async remove(id) {
        try{
          await this.$confirm("Удалить пост?", "Внимание!", {
            confirmButtonText: "Да",
            cencelButtonText: "Отмена",
            type: "warning"
          });

          await this.$store.dispatch('post/removePost', id)

          this.posts = this.posts.filter((elem) => elem._id !== id);

          this.$message.success("Пост был успешно удален!")

        } catch(e){

        }
      }
    }
  }

</script>
