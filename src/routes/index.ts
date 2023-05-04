import {
    HomePage,
    JPAcademyPage,
    AdminHomePage,
    LoginPage,
    ForgetPasswordPage,
    AdminNewPage,
    AdminCreateNewPage,
    AdminCoursesPage,
    AdminJobPage,
    CreateNewJobApplicationPage,
    PageTinTuc,
    NotFoundPage,
    MyComponent,
    AdvanceEduPage,
    ContactPage,
    InternshipPage,
    PageGioiThieu,
    PageKhaiGiang,
} from "../pages";
import { JPAcademyLayout, AdminLayout } from "../layout";

type RoutingPath = {
    path: string;
    component: React.FC<{}>;
    layout?: React.FC<{}> | null;
};

const PublicRoutes: RoutingPath[] = [
    { path: "*", component: NotFoundPage },
    { path: "/", component: HomePage },
    { path: "/jp", component: JPAcademyPage, layout: JPAcademyLayout },
    { path: "/login", component: LoginPage, layout: null },
    {
        path: "/login/forget-password",
        component: ForgetPasswordPage,
        layout: null,
    },
    { path: "/gioi-thieu", component: PageGioiThieu },
    { path: "/tin-tuc", component: PageTinTuc },
    { path: "/lien-he", component: ContactPage },
    { path: "/khai-giang", component: PageKhaiGiang },
    { path: "/dao-tao-mo-rong", component: AdvanceEduPage },
    { path: "/thuc-tap", component: InternshipPage },

    { path: "/admin", component: AdminHomePage, layout: AdminLayout },
    { path: "/admin/jobs", component: AdminJobPage, layout: AdminLayout },
    { path: "admin/jobs/content", component: CreateNewJobApplicationPage, layout: AdminLayout },
    { path: "admin/jobs/content/:id", component: CreateNewJobApplicationPage, layout: AdminLayout },
    { path: "admin/courses", component: AdminCoursesPage, layout: AdminLayout },
    { path: "admin/news/content", component: AdminCreateNewPage, layout: AdminLayout },
    { path: "/admin/news", component: AdminNewPage, layout: AdminLayout },
    {
        path: "admin/news/content/:id", component: AdminCreateNewPage, layout: AdminLayout
    },
    { path: "/test", component: MyComponent },
];

const PrivateRoutes: RoutingPath[] = [
];

export { PublicRoutes, PrivateRoutes };
