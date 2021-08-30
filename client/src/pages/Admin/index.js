import CreateUniqueLink from './CreateUniqueLink';
import Welcome from './Welcome';
import CreateOrganisationDetails, {
  SecondStep as CreateOrganisationDetails2,
} from './CreateOrganisationDetails';
import StepForm from './StepForm';
import Dashboard from './Dashboard';
import Organisations from './Organisations';
import EditLandingPage from './EditLandingPage';
import ManageSteps from './ManageSteps';
import EditDetails from './EditDetails';
import Customise from './Customise';
import Changes from './Changes';
import EditContent from './EditContent';

import { Switch } from 'react-router-dom';
import { Route } from './../../components';
import { navRoutes } from './../../constants';
import { AdminOrgProvider } from './../../context/admin-org';

import 'antd/dist/antd.css';
import userRoles from './../../constants/roles';

function AdminRouter() {
  return (
    <AdminOrgProvider>
      <Switch>
        <Route
          // Have sub routes
          path={navRoutes.ADMIN.WELCOME}
          Component={Welcome}
          layout="splitScreen"
          side="left"
          gradient="secondary"
          publicOnly
        />

        <Route
          exact
          path={navRoutes.ADMIN.CREATE_UNIQUE_LINK}
          Component={CreateUniqueLink}
          layout="splitScreen"
          gradient="secondary"
          isPrivate
          allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
        />
        <Route
          exact
          path={navRoutes.ADMIN.CREATE_UNIQUE_LINK_SUCCESS}
          Component={CreateUniqueLink}
          layout="splitScreen"
          gradient="secondary"
          success
          isPrivate
          allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
        />

        <Route
          exact
          path={navRoutes.SUPER_ADMIN.MANAGE_STEPS}
          Component={ManageSteps}
          layout="dashboard"
          gradient="secondary"
          success
          isPrivate
          allowedRoles={[userRoles.SUPER_ADMIN]}
        />

        <Route
          exact
          path={navRoutes.SUPER_ADMIN.EDIT_STEP}
          Component={StepForm}
          layout="dashboard"
          edit
          isPrivate
          allowedRoles={[userRoles.SUPER_ADMIN]}
        />

        <Route
          exact
          path={navRoutes.SUPER_ADMIN.CHANGES}
          Component={Changes}
          layout="dashboard"
          edit
          isPrivate
          allowedRoles={[userRoles.SUPER_ADMIN]}
        />

        <Route
          exact
          path={navRoutes.ADMIN.DASHBOARD}
          Component={Dashboard}
          layout="dashboard"
          showMobileMenu
          isPrivate
          allowedRoles={[userRoles.SUPER_ADMIN, userRoles.ADMIN]}
        />

        <Route
          exact
          path={navRoutes.SUPER_ADMIN.EDIT_CONTENT}
          Component={EditContent}
          layout="dashboard"
          showMobileMenu
          isPrivate
          allowedRoles={[userRoles.SUPER_ADMIN]}
        />
        <Route
          exact
          path={navRoutes.SUPER_ADMIN.EDIT_LANDING_PAGE}
          Component={EditLandingPage}
          layout="dashboard"
          showMobileMenu
          isPrivate
          allowedRoles={[userRoles.SUPER_ADMIN]}
        />
        <Route
          exact
          path={navRoutes.SUPER_ADMIN.ORGANISATIONS}
          Component={Organisations}
          layout="dashboard"
          showMobileMenu
        />

        <Route
          exact
          path={navRoutes.ADMIN.CREATE_ORG_DETAILS_FIRST_STEP}
          Component={CreateOrganisationDetails}
          layout="splitScreen"
          side="left"
          gradient="secondary"
          isPrivate
          allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
        />

        <Route
          exact
          path={navRoutes.ADMIN.CREATE_ORG_DETAILS_SECOND_STEP}
          Component={CreateOrganisationDetails2}
          layout="splitScreen"
          side="left"
          gradient="secondary"
          isPrivate
          allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
        />

        <Route
          exact
          path={navRoutes.ADMIN.EDIT_DETAILS}
          Component={EditDetails}
          layout="dashboard"
          showMobileMenu
          isPrivate
          allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
        />

        <Route
          exact
          path={navRoutes.ADMIN.CUSTOMISE}
          Component={Customise}
          layout="dashboard"
          showMobileMenu
          isPrivate
          allowedRoles={[userRoles.ADMIN, userRoles.SUPER_ADMIN]}
        />
      </Switch>
    </AdminOrgProvider>
  );
}

export default AdminRouter;
