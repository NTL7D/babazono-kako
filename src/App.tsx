import { Routes, Route } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./routes";
import { DefaultLayout } from "./layout";
import { Fragment } from "react";
import PrivateAuthRoutes from "./routes/auth";
function App() {
    return (
        <div className='App'>
            <Routes>
                {PublicRoutes.map((route, index) => {
                    const Component = route.component;
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Component />
                                </Layout>
                            }
                        />
                    );
                })}
                {/* private routes */}
                <Route element={<PrivateAuthRoutes />}>
                    {PrivateRoutes.map((route, index) => {
                        const Component = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
