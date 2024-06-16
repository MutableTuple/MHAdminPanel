import { Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<Card>
			<Card.Header className="d-flex justify-content-between align-items-center">
				<h4 className="header-title">Top Selling Products</h4>
				<Link to="" className="btn btn-sm btn-light">
					Export <i className="mdi mdi-download ms-1"></i>
				</Link>
			</Card.Header>
			<Card.Body className="pt-0">
				<Table hover responsive className="mb-0">
					<tbody>
						<tr>
							<td>
								<h5 className="font-14 my-1 fw-normal">Mendu Herbs Shilajit</h5>
								<span className="text-muted font-13">25 March 2018</span>
							</td>
							<td>
								<h5 className="font-14 my-1 fw-normal">$128.50</h5>
								<span className="text-muted font-13">Price</span>
							</td>
							<td>
								<h5 className="font-14 my-1 fw-normal">37</h5>
								<span className="text-muted font-13">Quantity</span>
							</td>
							<td>
								<h5 className="font-14 my-1 fw-normal">$4,754.50</h5>
								<span className="text-muted font-13">Amount</span>
							</td>
						</tr>

						<tr>
							<td>
								<h5 className="font-14 my-1 fw-normal">Mendu herbs Resin</h5>
								<span className="text-muted font-13">12 March 2018</span>
							</td>
							<td>
								<h5 className="font-14 my-1 fw-normal">$20.00</h5>
								<span className="text-muted font-13">Price</span>
							</td>
							<td>
								<h5 className="font-14 my-1 fw-normal">184</h5>
								<span className="text-muted font-13">Quantity</span>
							</td>
							<td>
								<h5 className="font-14 my-1 fw-normal">$3,680.00</h5>
								<span className="text-muted font-13">Amount</span>
							</td>
						</tr>
					</tbody>
				</Table>
			</Card.Body>
		</Card>
	);
};

export default Products;
