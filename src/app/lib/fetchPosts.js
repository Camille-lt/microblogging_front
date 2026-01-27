export const fetchPosts = async () => {
  // URL mise à jour vers ton Back Vercel
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  if (!response.ok) {
    throw new Error('Erreur lors du chargement des posts');
  }
  return response.json();
};