import React from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider , createTheme} from '@mui/material';


const DBItems = () => {
  const defaultMaterialTheme=createTheme();
  return (
    <div className='flex items-center justify-center gap-4 pt-6 w-full'>
      <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
                title="Remote Data Preview"
                columns={[
                  {
                    title: 'Avatar',
                    field: 'avatar',
                    render: rowData => (
                      <img
                        style={{ height: 36, borderRadius: '50%' }}
                        src={rowData.avatar}
                      />
                    ),
                  },
                  { title: 'Id', field: 'id' },
                  { title: 'First Name', field: 'first_name' },
                  { title: 'Last Name', field: 'last_name' },
                ]}
                data={query =>
                  new Promise((resolve, reject) => {
                    let url = 'https://reqres.in/api/users?'
                    url += 'per_page=' + query.pageSize
                    url += '&page=' + (query.page + 1)
                    fetch(url)
                      .then(response => response.json())
                      .then(result => {
                        resolve({
                          data: result.data,
                          page: result.page - 1,
                          totalCount: result.total,
                        })
                      })
                  })
                }
          />
      </ThemeProvider>
        
    </div>
  )
}

export default DBItems
