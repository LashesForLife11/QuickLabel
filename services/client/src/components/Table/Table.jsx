import { Checkbox } from '@/components';

export default ({ data }) => {
    return (
        data && (
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>Fullname</td>
                        <td>Address</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        item =>
                            item.shipping_amount === '25.00' && (
                                <tr key={item.order_id}>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        {item.firstname} {item.lastname}
                                    </td>
                                    <td>{item.address}</td>
                                    <td>
                                        {item.city} {item.zipcode}
                                    </td>
                                </tr>
                            )
                    )}
                </tbody>
            </table>
        )
    );
};
