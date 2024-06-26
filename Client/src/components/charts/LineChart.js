import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { HasAccess } from "../../redux/accessUtils";

const ApexChart = (props) => {
  const { data } = props;


  const [contactsView, taskView, leadView, proprtyView, emailView, callView, meetingView] = HasAccess(["Contacts", "Tasks", "Leads", "Properties", "Emails", "Calls", "Meetings"]);
  let permissions = []
  let permissionsLength = []

  data?.forEach(item => {
    if (item.name) {
      permissions.push(item.name);
      permissionsLength.push(item.length);
    }
  });
  // data?.forEach(item => {
  //   if (leadView?.create || leadView?.update || leadView?.delete || leadView?.view) {
  //     if (item.name === 'Leads') {
  //       permissions.push(item.name);
  //       permissionsLength.push(item.length);
  //     }
  //   }
  //   if (contactsView?.create || contactsView?.update || contactsView?.delete || contactsView?.view) {
  //     if (item.name === 'Contacts') {
  //       permissions.push(item.name);
  //       permissionsLength.push(item.length);
  //     }
  //   }
  //   if (proprtyView?.create || proprtyView?.update || proprtyView?.delete || proprtyView?.view) {
  //     if (item.name === 'Properties') {
  //       permissions.push(item.name);
  //       permissionsLength.push(item.length);
  //     }
  //   }
  //   if (taskView?.create || taskView?.update || taskView?.delete || taskView?.view) {
  //     if (item.name === 'Tasks') {
  //       permissions.push(item.name);
  //       permissionsLength.push(item.length);
  //     }
  //   }
  //   if (meetingView?.create || meetingView?.update || meetingView?.delete || meetingView?.view) {
  //     if (item.name === 'Meetings') {
  //       permissions.push(item.name);
  //       permissionsLength.push(item.length);
  //     }
  //   }
  //   if (callView?.create || callView?.update || callView?.delete || callView?.view) {
  //     if (item.name === 'Calls') {
  //       permissions.push(item.name);
  //       permissionsLength.push(item.length);
  //     }
  //   }
  //   if (emailView?.create || emailView?.update || emailView?.delete || emailView?.view) {
  //     if (item.name === 'Emails') {
  //       permissions.push(item.name);
  //       permissionsLength.push(item.length);
  //     }
  //   }
  // });

  const state = {
    series: [
      {
        name: 'Data',
        data: permissionsLength?.map((item) => item)
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '40%',
        }
      },
      stroke: {
        width: 2
      },
      grid: {
        row: {
          colors: ['#fff', '#f2f2f2']
        }
      },
      xaxis: {
        categories: permissions?.map((item) => item),
        tickPlacement: 'on'
      },

      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        },
      }
    },
  };
  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
    </div>
  );
};

export default ApexChart;


