<template>
  <div class="tag-container">
    <el-tag v-for="tag in tags" :key="tag.name"
            closable
            :type="tag.type"
            color="#ff00"
            effect="plain">{{ tag.name }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "TagsView",
  data() {
    return {
      tags: [
        {name: '标签一', type: ''},
        {name: '标签二', type: ''},
        {name: '标签三', type: ''},
        {name: '标签四', type: ''},
        {name: '标签五', type: ''}
      ]
    };
  }
}
</script>

<style lang="scss" scoped>

.tag-container {
  //background-color: #13ce66;
  margin: 5px;
}
</style>