import { Route, Routes } from "react-router";
import { CandidatesPage } from "./pages/candidatesPage";
import { AdverseActionsPage } from "./pages/adverseActionsPage";
import { CandidateDetailsPage } from "./pages/candidateDetailPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import ForgotPage from "./pages/ForgotPassword";
import { AdverseActionCandidatePage } from "./pages/adverseActionCandidatePage";
import { AuthProvider } from "./authentication";
import { CheckUser, RequireAuth } from "./authentication/RequireAuth";
export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/candidateList"
          element={
            <RequireAuth>
              <CandidatesPage />
            </RequireAuth>
          }
        />
        <Route
          path="/adverseActions"
          element={
            <RequireAuth>
              <AdverseActionsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/candidate/:id"
          element={
            <RequireAuth>
              <CandidateDetailsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            <CheckUser>
              <SigninPage />
            </CheckUser>
          }
        />
        <Route
          path="forgot"
          element={
            <CheckUser>
              <ForgotPage />
            </CheckUser>
          }
        />
        <Route
          path="signup"
          element={
            <CheckUser>
              <SignupPage />
            </CheckUser>
          }
        />
        <Route
          path="/actionCandidate/:id"
          element={
            <RequireAuth>
              <AdverseActionCandidatePage />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
};
