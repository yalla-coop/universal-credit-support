import CreateUniqueLink from './CreateUniqueLink';
import Welcome from './Welcome';
import CreateOrganisationDetails, {
  SecondStep as CreateOrganisationDetails2,
} from './CreateOrganisationDetails';
import SectionForm from './SectionForm';
import SectionFormThankYou from './SectionForm/ThankYou';
import Dashboard from './Dashboard';
import Organisations from './Organisations';
import EditLandingPage from './EditLandingPage';
import ManageSteps from './ManageSteps';
import EditDetails from './EditDetails';
import ConfirmDeletion from './ConfirmDeletion';
import Customise from './Customise';
import Changes from './Changes';
import EditContent from './EditContent';
import SuccessSignup from './SuccessSignup';
import CustomiseResources from './CustomiseResources';
import EditOrganisation from './EditOrganisation';
import { Routes, Route } from 'react-router-dom';
import { Route as CustomRoute } from './../../components';
import { navRoutes } from './../../constants';
import { AdminOrgProvider } from './../../context/admin-org';

import 'antd/dist/antd.css';
import userRoles from './../../constants/roles';

function AdminRouter() {
  return (
    <AdminOrgProvider>
      <Routes>
        <Route
          path={navRoutes.ADMIN.WELCOME}
          element={
            <CustomRoute
              Component={Welcome}
              layout="splitScreen"
              side="left"
              gradient="secondary"
              publicOnly
            />
          }
        />

        <Route
          path={navRoutes.ADMIN.SUCCESS_SIGNUP}
          element={
            <CustomRoute
              Component={SuccessSignup}
              layout="splitScreen"
              side="left"
              gradient="secondary"
              isPrivate
              allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
            />
          }
        />

        <Route
          exact
          path={navRoutes.ADMIN.CREATE_UNIQUE_LINK}
          element={
            <CustomRoute
              Component={CreateUniqueLink}
              layout="splitScreen"
              gradient="secondary"
              isPrivate
              allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
            />
          }
        />
        <Route
          exact
          path={navRoutes.ADMIN.CREATE_UNIQUE_LINK_SUCCESS}
          element={
            <CustomRoute
              Component={CreateUniqueLink}
              layout="splitScreen"
              gradient="secondary"
              success
              isPrivate
              allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
            />
          }
        />

        <Route
          exact
          path={navRoutes.SUPER_ADMIN.MANAGE_STEPS}
          element={
            <CustomRoute
              Component={ManageSteps}
              layout="dashboard"
              gradient="secondary"
              success
              isPrivate
              allowedRoles={[userRoles.SUPER_ADMIN]}
            />
          }
        />

        <Route
          exact
          path={navRoutes.ADMIN.SECTION}
          element={
            <CustomRoute
              Component={SectionForm}
              layout="dashboard"
              edit
              isPrivate
              allowedRoles={[userRoles.SUPER_ADMIN, userRoles.ADMIN]}
            />
          }
        />
        <Route
          exact
          path={navRoutes.ADMIN.SECTION_ADDED}
          element={
            <CustomRoute
              Component={SectionFormThankYou}
              layout="dashboard"
              edit
              isPrivate
              allowedRoles={[userRoles.SUPER_ADMIN, userRoles.ADMIN]}
            />
          }
        />

        <Route
          exact
          path={navRoutes.SUPER_ADMIN.CHANGES}
          element={
            <CustomRoute
              Component={Changes}
              layout="dashboard"
              edit
              isPrivate
              allowedRoles={[userRoles.SUPER_ADMIN]}
            />
          }
        />

        <Route
          exact
          path={navRoutes.ADMIN.DASHBOARD}
          element={
            <CustomRoute
              Component={Dashboard}
              layout="dashboard"
              showMobileMenu
              isPrivate
              allowedRoles={[userRoles.SUPER_ADMIN, userRoles.ADMIN]}
            />
          }
        />

        <Route
          exact
          path={navRoutes.SUPER_ADMIN.ADD_UPDATE_CONTENT}
          element={
            <CustomRoute
              Component={EditContent}
              layout="dashboard"
              showMobileMenu
              isPrivate
              allowedRoles={[userRoles.SUPER_ADMIN, userRoles.ADMIN]}
            />
          }
        />
        <Route
          exact
          path={navRoutes.SUPER_ADMIN.EDIT_LANDING_PAGE}
          element={
            <CustomRoute
              Component={EditLandingPage}
              layout="dashboard"
              showMobileMenu
              isPrivate
              allowedRoles={[userRoles.SUPER_ADMIN]}
            />
          }
        />
        <Route
          exact
          path={navRoutes.SUPER_ADMIN.ORGANISATIONS}
          element={
            <CustomRoute
              Component={Organisations}
              layout="dashboard"
              showMobileMenu
              isPrivate
              allowedRoles={[userRoles.SUPER_ADMIN]}
            />
          }
        />
        <Route
          exact
          path={navRoutes.SUPER_ADMIN.ORGANISATION_DETAILS}
          element={
            <CustomRoute
              Component={EditOrganisation}
              layout="dashboard"
              showMobileMenu
              isPrivate
              allowedRoles={[userRoles.SUPER_ADMIN]}
            />
          }
        />

        <Route
          exact
          path={navRoutes.ADMIN.CREATE_ORG_DETAILS_FIRST_STEP}
          element={
            <CustomRoute
              Component={CreateOrganisationDetails}
              layout="splitScreen"
              side="left"
              gradient="secondary"
              isPrivate
              allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
            />
          }
        />

        <Route
          exact
          path={navRoutes.ADMIN.CREATE_ORG_DETAILS_SECOND_STEP}
          element={
            <CustomRoute
              Component={CreateOrganisationDetails2}
              layout="splitScreen"
              side="left"
              gradient="secondary"
              isPrivate
              allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
            />
          }
        />

        <Route
          exact
          path={navRoutes.ADMIN.EDIT_ACCOUNT_DETAILS}
          element={
            <CustomRoute
              Component={EditDetails}
              layout="dashboard"
              showMobileMenu
              isPrivate
              allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
            />
          }
        />

        <Route
          exact
          path={navRoutes.ADMIN.CONFIRM_DELETION}
          element={
            <CustomRoute
              Component={ConfirmDeletion}
              layout="dashboard"
              showMobileMenu
              isPrivate
              allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
            />
          }
        />
        <Route
          exact
          path={navRoutes.ADMIN.CUSTOMISE_RESOURCES}
          element={
            <CustomRoute
              Component={CustomiseResources}
              layout="dashboard"
              showMobileMenu
              isPrivate
              allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
            />
          }
        />

        <Route
          exact
          path={navRoutes.ADMIN.CUSTOMISE}
          element={
            <CustomRoute
              Component={Customise}
              layout="dashboard"
              showMobileMenu
              isPrivate
              allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
            />
          }
        />
      </Routes>
    </AdminOrgProvider>
  );
}

export default AdminRouter;
