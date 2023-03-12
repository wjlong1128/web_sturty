<template>
  <div class="tab-wrapper">
    <div class="tab-head">
      <div class="tab-button" @click="state = 0" :class="{ active: state === 0 }">热门球员</div>
      <div class="tab-button" @click="state = 1" :class="{ active: state === 1 }">热门球队</div>
    </div>
    <div class="main">
      <div v-show="state === 0">
        <div class="tab-list">
          <div class="tab-item">
            <div class="photo">
              <img
                src="https://i0.wp.com/sportytell.com/wp-content/uploads/2018/12/Lionel-Messi-of-FC-Barcelona.jpg?fit=1920%2C1080&ssl=1"
                alt="">
              <span>1</span>
            </div>
            <div class="desc">
              <div class="name">梅西</div>
              <div class="hot-bar">
                <div class="inner">47733</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="state === 1"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const state = ref(0) 
</script>

<style>
.tab-wrapper {
  width: 800px;
  padding: 20px;
  background-color: rgb(45, 83, 211);
}

.tab-head {
  display: flex;
  border-radius: 20px;
  overflow: hidden;
}

.tab-button {
  flex: auto;
  padding: 10px 0;
  font-size: 30px;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
  transition: all .2s;
}

.tab-button:not(.active):hover {
  color: rgb(187, 3, 52);
}

.active {
  background-color: rgb(187, 3, 52);
  color: #fff;
}

.tab-list {
  margin: 20px;
}

.tab-item {
  display: flex;
  margin-bottom: 20px;
}

.photo {
  position: relative;
  width: 150px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
}

.photo img {
  width: 100%;
  vertical-align: top;
}

.photo span {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: rgb(245, 102, 1);
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
}

.desc {
  display: flex;
  flex: auto;
  margin-left: 30px;
  flex-flow: column;
  justify-content: space-evenly;
  font-size: 30px;
  color: #fff;
}

.hot-bar {
  text-indent: .5em;
  background-color: rgba(0, 0, 0, .8);
  border-radius: 20px;
  overflow: hidden;
}

.inner {
  width: 50%;
  border-radius: 20px;
  background-image: linear-gradient(90deg, rgb(187, 3, 52) 50%, rgb(66, 2, 12));
  white-space: nowrap;
}
</style>