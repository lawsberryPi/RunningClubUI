import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HomeIcon from '@mui/icons-material/Home';
import ClubSummaryPage from "../pages/installation/InstallationPage";
import HistoryPage from "../pages/history/HistoryPage";
import HistoryIcon from '@mui/icons-material/History';
import ClinicsPageLayout from "../pages/clinics/ClinicsPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/ClubSummary",
    element: <ClubSummaryPage />,
    state: "ClubSummary",
    sidebarProps: {
      displayText: "Home",
      icon: <HomeIcon />
    }
  },
  {
    path: "/clinics",
    element: <ClinicsPageLayout />,
    state: "clinics",
    sidebarProps: {
      displayText: "Clinics",
      icon: <DirectionsRunIcon />
    }
  },
  {
    path: "/history",
    element: <HistoryPage />,
    state: "history",
    sidebarProps: {
      displayText: "History",
      icon: <HistoryIcon />
    }
  },
];

export default appRoutes;