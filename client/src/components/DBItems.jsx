import React from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider , createTheme} from '@mui/material';
import DataTable from './DataTable';


const DBItems = () => {  
  return (
    <div className='flex items-center justify-center gap-4 pt-6 w-full'>
      <ThemeProvider theme={defaultMaterialTheme}>
            <DataTable
              
            />
      </ThemeProvider>
        
    </div>
  )
}

export default DBItems
