"use client";
import { useState, useEffect } from 'react'
import Card from "../Card"; // Certifique-se de que o caminho para o componente Card esteja correto

const ListCard = () => {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        `http://localhost/portifa-wp/wp-json/wp/v2/projetos`
        // 'http://localhost/destaque-rural/wp-json/wp/v2/pages?slug=lp'
      );
      const postsData = await response.json();
      setPosts(postsData); 
     } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  };


  useEffect(() => {
    getPosts()
  }, []);



  return (
    <div className="col-span-12 container">
      <div className="grid grid-cols-12 gap-8">
        {/* Renderiza os posts */}
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.id} post={post} />
          ))
        ) : (
          <p>Carregando posts...</p>
        )}
      </div>
    </div>
  );
};

export default ListCard;
