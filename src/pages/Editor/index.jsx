import React from "react";
import BlogTopicForm from "@/components/BlogTopicForm";
import PreviewContent from "@/components/PreviewContent";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Editor = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [blogContent, setBlogContent] = React.useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleCreateBlog = async () => {
    const prompt = "Write a detailed blog post about " + inputValue + ".";
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    console.log("result:", result);
    const response = result.response.candidates[0].content.parts[0].text;
    console.log("response:", response);
    setBlogContent(response);
  };

  return (
    <div>
      <BlogTopicForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleCreateBlog={handleCreateBlog}
      />
      <PreviewContent blogContent={blogContent} />
    </div>
  );
};

export default Editor;
