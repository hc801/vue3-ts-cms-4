import { ref } from "vue";
import PageModal from "@/components/page-modal";

type CallbackFn = (item?: any) => any;

export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const defaultInfo = ref({});
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const handleNewData = () => {
    defaultInfo.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    newCb && newCb();
  };
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    editCb && editCb();
  };

  return [pageModalRef, defaultInfo, handleEditData, handleNewData];
}
