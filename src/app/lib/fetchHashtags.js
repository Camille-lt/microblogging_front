export const fetchHashtags = async () => {
  // URL mise à jour pour pointer vers ton Back Vercel
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hashtags`);
  if (!response.ok) {
    throw new Error('Erreur lors du chargement des hashtags');
  }
  return response.json();
};