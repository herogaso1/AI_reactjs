import React from "react";
import BlogTopicForm from "@/components/BlogTopicForm";
import PreviewContent from "@/components/PreviewContent";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Editor = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [blogContent, setBlogContent] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const handleCopy = () => {
    if (!blogContent.trim()) {
      return;
    }
      navigator.clipboard.writeText(blogContent);
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
        />
    </div>
  );
};

export default Editor;
