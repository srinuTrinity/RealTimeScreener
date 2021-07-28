import CommonTable from "./CommonTable";
import { DUMMY_DATA, HEADINGS } from "../constants/PeerComparisonConstants";
import styles from "../styles/PeerComparisonStyles";
import { makeStyles } from "@material-ui/core";
import { Card } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

const CommonContainer = (props) => {
  const {
    Headings,
    data,
    title,
    HeadlinesComp,
    buttonComp,
    isCountDisplay,
    bottomComp,
    addBottom,
  } = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <h1
        style={{
          marginLeft: 16,
          fontSize: 24,
          fontWeight: 500,
          letterSpacing: 0.5,
        }}
      >
        {title}
      </h1>
      <div className={`${classes.section}`}>
        <div className={`${classes.section} ${classes.newSection}`}>
          {HeadlinesComp}
        </div>
        {buttonComp}
      </div>
      <CommonTable
        Headings={Headings}
        data={data}
        isCountDisplay={isCountDisplay}
      />
      <div
        className={classes.columnsIcon}
        style={{ justifyContent: "flex-start", marginBottom: 16 }}
      >
        {bottomComp}
      </div>
      {addBottom}
    </Card>
  );
};

CommonContainer.defaultProps = {
  Headings: { HEADINGS },
  data: { DUMMY_DATA },
  title: "Peer Comparison",
  HeadlinesComp: <></>,
  buttonComp: <></>,
  isCountDisplay: true,
  bottomComp: <></>,
  addBottom: <></>,
};
export default CommonContainer;
