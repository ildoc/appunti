import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login" />
            </Scene>
            <Scene key="main">
                <Scene
                    onRight={() => Actions.emplloyeeCreate()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employee"
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"></Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
