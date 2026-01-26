export const fetchHashtags = async () => {
  // URL mise à jour pour pointer vers ton Back Vercel
  const response = await fetch('https://microblogging-back-camille-lebigots-projects.vercel.app/hashtags');
  if (!response.ok) {
    throw new Error('Erreur lors du chargement des hashtags');
  }
  return response.json();
};