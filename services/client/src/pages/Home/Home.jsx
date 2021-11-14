import {  Input, Table } from '@/components';

export default ({ orders, addOrders }) => {
    const uploadFile = file => {
        var csvFile = new FormData();
        csvFile.append('file', file);

        addOrders(csvFile);
    };
    return (
        <main className="container">
            <Input
                label="Import orders from CSV"
                type="file"
                name="csv"
                accept=".csv"
                onChange={({ target }) => {
                    uploadFile(target.files[0]);
                }}
            />
            <Table data={orders.data} />
        </main>
    );
};
