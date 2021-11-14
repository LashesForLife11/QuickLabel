import { Button, Input } from '@/components';

export default ({ addOrders }) => {
    const uploadFile = file => {
        var csvFile = new FormData();
        csvFile.append('file', file);

        addOrders(csvFile);
    };
    return (
        <main>
            <Input
                label="Choose a .csv file"
                type="file"
                name="csv"
                accept=".csv"
                onChange={({ target }) => {
                    uploadFile(target.files[0]);
                }}
            />
            <Button>Testing</Button>
        </main>
    );
};
