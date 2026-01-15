import { defineStore } from "pinia";

export const useStore = defineStore(
  "user",
  () => {
    type StoreInfo = {
      work: number;
      personal: number;
      passive: number;
    };

    const defaultData: StoreInfo = {
      work: 0,
      personal: 0,
      passive: 0,
    };

    const storeInfo = ref<StoreInfo>({
      ...defaultData,
    });

    const clearStoreData = () => {
      storeInfo.value = { ...defaultData };
    };

    return {
      storeInfo,
      clearStoreData,
    };
  },
  {
    persist: {
      key: "store", // 修改存储的键名，默认为当前 Store 的 id
      storage: window.localStorage, // 存储位置修改为 sessionStorage
    },
  }
);
