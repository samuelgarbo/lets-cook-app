import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  table: {
    maxWidth: "80%",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
function roundToDecimal(num) {
  return Math.round((num + Number.EPSILON) * 10) / 10;
}
const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];

export default function DenseTable({ totalNutrients, totalWeight }) {
  const classes = useStyles();
  const { CHOCDF, ENERC_KCAL, FAT, PROCNT, FIBTG } = totalNutrients;

  const for100Grams = 100 / totalWeight;
  let nutrients = [ENERC_KCAL, CHOCDF, FAT, PROCNT, FIBTG];
  nutrients = nutrients.map((val) => {
    let newQuantity = val.quantity * for100Grams;
    return { ...val, quantity: newQuantity };
  });
  return (
    <Grid item xs container justify="center">
      <Table
        className={classes.table}
        size="small"
        aria-label="nutrition values"
        padding='none'
      >
        <TableHead>
          <TableRow>
            {nutrients.map((nutrient) => (
              <TableCell key={nutrient.label} align="right">
                {nutrient.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {nutrients.map((nutrient) => (
              <TableCell key={nutrient.label} align="right">{`${roundToDecimal(
                nutrient.quantity
              )}${nutrient.unit}`}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </Grid>
  );
}
