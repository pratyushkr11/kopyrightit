import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import FormModal from './FormModal'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(application, date, status, details) {
  return { application, date, status, details };
}

export default function CustomizedTables() {

  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem('userId');

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedFormRef = useRef();

  const handleModal = (formData) => {
    selectedFormRef.current = formData; // Set the selected form data in the ref
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    try {
      axios
        .get(`https://kopyrightit-backend-zdfw.onrender.com/getformsu?userId=${userId}`)
        .then((response) => {
          setForms(response.data);
          selectedFormRef.current = response.data[0];
          console.log(selectedFormRef.current)
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, [userId]);



  return (
    <>
      {isModalOpen && (
        <FormModal
          isOpen={isModalOpen}
          setIsOpen={closeModal}
          contentLabel={"Preview"}
          forms={selectedFormRef.current}
        />
      )}
      <TableContainer component={Paper}>
        {loading ? (
          // Display loading indicator while data is being fetched
          <CircularProgress />
        ) : (
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name of application</StyledTableCell>
                <StyledTableCell align="center">Date of application</StyledTableCell>
                <StyledTableCell align="center">Current status</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {forms.map((formData, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {formData.formType.toUpperCase()} COPYRIGHT
                  </StyledTableCell>
                  <StyledTableCell align="center">{new Date(formData.date).toLocaleDateString()}</StyledTableCell>
                  <StyledTableCell align="center">In Progress</StyledTableCell>

                  <StyledTableCell
                    className="tableCell"
                    align="center"
                    // onClick={() => handleModal(formData)} // Pass the form data to handleModal
                    sx={{ cursor: "pointer" }}
                  >
                    <Link
                      to={`/formpage/${index}`} // Change the pathname format
                      state={{ formData }} // Pass formData directly as state
                    >
                      <u style={{ color: 'blue' }}>View Details</u>
                    </Link>
                  </StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </>
  );
}