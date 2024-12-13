import React, { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleCreate = () => {
    if (newPost.trim()) {
      const newPostData = { id: Date.now(), text: newPost };
      setPosts([...posts, newPostData]);
      setNewPost("");
    }
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const handleUpdate = () => {
    setPosts(
      posts.map((post) =>
        post.id === editingId ? { ...post, text: editingText } : post
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="App">
      <div className="container">
        <h1>게시판</h1>
        <div className="input-section">
          <input
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="새 게시글을 입력하세요"
          />
          <button onClick={handleCreate}>추가</button>
        </div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {editingId === post.id ? (
                <div className="edit-mode">
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <div className="edit-buttons">
                    <button onClick={handleUpdate}>저장</button>
                    <button onClick={() => setEditingId(null)}>취소</button>
                  </div>
                </div>
              ) : (
                <div className="post">
                  <span>{post.text}</span>
                  <div className="buttons">
                    <button onClick={() => startEditing(post.id, post.text)}>
                      수정
                    </button>
                    <button onClick={() => handleDelete(post.id)}>삭제</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
