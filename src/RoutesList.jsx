
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CompaniesPage from "./CompaniesPage";
import CompanyDetails from "./CompanyDetails";
import JobsPage from "./JobsPage";
import NotFound from "./NotFound";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


/** Component for defining routes
 *
 * State: None
 * Props: None
 *
 * App -> RoutesList -> HomePage, CompaniesPage, CompanyDetails, JobsPage, NotFound
 */
function RoutesList({ login, register }) {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/register" element={<RegisterForm register={register} />} />
            <Route path="/companies/:handle" element={<CompanyDetails />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RoutesList;