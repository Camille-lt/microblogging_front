export const fetchPosts = async () => {
  // URL mise à jour vers ton Back Vercel
  const response = await fetch('https://microblogging-back-camille-lebigots-projects.vercel.app/posts'); 
  if (!response.ok) {
    throw new Error('Erreur lors du chargement des posts');
  }
  return response.json();
};