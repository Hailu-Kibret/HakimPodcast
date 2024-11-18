import { axiosInstance } from "./axiosInstance";

// Define the BASE_URL if it's missing
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

// Export endpoints and base URL
export const API_URLS = {
  BLOGS: `${BASE_URL}/api/blogs`,
  BLOG_BY_ID: (id) => `${BASE_URL}/api/blogs/${id}`,
  COMMENTS: (blogId) => `${BASE_URL}/api/blogs/${blogId}/comments`,
};

// Create blogs
export const CreateBlogs = async (payload) => {
  try {
    const response = await axiosInstance.post(API_URLS.BLOGS, payload); // Added payload for sending data
    return response.data;
  } catch (error) {
    console.error("Error creating blog:", error);
    return { error: error.message }; // Return an error object for better handling
  }
};

// Get all blogs
export const GetBlogs = async () => {
  try {
    const response = await axiosInstance.get(API_URLS.BLOGS); // Changed to GET
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { error: error.message };
  }
};

// Get blog by ID
export const GetBlogsById = async (id) => {
  try {
    const response = await axiosInstance.get(API_URLS.BLOG_BY_ID(id)); // Corrected to GET and used dynamic URL
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    return { error: error.message };
  }
};

// Update blogs
export const UpdateBlogs = async (id, payload) => {
  try {
    const response = await axiosInstance.put(API_URLS.BLOG_BY_ID(id), payload); // Added payload for updates
    return response.data;
  } catch (error) {
    console.error(`Error updating blog with ID ${id}:`, error);
    return { error: error.message };
  }
};

// Delete a blog
export const DeleteBlogs = async (id) => {
  try {
    const response = await axiosInstance.delete(API_URLS.BLOG_BY_ID(id)); // Used dynamic URL
    return response.data;
  } catch (error) {
    console.error(`Error deleting blog with ID ${id}:`, error);
    return { error: error.message };
  }
};
