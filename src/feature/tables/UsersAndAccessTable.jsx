import { useEffect, useState } from "react";

import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
} from "@syncfusion/ej2-react-grids";
import { Inject, Sort } from "@syncfusion/ej2-react-grids";
import "./UsersAndAccessTable.css";

import { L10n, setCulture } from "@syncfusion/ej2-base";

import { getTableData } from "../API/UserTable.jsx";

setCulture("fa-IR");

L10n.load({
  "fa-IR": {
    grid: {
      EmptyRecord: "رکوردی یافت نشد",
    },
  },
});

function UserAndAccessTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const data = await getTableData();
      setTableData(data);
    }
    fetchData();
  }, []);

  return (
    <GridComponent
      dataSource={tableData}
      locale="fa-IR"
      allowSorting={true}
      height={400}
    >
      <ColumnsDirective>
        <ColumnDirective field="شناسه کاربری" width="100px" textAlign="Right" />
        <ColumnDirective field="نام و نام خانوادگی" width="100" />
        <ColumnDirective field="انقضا فعالیت" width="100" textAlign="Right" />
        <ColumnDirective
          field="deleteAction"
          headerText=""
          width="10px"
          template={() => (
            <button className="action-btn">
              <img
                src="icons/table/Delete-Dark.svg"
                alt="edit"
                style={{ width: 24, height: 24 }}
              />
            </button>
          )}
        ></ColumnDirective>
        <ColumnDirective
          field="editAction"
          headerText=""
          width="10px"
          template={() => (
            <img
              src="icons/table/Edit-White.svg"
              alt="edit"
              style={{ width: 24, height: 24 }}
            />
          )}
        ></ColumnDirective>
      </ColumnsDirective>
      <Inject services={[Sort, Filter, Group]} />
    </GridComponent>
  );
}

export default UserAndAccessTable;
