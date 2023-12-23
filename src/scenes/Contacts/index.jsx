import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "registrarId",
      headerName: "Registrator ID",
    },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 0.75,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 0.5,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.5,
    },
  ];
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Contacts" subTitle="Manage Your Contacts List" />
      </Box>

      <Box
        m="40px 0 0 0"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
            color: `${colors.grey[100]} !important`, 
          }
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          slots={{toolbar: GridToolbar}}
        />
      </Box>
    </Box>
  );
}

export default Contacts;
