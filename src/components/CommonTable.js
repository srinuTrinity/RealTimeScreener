import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { DUMMY_DATA, HEADINGS } from "../constants/PeerComparisonConstants";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "white",
    color: "#60607B",
  },
  body: {
    fontSize: 14,
    height: 20 + "!important",
    lineHeight: 0.5,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#F8F8FC",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CommonTable(props) {
  const { Headings, data, isCountDisplay } = props;
  const classes = useStyles();

  let count = 0;

  function createData(data) {
    count = count + 1;
    return { count, ...data };
  }

  const rows = data.map((eachRow) => {
    return createData(eachRow);
  });

  return (
    <TableContainer
      component={Paper}
      variant="outlined"
      style={{
        width: "100%",
        margin: "auto",
        marginTop: 24,
        borderStyle: "none",
      }}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {Headings.map((eachHeading) => {
              if (isCountDisplay === false && eachHeading === "S.No.") {
                return <></>;
              }
              return (
                <StyledTableCell align="start" style={{ borderStyle: "none" }}>
                  {eachHeading}
                </StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            console.log(row.count, count);
            return (
              <StyledTableRow key={row.count}>
                {isCountDisplay && (
                  <StyledTableCell
                    align="start"
                    component="th"
                    scope="row"
                    style={{
                      borderStyle: "none",
                    }}
                  >
                    {row.count}.
                  </StyledTableCell>
                )}
                {Headings.slice(1).map((eachHeading) => {
                  return (
                    <StyledTableCell
                      align="start"
                      style={{ borderStyle: "none" }}
                    >
                      {row[eachHeading]}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
CommonTable.defaultProps = {
  isCountDisplay: true,
  Headings: HEADINGS,
  data: DUMMY_DATA,
};
