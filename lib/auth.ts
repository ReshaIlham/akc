// Simple authentication utilities
export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "user"
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

// Mock user data
const ADMIN_USER: User = {
  id: "1",
  email: "admin@agilenesia.com",
  name: "Admin User",
  role: "admin",
}

// Simple authentication functions
export const login = async (email: string, password: string): Promise<User | null> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simple validation - in real app, this would be server-side
  if (email === "admin@agilenesia.com" && password === "admin123") {
    // Store in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_user", JSON.stringify(ADMIN_USER))
    }
    return ADMIN_USER
  }

  return null
}

export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_user")
  }
}

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null

  try {
    const userStr = localStorage.getItem("auth_user")
    return userStr ? JSON.parse(userStr) : null
  } catch {
    return null
  }
}

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false
  return getCurrentUser() !== null
}
