import CommonContainer from "./CommonContainer";
import styles from "../styles/PeerComparisonStyles";
import { makeStyles } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import {
  HEADINGS_QUARTERLY,
  DUMMY_DATA_QUARTERLY,
} from "../constants/QuarterlyResultsConstants";
import { HEADINGS, DUMMY_DATA } from "../constants/PeerComparisonConstants";
import {
  DUMMY_DATA_ProLoss,
  HEADINGS_ProLoss,
} from "../constants/ProfitAndLossConstants";
import { DUMMY_DATA_BALANCE } from "../constants/BalanceSheetConstants";
import { DUMMY_DATA_CASHFLOWS } from "../constants/CashFlowsConstants";
import { DUMMY_DATA_RATIOS } from "../constants/RatiosConstants";
import {
  DUMMY_DATA_SHARE,
  HEADINGS_SHARE,
} from "../constants/ShareHoldingPattern";
import ProfitLossCards from "./ProfiltLossCards";

const AllTables = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const HeadLine = (props) => {
    const { text } = props;
    return (
      <p style={{ marginRight: 24, marginLeft: 16, fontSize: 17 }}>{text}</p>
    );
  };

  const QuarterlyHeadLines = () => {
    return (
      <p style={{ marginRight: 24, marginLeft: 16, fontSize: 17 }}>
        Consolidated Figures in Rs.Crores /
        <span className={classes.refineryWord}> View Standalone</span>
      </p>
    );
  };

  const PeerHeadLines = () => {
    return (
      <>
        <p
          style={{
            marginRight: 24,
            marginLeft: 16,
            fontSize: 17,
            "@ media (maxWidth:768)": { marginBottom: 0 },
          }}
        >
          Sector:<span className={classes.refineryWord}> Refineries</span>
        </p>
        <p
          style={{
            fontSize: 17,
            marginLeft: 16,
            "@ media (maxWidth:768)": {
              marginTop: 0,
            },
          }}
        >
          Industry:<span className={classes.refineryWord}> Refineries</span>
        </p>
      </>
    );
  };

  const ClickButton = (props) => {
    const { text } = props;
    return (
      <button className={classes.button}>
        <div className={classes.columnsIcon}>
          <SettingsIcon style={{ fontSize: 18 }} />
          <span style={{ marginTop: 0, marginLeft: 8 }}> {text}</span>
        </div>
      </button>
    );
  };

  const CommonButton = (props) => {
    const { text } = props;
    return (
      <button className={classes.button} style={{ fontSize: 14 }}>
        {text}
      </button>
    );
  };

  const DetailsInput = () => {
    return (
      <div>
        <h1
          style={{
            marginLeft: 16,
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: 0.5,
          }}
        >
          Detailed comparison with:
        </h1>
        <input
          type="search"
          className={classes.input}
          placeholder="eg. Infosys"
        />
      </div>
    );
  };

  const BalanceButtons = () => {
    return (
      <>
        <CommonButton text="CORPORATE ACTIONS" />
        <CommonButton text="EQUITY HISTORY" />
      </>
    );
  };

  return (
    <div>
      <CommonContainer
        title="Peer Comparison"
        Headings={HEADINGS}
        data={DUMMY_DATA}
        isCountDisplay={true}
        HeadlinesComp={<PeerHeadLines />}
        buttonComp={<ClickButton text="EDIT COLUMNS" />}
        bottomComp={<DetailsInput />}
      />
      <CommonContainer
        title="Quarterly Results"
        Headings={HEADINGS_QUARTERLY}
        data={DUMMY_DATA_QUARTERLY}
        isCountDisplay={false}
        HeadlinesComp={<QuarterlyHeadLines />}
        buttonComp={<CommonButton text="PRODUCT SEGMENTS" />}
      />
      <CommonContainer
        title="Profit and Loss"
        Headings={HEADINGS_ProLoss}
        data={DUMMY_DATA_ProLoss}
        isCountDisplay={false}
        HeadlinesComp={<QuarterlyHeadLines />}
        buttonComp={<CommonButton text="PRODUCT SEGMENTS" />}
        addBottom={<ProfitLossCards />}
      />
      <CommonContainer
        title="Balance Sheet"
        Headings={HEADINGS_ProLoss}
        data={DUMMY_DATA_BALANCE}
        isCountDisplay={false}
        HeadlinesComp={<QuarterlyHeadLines />}
        buttonComp={<BalanceButtons />}
      />
      <CommonContainer
        title="Cash Flows"
        Headings={HEADINGS_ProLoss}
        data={DUMMY_DATA_CASHFLOWS}
        isCountDisplay={false}
        HeadlinesComp={<QuarterlyHeadLines />}
      />
      <CommonContainer
        title="Ratios"
        Headings={HEADINGS_ProLoss}
        data={DUMMY_DATA_RATIOS}
        isCountDisplay={false}
        HeadlinesComp={<QuarterlyHeadLines />}
      />
      <CommonContainer
        title="Shareholding Pattern"
        Headings={HEADINGS_SHARE}
        data={DUMMY_DATA_SHARE}
        isCountDisplay={false}
        HeadlinesComp={<HeadLine text="Numbers in Percentages" />}
        buttonComp={<CommonButton text="INSIDER TRADES" />}
      />
    </div>
  );
};

export default AllTables;
