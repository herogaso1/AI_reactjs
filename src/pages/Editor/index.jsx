import React from 'react'
import BlogTopicForm from '@/components/BlogTopicForm'  
import PreviewContent from '@/components/PreviewContent'
const Editor = () => {
  const [inputValue, setInputValue] = React.useState("")
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleCreateBlog = () => {
    console.log(inputValue);
  };
  return (
    <div>
      <BlogTopicForm inputValue={inputValue} setInputValue={setInputValue} handleCreateBlog={handleCreateBlog} />
      <PreviewContent />
    </div>
  )
}

export default Editor
