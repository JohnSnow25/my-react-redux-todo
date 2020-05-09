import React, { Component, Fragment } from 'react'
import "./table.css";

export default class SortTableApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerList: ["日期", "总次数"],
            tableContent: [{
                date: "2018年7月23日",
                total: 123123,
            }, {
                date: "2017年1月23日",
                total: 345634,
            }, {
                date: "2014年2月23日",
                total: 978567,
            }, {
                date: "2015年5月23日",
                total: 1247789,
            }, {
                date: "2016年8月23日",
                total: 34225,
            }, {
                date: "2011年9月23日",
                total: 765756,
            }]
        }
    }
    render() {
        return (
            <SortTable 
                headerList={this.state.headerList}
                tableContent={this.state.tableContent}
            />
        )
    }
}

let sortType = "asc";
class SortTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currTableContent: props.tableContent
        }
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
    }
    getTimeStamp(dateStr) {
        const timeStamp = Date.parse(dateStr.replace("年", "-").replace("月", "-").replace("日", ""));
        return timeStamp;
    }
    handleHeaderClick(event) {
        const headerContent = event.target.innerHTML;
        const tableContent = this.state.currTableContent;
        if (headerContent === "日期") {
            sortType = sortType === "asc" ? "desc" : "asc"
            tableContent.sort((itemA, itemB) => {
                const sortResult = parseInt(this.getTimeStamp(itemA.date)) - parseInt(this.getTimeStamp(itemB.date));
                return sortType === "asc" ? -sortResult : sortResult;
            })
            this.setState(() => {
                return {
                    currTableContent: tableContent
                }
            })
        }
    }
    render() {
        const { headerList } = this.props; 
        const tableContent = this.state.currTableContent;
        return (
            <table className="table-border">
                <thead>
                    <tr>
                        {
                            headerList.map((item, index) => {
                                return (
                                    <th 
                                        key={index}
                                        onClick={this.handleHeaderClick}
                                    >{item}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableContent.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <tr>
                                        <td>{item.date}</td>
                                        <td>{item.total}</td>
                                    </tr>
                                </Fragment>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}