import { Button, Flex, Input, Table } from '@/components';

export default ({ orders, addOrders }) => {
    const uploadFile = file => {
        var csvFile = new FormData();
        csvFile.append('file', file);

        addOrders(csvFile);
    };
    return (
        <main className="container">
            <Flex>
                <Input
                    label="Import orders from CSV"
                    type="file"
                    name="csv"
                    accept=".csv"
                    onChange={({ target }) => {
                        uploadFile(target.files[0]);
                    }}
                />
                {orders.labels.length > 0 && <Button>PDF</Button>}
            </Flex>
            <Table data={orders.labels} />
            <Table data={orders.freights} />
        </main>
    );
};
