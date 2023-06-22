import React from 'react'
import MaterialTable from 'material-table';
import { ThemeProvider , createTheme} from '@mui/material';

const DataTable = ({column, data, title, actions}) => {
    const defaultMaterialTheme=createTheme();
    return (
        <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
                columns={column}
                data={data}
                title={title}
                actions={actions}
            />
        </ThemeProvider>
    )
}

export default DataTable
