import React from "react";
import * as _ from "lodash";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import CsvDownloader from "react-csv-downloader";
import componentStyles from "assets/theme/views/admin/tables.js";
import CustomIconButton from "components/CustomButton/CustomIconButton";
import CustomTextButton from "components/CustomButton/CustomTextButton";

const useStyles = makeStyles(componentStyles);

const CustomTable = ({
    title = "",
    columns,
    data,
    onRowClick,
    exportable = false,
    emptyText = "No data available",
    showViewMoreButton = false,
    viewMoreButtonClick,
}) => {
    const classes = useStyles();

    const generateCsvDownloadData = (data) => {
        let filteredData = data.map((e, i) => {
            if (e._id) {
                delete e._id;
            }
            let filteredObject = _.pickBy(e, (o) => o === null);
            if (Object.keys(filteredObject).length) {
                Object.keys(filteredObject).map((j, k) => {
                    e[j] = "";
                });
            }
            return e;
        });
        return filteredData;
    };

    // useEffect(() => {
    //     handlePagination(pageNumber);
    // }, [data]);

    return (
        <>
            <Card classes={{ root: classes.cardRoot }}>
                <CardHeader
                    className={classes.cardHeader}
                    title={title}
                    titleTypographyProps={{
                        component: Box,
                        marginBottom: "0!important",
                        variant: "h3",
                    }}
                    action={
                        exportable ? (
                            data.length ? (
                                <CsvDownloader filename="Sample Data" datas={generateCsvDownloadData(data)}>
                                    <CustomIconButton variant="outlined" title="Export as CSV" icon={<GetAppIcon />} />
                                </CsvDownloader>
                            ) : null
                        ) : null
                    }
                />
                {data.length ? (
                    <div>
                        <TableContainer>
                            <Box component={Table} alignItems="center" marginBottom="0!important">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((e, i) => {
                                            return (
                                                <TableCell
                                                    classes={{
                                                        root: classes.tableCellRoot + " " + classes.tableCellRootHead,
                                                    }}
                                                    key={i}
                                                    style={{ width: "20vw" }}
                                                    // align="center"
                                                >
                                                    {e.title}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((e, i) => {
                                        return (
                                            <TableRow key={i}>
                                                {columns.map((value, index) => {
                                                    return (
                                                        <TableCell
                                                            classes={{
                                                                root:
                                                                    classes.tableCellRoot +
                                                                    " " +
                                                                    classes.tableCellRootBodyHead,
                                                            }}
                                                            component="th"
                                                            variant="head"
                                                            scope="row"
                                                            align="center"
                                                            style={{ width: "20vw" }}
                                                            key={index}
                                                            onClick={() => (onRowClick ? onRowClick(e) : null)}
                                                        >
                                                            <Box alignItems="center" display="flex">
                                                                <Box display="flex" alignItems="flex-start">
                                                                    <Box fontSize=".875rem" component="span">
                                                                        {value.render
                                                                            ? value.render(e)
                                                                            : e[value.field] ?? ""}
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Box>
                            <div style={{ display: "flex", justifyContent: "center", padding: "1em" }}>
                                {showViewMoreButton ? (
                                    <CustomTextButton
                                        color="primary"
                                        variant="outlined"
                                        title="View More"
                                        onClick={viewMoreButtonClick}
                                        size="small"
                                    />
                                ) : null}
                            </div>
                        </TableContainer>
                    </div>
                ) : (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <h4 style={{ fontSize: "15px", fontWeight: "bold", fontFamily: "inherit" }}>{emptyText}</h4>
                    </div>
                )}
            </Card>
        </>
    );
};

export default CustomTable;
