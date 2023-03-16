<template>
  <!-- 搜索框 -->
  <div class="select-box">
    <el-form :inline="true" :model="selectData" class="demo-form-inline">
      <el-form-item label="标题">
        <el-input v-model="selectData.title" placeholder="请输入标题内容" />
      </el-form-item>
      <el-form-item label="详情">
        <el-input v-model="selectData.introduce" placeholder="请输入详情内容" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>
  </div>

  <div>
    <el-table :data="dataList" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="title" label="标题" width="180" />
      <el-table-column prop="introduce" label="详情" />
    </el-table>
    <el-pagination
      @current-change="currentChange"
      @size-change="sizeChange"
      layout="prev, pager, next"
      :page-size="selectData.pageSize"
      :total="selectData.count"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, toRefs, watch } from "vue";
import { IntData, ListInt } from "@/model/Goods";
import { goodsList } from "@/request";
import { ElMessage } from "element-plus";
import { computed } from "@vue/reactivity";

const initData = reactive(new IntData());
const { selectData } = toRefs(initData);
const getList = async () => {
  try {
    const { data } = await goodsList();
    initData.list = data.list;
    selectData.value.count = data.length;
  } catch (error) {
    ElMessage.error(JSON.stringify(error));
  }
};
onMounted(() => {
  getList();
});

const dataList = computed(() => {
  return initData.list.slice(
    (selectData.value.page - 1) * selectData.value.pageSize,
    selectData.value.page * selectData.value.pageSize
  );
});

const currentChange = (currentPage: number) => {
  // console.log("currentPage ", currentPage);
  selectData.value.page = currentPage;
};

const sizeChange = (pageSize: number) => {
  selectData.value.pageSize = pageSize;
};

const onSubmit = () => {
  // console.log("submit!");
  // console.log(selectData);
  let arr: ListInt[] = initData.list;
  if (initData.selectData.title || initData.selectData.introduce) {
    if (initData.selectData.title) {
      arr = arr.filter(
        (i) => i.title.indexOf(initData.selectData.title) !== -1
      );
    }
    if (initData.selectData.introduce) {
      arr = arr.filter(
        (i) => i.introduce.indexOf(initData.selectData.introduce) !== -1
      );
    }
  }

  // console.log(arr);
  selectData.value.count = arr.length;
  initData.list = arr;
};

watch([() => selectData.value.title, () => selectData.value.introduce], () => {
  if (selectData.value.title == "" && selectData.value.introduce == "") {
    getList();
  }
});
</script>
