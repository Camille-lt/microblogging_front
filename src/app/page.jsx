"use client";

import React, { useEffect, useState } from 'react';
import Post from './components/posts.jsx'; 
import { fetchPosts } from './lib/fetchPosts.js';

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [selectedHashtag, setSelectedHashtag] = useState(null);
  const [showFilters, setShowFilters] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const allHashtags = Array.from(new Set(posts.map(p => p.hashtag).filter(Boolean)));

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredPosts = selectedHashtag
    ? posts.filter(post => post.hashtag === selectedHashtag)
    : posts;

  if (loading) return <p className="text-center mt-10">Chargement des posts...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Erreur : {error}</p>;

  return (
    /* Changement ici : mx-6 sur mobile, mx-40 sur ordi, et max-width pour la propreté */
    <div className="mx-6 md:mx-40 my-10 md:my-20 max-w-7xl lg:mx-auto">
      
      {/* Adaptation de la taille du titre sur mobile */}
      <h1 style={{ color: 'var(--color-emerald-600)' }} className="text-3xl md:text-4xl font-bold mb-4">
        Travelers
      </h1>
      
      <p className="mb-8 text-gray-600 text-base md:text-lg max-w-xl">
        Bienvenue sur Travelers, le blog où vous pouvez partager vos aventures, découvrir des destinations incroyables, et échanger avec une communauté passionnée.
      </p>

      <button
        className="mb-4 w-full md:w-auto px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? 'Cacher les filtres' : 'Afficher les filtres'}
      </button>

      {showFilters && (
        /* flex-wrap permet aux tags de passer à la ligne sur mobile */
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-300 ${
              selectedHashtag === null
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white text-gray-700 hover:bg-blue-100 border-gray-300'
            }`}
            onClick={() => setSelectedHashtag(null)}
          >
            Tous
          </button>
          {allHashtags.map((tag, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-300 ${
                selectedHashtag === tag
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-blue-100 border-gray-300'
              }`}
              onClick={() => setSelectedHashtag(tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}

      {/* La grille est déjà bien (grid-cols-1), les cartes s'empileront naturellement */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">Aucun post pour ce hashtag.</p>
        ) : (
          filteredPosts.map((post) => <Post key={post.id} {...post} />)
        )}
      </div>
    </div>
  );
};

export default Page;