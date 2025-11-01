import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PreviewContent from "@/components/PreviewContent";

export default function DialogView({
  isOpenview,
  onOpenChangeview,
  blogContent,
}) {
  // xử lý sự kiện đóng dialog view
  const handleCloseView = () => {
    setIsOpenview(false);
  };
  // //xử lý sự kiện coppy từ handleCopy
  // const handleCopy = () => {
  //   navigator.clipboard.writeText(selectedContent);
  // };
  // //xử lý sự kiện download
  // const handleDownload = () => {
  //   const element = document.createElement("a");
  //   element.href =
  //     "data:text/plain;charset=utf-8," + encodeURIComponent(selectedContent);
  //   element.download = "blog-content.txt";
  //   element.click();
  // };

  return (
    <Dialog
      open={isOpenview}
      onOpenChange={onOpenChangeview}
      onClose={handleCloseView}
    >
      <DialogContent className="min-w-[60vw] max-w-3xl max-h-[80vh] overflow-auto">
        {/* <DialogDescription className="max-h-[80vh] overflow-auto">
          <DialogTitle>Xem trước & Xuất</DialogTitle>
          <div className=" gap-2 md:flex-row justify-between items-start mb-8 border-b pb-6">
            <Button  onClick={handleCopy}>Sao chép</Button>
            <Button onClick={handleDownload}>Tải xuống</Button>
          </div>
          {blogContent}
        </DialogDescription> */}
        <PreviewContent blogContent={blogContent} />
      </DialogContent>
    </Dialog>
  );
}
