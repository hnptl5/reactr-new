import React from "react";
import CashFlowWidgetContainer from "../dashboard-widget/cash-flow-widget/CashFlowWidgetContainer";
import CashWidgetContainer from "../dashboard-widget/cash-widget/CashWidgetContainer";
import RecurringExpensesWidgetContainer from "../dashboard-widget/recurring-expenses-widget/RecurringExpensesWidgetContainer";
import InvoiceWidgetContainer from "../dashboard-widget/invoice-widget/InvoiceWidgetContainer";
import BenchmarksWidgetContainer from "../dashboard-widget/benchmarks-widget/BenchmarksWidgetContainer";
import AdditionalFeatureWidgetContainer from "../dashboard-widget/additional-feature-widget/AdditionalFeatureWidgetContainer";

const DashboardComponent = props => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6 mb-3">
        <CashFlowWidgetContainer />
      </div>
      <div className="col-sm-12 col-md-6 mb-3">
        <CashWidgetContainer />
      </div>
      <div className="col-sm-12 col-md-6 mb-3">
        <RecurringExpensesWidgetContainer />
      </div>
      <div className="col-sm-12 col-md-6 mb-3">
        <InvoiceWidgetContainer />
      </div>
      <div className="col-sm-12 col-md-6 mb-3">
        <BenchmarksWidgetContainer history={props.history} />
      </div>
      <div className="col-sm-12 col-md-6 mb-3">
        <AdditionalFeatureWidgetContainer />
      </div>
    </div>
  );
};

export default DashboardComponent;
