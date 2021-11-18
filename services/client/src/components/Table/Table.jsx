import { Checkbox } from '@/components';

export default ({ data, onChange }) => {
    const count = data.length;

    return (
        <table>
            <thead>
                <tr>
                    <td>{count > 0 && count}</td>
                    <td>Fullname</td>
                    <td>Address</td>
                    <td>City</td>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.order_id}>
                        <td>
                            <Checkbox onChange={onChange} />
                        </td>
                        <td>
                            {item.firstname} {item.lastname}
                        </td>
                        <td>{item.address}</td>
                        <td>
                            {item.city} {item.zipcode}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
