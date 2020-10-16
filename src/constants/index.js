import Taskboard from "../containers/Taskboard";

export const STATUSES = [
    {
      value: "0",
      label: 'READY',
    },
    {
      value: "1",
      label: 'IN PROGRESS',
    },
    {
      value: "2",
      label: 'COMPLETED',
    },
  ];

export const API_ENDPOINT  = 'http://localhost:3000/listTask';
export const FETCH_TASK = 'FETCH_TASK'
export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};
export const ADMIN_ROUTE = [
  {
      path:"/admin",
      name:"Trang quan tri",
      component: Taskboard
  },
  {
    path:"/",
    name:"Trang chu",
    exact: true,
    component: Taskboard
  },

];
