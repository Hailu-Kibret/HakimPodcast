import { axiosInstance } from "./axiosInstance";

// Centralized error handler
const handleError = (error, context = "") => {
  console.error(`${context}:`, error.message || error);
  return { success: false, message: error.message || "An error occurred" };
};

// Register podcasts
export const CreatePodcasts = async (payload) => {
  try {
    const response = await axiosInstance.post(`/podcasts`, payload);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error, "Error creating podcast");
  }
};

// Get all podcasts
export const GetPodcasts = async () => {
  try {
    const response = await axiosInstance.get(`/podcasts`);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error, "Error fetching podcasts");
  }
};

// Get podcast by ID
export const GetPodcastsById = async (id) => {
  try {
    const response = await axiosInstance.get(`/podcasts/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error, `Error fetching podcast with ID ${id}`);
  }
};

// Update podcasts
export const UpdatePodcasts = async (id, payload) => {
  try {
    const response = await axiosInstance.put(`/podcasts/${id}`, payload);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error, `Error updating podcast with ID ${id}`);
  }
};

// Delete a podcast
export const DeletePodcasts = async (id) => {
  try {
    const response = await axiosInstance.delete(`/podcasts/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error, `Error deleting podcast with ID ${id}`);
  }
};
