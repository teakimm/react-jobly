
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CompaniesPage from "./CompaniesPage";
import CompanyDetails from "./CompanyDetails";
import JobsPage from "./JobsPage";
import NotFound from "./NotFound";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";


/** Component for defining routes
 *
 * State: None
 * Props: None
 *
 * App -> RoutesList -> HomePage, CompaniesPage, CompanyDetails, JobsPage, NotFound
 */
function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/companies/:handle" element={<CompanyDetails />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RoutesList;