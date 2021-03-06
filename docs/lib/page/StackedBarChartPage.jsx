'use strict';

import React from "react";
import { helper } from "react-stockcharts";
var { TypeChooser } = helper;

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import StackedBarChart from "lib/charts/StackedBarChart";

var StackedBarChartPage = React.createClass({
	statics: {
		title: "Stacked Bar Chart"
	},
	render() {
		return (
			<ContentSection title={StackedBarChartPage.title}>
				<Row>
					<Section colSpan={2}>
						<TypeChooser ref="container">
							{(type) => (<StackedBarChart data={this.props.groupedBarData} type={type} />)}
						</TypeChooser>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<aside dangerouslySetInnerHTML={{__html: require('md/STACKED-BAR-CHART')}}></aside>
					</Section>
				</Row>
			</ContentSection>
		);
	}
});

export default StackedBarChartPage;
