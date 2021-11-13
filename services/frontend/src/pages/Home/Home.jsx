import { Button, Input } from '@/components';

export default ({}) => {
    const uploadFile = file => {
        var data = new FormData()
        data.append('file', file)

        fetch('http://localhost:9090/api/csv', {
            method: 'POST',
            body: data,
        });
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
