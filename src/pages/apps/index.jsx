import { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const CRM = lazy(() => import('./crm'));
const Ecommerce = lazy(() => import('./ecommerce'));
const Tasks = lazy(() => import('./tasks'));

export default function Apps() {
	return (
		<Routes>
			<Route path="/*" element={<Outlet />}>
				<Route path="crm/*" element={<CRM />} />
				<Route path="ecommerce/*" element={<Ecommerce />} />
				<Route path="tasks/*" element={<Tasks />} />
			</Route>
		</Routes>
	);
}
