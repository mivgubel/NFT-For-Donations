import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
// Pages
import AdminDashboard from "./Pages/Admin-Dashboard/admin-dashboard";
import Cause from "./Pages/Cause/cause";
import Causes from "./Pages/Causes/causes";
import Collection from "./Pages/Collection/collection";
import CollectionElement from "./Pages/Collection-Element/collection-element";
import Home from "./Pages/Home/home";
import Mint from "./Pages/Mint/mint";
import UserDashboard from "./Pages/User-Dashboard/user-dashboard";

//components
import NavbarProject from "./Components/Navbar/navbar";
import {
	ADMIN_DASHBOARD,
	CAUSE,
	CAUSES,
	COLLECTION,
	COLLECTION_ELEMENT,
	HOME,
	MINT,
	USER_DASHBOARD,
} from "./Utils/Constants/Routes";
import { useEffect } from "react";
import { getAdminWallets } from "./redux/actions";

function App() {
	const dispatch = useDispatch();
	const wallet = useSelector((state) => state.user.address);
	const adminWallets = getAdminWallets();
	const isAdmin = adminWallets.includes(wallet?.toLowerCase());

	useEffect(() => {}, [dispatch]);

	return (
		<>
			<NavbarProject />
			<Routes>
				<Route exact path={HOME} element={<Home />} />
				<Route
					exact
					path={ADMIN_DASHBOARD}
					element={isAdmin ? <AdminDashboard /> : <Navigate to={USER_DASHBOARD} />}
				/>
				<Route exact path={CAUSE} element={<Cause />} />
				<Route exact path={CAUSES} element={<Causes />} />
				<Route exact path={`${COLLECTION}/:collectionContractAddress`} element={<Collection />} />
				<Route
					exact
					path={`${COLLECTION}/:collectionContractAddress/${COLLECTION_ELEMENT}/:collectionContractElement`}
					element={<CollectionElement />}
				/>
				<Route exact path={`${MINT}/:collectionContractAddress`} element={<Mint />} />
				<Route exact path={USER_DASHBOARD} element={<UserDashboard />} />
				<Route path="*" element={<Navigate to={HOME} />} />
			</Routes>
		</>
	);
}

export default App;
