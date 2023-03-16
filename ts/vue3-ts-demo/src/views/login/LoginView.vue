<template>
  <div class="login-box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="80px"
      class="login-form"
    >
      <h2>后台管理系统</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-button"
          type="primary"
          @click="submitForm(ruleFormRef)"
          >Submit</el-button
        >
        <el-button class="login-button" @click="resetForm(ruleFormRef)"
          >Reset</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "@/request/index";
import { FormRules, ElMessage, FormInstance } from "element-plus";
import LoginUser from "@/model/LoginUser";

const router = useRouter();
const ruleForm = reactive<LoginUser>({
  username: "",
  password: "",
});

const rules: FormRules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 5, message: "用户名应该在3~5个之间", trigger: "blur" },
  ],
  password: [
    { required: true, message: "密码", trigger: "blur" },
    { min: 5, max: 10, message: "密码应该在5~10个之间", trigger: "blur" },
  ],
};

const ruleFormRef = ref<FormInstance>();
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      login(ruleForm)
        .then((res) => {
          localStorage.setItem("token", JSON.stringify(res.data.data));
          router.push("/");
        })
        .catch((err) => {
          ElMessage.error(`${err}`);
        });
    } else {
      ElMessage.error({ message: "用户名或密码不合法" });
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background-color: rgb(101, 65, 231);
  overflow: hidden;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  .login-form {
    margin: 200px auto;
    width: 500px;
    background-color: #fff;
    padding: 30px;
    // padding-left: 0px;
    border-radius: 50px;
  }

  .login-button {
    width: 48%;
  }

}
</style>
