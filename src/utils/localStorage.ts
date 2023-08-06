import { ref, watch } from "vue";
import { City } from "@/types/City";

export const localStorage = (initialValue: City, key: string) => {
  const val = ref(initialValue);
  const storageVal = window.localStorage.getItem(key);

  if (storageVal) {
    val.value = JSON.parse(storageVal);
  }

  watch(val, v => {
    window.localStorage.setItem(key, JSON.stringify(v));
  }, { deep: true });

  return val;
}
