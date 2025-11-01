import React from "react";
import BlogTopicForm from "@/components/BlogTopicForm";
import PreviewContent from "@/components/PreviewContent";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "react-hot-toast";

const Editor = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [blogContent, setBlogContent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  // const filename = inputValue ? `${inputValue}.txt` : "blog-content.txt";

  //convert inputValue to a valid filename => example: "blog-content.txt"
  const filename = inputValue
    ? `${inputValue.replace(/\s+/g, "-").toLowerCase()}.txt`
    : "blog-content.txt";
  const handleDownload = () => {
  // 1️⃣ Tạo blob từ nội dung
  const blob = new Blob([blogContent], { type: "text/plain" });

  // 2️⃣ Tạo URL tạm thời cho blob
  const url = URL.createObjectURL(blob);

  // 3️⃣ Tạo thẻ <a> để mô phỏng hành động tải xuống
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;

  // 4️⃣ Thêm vào DOM và click tự động
  document.body.appendChild(a);
  a.click();

  // 5️⃣ Dọn dẹp
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
  const handleCopy = () => {
    if (!blogContent.trim()) {
      toast.error("Không có nội dung để sao chép!");
      return;
    }
      navigator.clipboard.writeText(blogContent);
      toast.success("Đã sao chép vào clipboard!");
  };

  const handleCreateBlog = async () => {
    if (!inputValue.trim()) {
      return;
    }

    setIsLoading(true);

    try {
      const prompt = `Viết một bài blog chi tiết bằng tiếng Việt về chủ đề: "${inputValue}".
Yêu cầu:
- Viết hoàn toàn bằng tiếng Việt
- Có tiêu đề chính (H1)
- Chia thành các phần với tiêu đề phụ (H2, H3)
- Nội dung chi tiết, dễ hiểu
- Có phần mở đầu và kết luận
- Sử dụng bullet points khi cần thiết
- Độ dài khoảng 800-1000 từ`;
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(prompt);
      console.log("result:", result);
      const response = result.response.candidates[0].content.parts[0].text;
      console.log("response:", response);
      //bước 1 Lưu blogContent vào localStorage dưới dạng một mục lịch sử
      const history = JSON.parse(localStorage.getItem("history")) || [];
      const newHistoryItem = {
        id: Date.now(),
        topic: inputValue,
        content: response,
        timestamp: new Date().toLocaleString(),
      };
      history.push(newHistoryItem);
      localStorage.setItem("history", JSON.stringify(history));

      setBlogContent(response);
    } catch (error) {
      console.error("Lỗi khi tạo blog:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <BlogTopicForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleCreateBlog={handleCreateBlog}
        isLoading={isLoading}
      />
      <PreviewContent blogContent={blogContent} 
      handleCopy={handleCopy}
      handleDownload={handleDownload}
        />
    </div>
  );
};

export default Editor;
