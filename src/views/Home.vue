<script lang="ts" setup>
import { useStore } from "@/stores";
import { storeToRefs } from "pinia";
const { storeInfo } = storeToRefs(useStore());

const baseInfo = ref({
  ...storeInfo.value,
});

const { clearStoreData } = useStore();
const resetHandler = () => {
  baseInfo.value = {
    work: 0,
    personal: 0,
    passive: 0,
  };
  clearStoreData();
};
const saveHandler = () => {
  storeInfo.value = { ...baseInfo.value };
};
</script>

<template>
  <div class="page">
    <div class="container stack-lg">
      <div class="card">
        <h1 class="h1">我的时间</h1>
        <p class="text-muted mt-1">我的时间属于我自己。</p>
      </div>

      <div class="card stack-md">
        <div class="row">
          <span>工作</span>
          <input class="input w-24" type="number" v-model="baseInfo.work" />
        </div>
        <div class="row">
          <span>为自己</span>
          <input class="input w-24" type="number" v-model="baseInfo.personal" />
        </div>
        <div class="row">
          <span>被动消耗</span>
          <input class="input w-24" type="number" v-model="baseInfo.passive" />
        </div>
        <div class="flex gap-2 self-end">
          <button class="btn-light cursor-pointer" @click="resetHandler">
            重置
          </button>

          <button class="btn self-end cursor-pointer" @click="saveHandler">
            保存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
