const api = {
  getListings: async (filters) => listings, // Use demo listings array
  getListing: async (id) => listings.find(x => x._id === id),
  createListing: async (data) => { listings.push({ ...data, _id: 'demo' + (listings.length + 1), sellerId: { displayName: currentUser?.email || 'Demo', rating: { avg: 4.5 } }, createdAt: new Date() }); },
  setToken: () => {},
  getCurrentUser: async () => currentUser || { _id: 'demo_user', email: 'demo@college.edu', rating: { avg: 4.5 } },
  register: async (email, password, displayName) => ({ user: { _id: 'demo_user', email, displayName, rating: { avg: 4.5 } }, token: 'demo_token' }),
  login: async (email, password) => ({ user: { _id: 'demo_user', email, rating: { avg: 4.5 } }, token: 'demo_token' }),
};