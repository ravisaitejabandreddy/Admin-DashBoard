import { createContext, useState, useContext, useMemo } from "react";
interface AuthContextType {
  user: string | null;
  login: () => void;
  logout: () => void;
}
interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthContext = createContext({} as AuthContextType);
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(
    localStorage.getItem("email")
  );
  const login = () => {
    setUser(localStorage.getItem("email"));
  };
  const logout = () => {
    setUser(null);
  };
  const getValues = useMemo(() => {
    return { user, login, logout };
  }, [user, login, logout]);
  return (
    <AuthContext.Provider value={getValues}>{children}</AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
