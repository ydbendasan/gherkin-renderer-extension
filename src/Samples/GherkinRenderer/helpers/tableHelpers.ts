import { DataTable, Examples, TableRow } from "@cucumber/messages";
import { ObservableValue } from "azure-devops-ui/Core/Observable";
import { ColumnSelect, ITableColumn, renderSimpleCell } from "azure-devops-ui/Table";
import { ArrayItemProvider, IItemProvider } from "azure-devops-ui/Utilities/Provider";

export const getExampleColumns = (ex: Examples): (ColumnSelect | any)[] => {
    if (!ex.tableHeader) {
        return [];
    }

    return getColumnsFromRow(ex.tableHeader);
};


export const getExampleItems = (columns: any, ex: Examples): any[] => {
    return getItemsFromRows(columns, ex.tableBody as TableRow[]);
};

export const getColumnsFromRow = (tr: TableRow): (ColumnSelect | any)[] => {
    return tr.cells.map((th) => {
        return {
            id: th.value,
            name: th.value,
            renderCell: renderSimpleCell,
            readonly: true,
            width: new ObservableValue(-40),
        };
    });
}

export const getItemsFromRows = (columns: any, rows: TableRow[]): any[] => {
    return rows.map((tr) => {
        let row: { [key: string]: any } = {};
        row.key = tr.id;
        tr.cells.forEach((tc, i) => {
            const fieldName = columns[i].name;
            if (fieldName) {
                row[fieldName] = tc.value;
            }
        });
        return row;
    });
}

export const getTablePropsFromDataTable = (dt: DataTable | undefined):
    ({ columns: ITableColumn<unknown>[], items: IItemProvider<unknown> } | undefined) => {
    if (!dt || !dt.rows || dt.rows.length <= 1) {
        return;
    }

    const columns = getColumnsFromRow(dt.rows[0])
    const items = new ArrayItemProvider(getItemsFromRows(columns,dt.rows.slice(1)));
    return { columns, items };
}
