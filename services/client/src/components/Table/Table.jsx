import { Checkbox } from '@/components';

export default ({ data, onChange }) => {
    const count = data.length;
    console.log(data);
    return (
        <table>
            <thead>
                <tr>
                    <th>Fullname</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>{count > 0 && count}</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.order_id}>
                        <td>
                            {item.firstname} {item.lastname}
                        </td>
                        <td>{item.address}</td>
                        <td>
                            {item.city} {item.zipcode}
                        </td>
                        <td>{item.country}</td>
                        <td>
                            <Checkbox onChange={onChange} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
