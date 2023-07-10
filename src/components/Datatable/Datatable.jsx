import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { DataGrid, Column, Scrolling, Selection } from 'devextreme-react/data-grid';
// import 'devextreme/dist/css/dx.common.css';
// import 'devextreme/dist/css/dx.light.css';
import './_tablesStyle.scss'

const Datatable = (props) => {
    const tableRef = useRef();
    const [filteredData, setFilteredData] = useState()
    const [searchTerm, setSearchTerm] = useState('');

    const search = () => {
        var input = document.getElementById("search-input")
        var table = document.getElementById("datatable")
        var tr = table.getElementsByTagName("tr")
        var filter = input.value.toUpperCase()
        for (let i = 0; i < tr.length; i++) {
            for (let j = 0; j < props.columns.length; j++) {
                var td = tr[i].getElementsByTagName("td")[j];
                if (td) {
                    var txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break;
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
    }

    const searchVirtual = () => {
        var id = props.tableId ?? "datagrid"
        var table = document.getElementById(id)
        const trElements = table.querySelectorAll('tr');
        var filter = searchTerm.toUpperCase()
        trElements.forEach((tr, index) => {
            var x = tr.querySelectorAll('[role="gridcell"]')
            if (x.length > 0) {
                const contentArray = Array.from(x).map((td) => td.textContent);
                contentArray.forEach((td) => {
                    if (td.toUpperCase().indexOf(filter).toString() > -1) {
                        tr.style.display = "";
                        return;
                    } else {
                        tr.style.display = "none";
                    }
                })
            }
        }) 
    }

    const allVisible = () => {
        var table = document.getElementById("datatable")
        var tr = table.getElementsByTagName("tr")
        for (let i = 0; i < tr.length; i++) {
            tr[i].style.display = "";
        }
    }

    const allVisibleVirtual = () => {
        var id = props.tableId ?? "datagrid"
        var table = document.getElementById(id)
        const trElements = table.querySelectorAll('tr');
        var filter = searchTerm.toUpperCase()
        trElements.forEach((tr, index) => {
            tr.style.display = "";
            // var x = tr.querySelectorAll('[role="gridcell"]')
            // if(x.length > 0){
            //     const contentArray = Array.from(x).map((td) => td.textContent);
            //     contentArray.forEach((td) => {
            //         console.log(td)
            //         if (td.toUpperCase().indexOf(filter) > -1) {
            //             tr.style.display = "";
            //             return;
            //         } else {
            //             tr.style.display = "none";
            //         }
            //     })
            // }
        })

        // PRIMER TR
        // props.tableRef.current.instance._$element[0].childNodes[0].children[5].children[0].children[0].children[0].children[0].children[0].children[1].children[0]

        // PRIMER NOMBRE (TD)
        // props.tableRef.current.instance._$element[0].childNodes[0].children[5].children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[2].innerHTML

        // console.log(props.tableRef.current.instance.getCellElement(0,1).textContent)
        // console.log(props.tableRef.current.instance.getRowElement(0))
    }

    useEffect(() => {
        if (!props.virtual) {
            if (searchTerm != "") {
                search()
            } else {
                allVisible()
            }
        } else {
            // if (searchTerm != "") {
            //     searchVirtual()
            // } else {
            //     allVisibleVirtual()
            // }
            const filteredResults = props.data.filter(reg => {
                const rowValues = Object.values(reg).some(value => {
                    if (typeof value === 'string') {
                        return value.toLowerCase().includes(searchTerm.toLowerCase());
                    }
                    return false;
                });
                return rowValues;
            });
            setFilteredData(filteredResults);
        }
    }, [searchTerm, props.data])

    return (
        <div>
            <div className='relative grid justify-between grid-cols-2 pt-5 m-3'>
                <div className='flex items-center' >
                    {props.add &&
                        <button className='btnAgregar' onClick={props.add}>Agregar</button>
                    }
                </div>
                <div className='flex justify-end min-h-[3rem]  ' >
                    <div className='grid justify-items-end' >
                        <input id='search-input' className='h-12 search-input' type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                        <label htmlFor="search-input" className='non-selectable'><span className="material-icons search-icon">search</span></label>
                    </div>
                </div>
            </div>
            <div className='containerTable'>
                {/* {filteredData && props.columns && props.virtual === true &&
                    <DataGrid
                        id={props.tableId ?? 'datagrid'}
                        ref={props.tableRef}
                        dataSource={filteredData}
                        keyExpr={props.rowId}
                        showBorders={true}
                        showRowLines={true}
                        showColumnLines={false}
                        selectedRowKeys={props.selectedData}
                        onSelectionChanged={props.selectionFunc}
                        hoverStateEnabled={true}
                        elementAttr={{ class: 'data-table' }}
                        onCellPrepared={(e) => {
                            if (e.rowType === 'header') {
                                e.cellElement.setAttribute('data-label', e.column.caption);
                            } else {
                                e.cellElement.setAttribute('data-label', e.column.caption);
                            }
                        }}
                    >
                        <Scrolling mode="virtual" />
                        {props.selection === true &&
                            <Selection mode='multiple'
                                showCheckBoxesMode='always'
                                selectAllMode='allPages'
                                allowSelectAll={false}
                            />
                        }

                        {props.columns &&
                            props.columns.map((column, index) => (
                                column.cell ? (
                                    <Column
                                        key={index}
                                        type="buttons"
                                        caption={column.header}
                                        cellRender={(rowData) =>
                                            column.cell({ item: rowData.data, ...props })
                                        }
                                        name={column.cell ? `button-${index}` : undefined}
                                    >
                                    </Column>
                                ) : (
                                    <Column
                                        key={index}

                                        dataField={column.accessor ?? "-"}
                                        caption={column.header}
                                        name={column.cell ? `button-${index}` : undefined}
                                    />
                                )
                            ))}
                    </DataGrid>
                } */}
                {props.data && props.columns && !props.virtual &&
                    <table id="datatable" ref={tableRef} className='data-table'>
                        <thead className='headerTable'>
                            <tr scope="col">
                                {props.columns &&
                                    props.columns.map((head, index) => {
                                        return (
                                            <th key={index}>{head.header}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {props.data &&
                                props.data.length > 0 ? (
                                props.data.map((reg, i) => {
                                    return (
                                        <tr id='tr' key={i}>
                                            {props.columns &&
                                                props.columns.map((col, index) => {
                                                    return (
                                                        <td key={index} data-label={`${col.header}`} className='table-item'>
                                                            {col.cell && <col.cell item={{ ...reg }} {...props} />}
                                                            {!col.cell && (reg[col.accessor] ?? "-")}
                                                        </td>
                                                    )
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr><td className='table-item' colSpan={props.columns.length}>No se encontraron registros.</td></tr>
                            )
                            }
                        </tbody>
                        {/* {(filteredData && props.prev && props.next) &&
                        filteredData.length > 0 &&
                        <tfoot className='sticky w-full h-16 text-center -bottom-1'>
                            <tr>
                                <td colSpan={props.columns.length}>
                                    <div className='flex items-center justify-between pl-12 pr-12'>
                                        <label>{props.current_page} of {props.total_pages}</label>
                                        <div className='flex items-center gap-x-2'>
                                            <div className='flex items-center'>
                                                {props.current_page > 1 &&
                                                    <button onClick={props.prev}>
                                                        <ArrowBackIosIcon />
                                                    </button>
                                                }
                                            </div>
                                            <div>
                                                {pagination().map((pageNumber, index) => (
                                                    <button key={index} disabled={pageNumber === '...'} >{pageNumber}</button>
                                                ))}
                                            </div>
                                            <button onClick={props.next}>
                                                <ArrowForwardIosIcon />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    } */}
                    </table>
                }
            </div>
        </div>
    )
}

export default Datatable