import { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const Products = lazy(() => import('./Products'));
const ProductDetails = lazy(() => import('./ProductDetails'));
const Orders = lazy(() => import('./Orders'));
const OrderDetails = lazy(() => import('./OrderDetails'));
const Customers = lazy(() => import('./Customers'));
const Sellers = lazy(() => import('./Sellers'));

export default function Dashboard() {
	return (
		<Routes>
			<Route path="/*" element={<Outlet />}>
				<Route path="products" element={<Products />} />
				<Route path="product-details" element={<ProductDetails />} />
				<Route path="orders" element={<Orders />} />
				<Route path="order-details" element={<OrderDetails />} />
				<Route path="customers" element={<Customers />} />
				<Route path="sellers" element={<Sellers />} />
			</Route>
		</Routes>
	);
}
