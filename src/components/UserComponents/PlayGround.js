import React, { useEffect, useState } from "react";
import {
  Card,
  Metric,
  AreaChart,
  Text,
  Title,
  Flex,
  BadgeDelta,
  DeltaType,
  BarList,
  Color,
  Grid,
} from "@tremor/react";
import PropTypes from "prop-types";
import { json, useLoaderData } from "react-router-dom";
import { getAuthToken } from "../../util/Auth";
import { defer } from "react-router-dom/dist/umd/react-router-dom.development";

function PlayGround() {
  const {
    suppliers,
    sales,
    purchases,
    dailySales,
    dailyPurchases,
    dailyExpenses,
    inventoryValue,
    monthlySales,
    monthlyPurchases,
  } = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    {
      const updatedCategories = [
        {
          title: "Total Sales Amount",
          metric: sales.Amount,
          metricPrev: sales.Sales,
          delta: "25.3%",
          deltaType: "moderateIncrease",
        },
        {
          title: "Total Purchase Amount",
          metric: purchases.Amount,
          metricPrev: purchases.Purchases,
          delta: "25.3%",
          deltaType: "moderateIncrease",
        },
        {
          title: "Profit Today",
          metric: sales.Amount - purchases.Amount,
          metricPrev: purchases.Purchases,
          delta: "25.3%",
          deltaType: "moderateIncrease",
        },
      ];
      setCategories(updatedCategories);
    }
  }, [purchases, sales, dailySales]);

  const salesHighlights = [
    { name: "Monday", value: isNaN(dailySales.Monday) ? 0 : dailySales.Monday },
    {
      name: "Tuesday",
      value: isNaN(dailySales.Tuesday) ? 0 : dailySales.Tuesday,
    },
    {
      name: "Wednesday",
      value: isNaN(dailySales.Wednesday) ? 0 : dailySales.Wednesday,
    },
    {
      name: "Thursday",
      value: isNaN(dailySales.Thursday) ? 0 : dailySales.Thursday,
    },
    { name: "Friday", value: isNaN(dailySales.Friday) ? 0 : dailySales.Friday },
    {
      name: "Saturday",
      value: isNaN(dailySales.Saturday) ? 0 : dailySales.Saturday,
    },
    { name: "Sunday", value: isNaN(dailySales.Sunday) ? 0 : dailySales.Sunday },
  ];

  const purchaseHighlights = [
    {
      name: "Monday",
      value: isNaN(dailyPurchases.Monday) ? 0 : dailyPurchases.Monday,
    },
    {
      name: "Tuesday",
      value: isNaN(dailyPurchases.Tuesday) ? 0 : dailyPurchases.Tuesday,
    },
    {
      name: "Wednesday",
      value: isNaN(dailyPurchases.Wednesday) ? 0 : dailyPurchases.Wednesday,
    },
    {
      name: "Thursday",
      value: isNaN(dailyPurchases.Thursday) ? 0 : dailyPurchases.Thursday,
    },
    {
      name: "Friday",
      value: isNaN(dailyPurchases.Friday) ? 0 : dailyPurchases.Friday,
    },
    {
      name: "Saturday",
      value: isNaN(dailyPurchases.Saturday) ? 0 : dailyPurchases.Saturday,
    },
    {
      name: "Sunday",
      value: isNaN(dailyPurchases.Sunday) ? 0 : dailyPurchases.Sunday,
    },
  ];

  const expenseHighlights = [
    {
      name: "Monday",
      value: isNaN(dailyExpenses.Monday) ? 0 : dailyExpenses.Monday,
    },
    {
      name: "Tuesday",
      value: isNaN(dailyExpenses.Tuesday) ? 0 : dailyExpenses.Tuesday,
    },
    {
      name: "Wednesday",
      value: isNaN(dailyExpenses.Wednesday) ? 0 : dailyExpenses.Wednesday,
    },
    {
      name: "Thursday",
      value: isNaN(dailyExpenses.Thursday) ? 0 : dailyExpenses.Thursday,
    },
    {
      name: "Friday",
      value: isNaN(dailyExpenses.Friday) ? 0 : dailyExpenses.Friday,
    },
    {
      name: "Saturday",
      value: isNaN(dailyExpenses.Saturday) ? 0 : dailyExpenses.Saturday,
    },
    {
      name: "Sunday",
      value: isNaN(dailyExpenses.Sunday) ? 0 : dailyExpenses.Sunday,
    },
  ];




  const dummyData = [
    monthlySales.daily_totals.map((dailyItem)=>(
     {
      date: dailyItem.day,
      SemiAnalysis: dailyItem.total_amount ,
    } 


    ))
  ]









  const chartdata = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
      "The Pragmatic Engineer": 2194,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
      "The Pragmatic Engineer": 2108,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475,
      "The Pragmatic Engineer": 1812,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129,
      "The Pragmatic Engineer": 1726,
    },
  ];

  const data = [
    {
      category: "Weekly Sales",
      stat: isNaN(dailySales.total_sales_week)
        ? 0
        : dailySales.total_sales_week,
      data: salesHighlights,
    },
    {
      category: "Weekly Purchases",
      stat: isNaN(dailyPurchases.total_purchases_week)
        ? 0
        : dailyPurchases.total_purchases_week,
      data: purchaseHighlights,
    },
    {
      category: "Weekly Expenses",
      stat: isNaN(dailyExpenses.total_expenses_week)
        ? 0
        : dailyExpenses.total_expenses_week,
      data: expenseHighlights,
    },
  ];

  const dataFormatter = (number: number) =>
    Intl.NumberFormat("us").format(number).toString();

  return (
    <div>
      <Flex>
        <Grid numColsSm={2} numColsLg={3} className="gap-6">
          {categories.map((item) => (
            <Card key={item.title}>
              <Flex alignItems="start">
                <Text>{item.title}</Text>
                <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
              </Flex>
              <Flex
                justifyContent="start"
                alignItems="baseline"
                className="truncate space-x-3"
              >
                <Metric>Ksh.{item.metric}</Metric>
                <Text className="truncate">Transactions {item.metricPrev}</Text>
              </Flex>
            </Card>
          ))}
        </Grid>
      </Flex>

      <div className="pt-10">
        <Grid numColsSm={2} numColsLg={3} className="gap-6">
          {data.map((item) => (
            <Card key={item.category}>
              <Title>{item.category}</Title>
              <Flex
                justifyContent="start"
                alignItems="baseline"
                className="space-x-2"
              >
                <Metric>{item.stat.toLocaleString()}</Metric>
                <Text>Total Amount</Text>
              </Flex>
              <Flex className="mt-6">
                <Text>Days</Text>
                <Text className="text-right">Amount</Text>
              </Flex>
              <BarList
                data={item.data}
                valueFormatter={dataFormatter}
                className="mt-2"
              />
            </Card>
          ))}
        </Grid>
      </div>

      <div className="flex pt-4">
        <div className="flex-start flex-initial ">
          <Card
            className="max-w-md mx-auto"
            decoration="top"
            decorationColor="indigo"
          >
            <Text>Inventory value</Text>
            <Metric>{inventoryValue.total_value.toLocaleString()}</Metric>
          </Card>
        </div>
       
      </div>
      <div className=" pt-4">
          <Card>
            <Title>Purchases and Sales monthly comparison</Title>
            <AreaChart
              className="h-72 mt-4"
              data={dummyData}
              index="date"
              categories={["SemiAnalysis",]}
              colors={["indigo", "cyan"]}
              valueFormatter={dataFormatter}
            />
          </Card>
        </div>
    </div>
  );
}

export default PlayGround;

async function salesLoader() {
  const token = getAuthToken();
  const response = await fetch(
    "https://flask-inventory.onrender.com/transaction/sales",
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) {
    throw json({ message: "Sales Server Error" }, { status: 500 });
  } else {
    const resData = await response.json();
    console.log(resData);

    return resData;
  }
}

async function dailySalesLoader() {
  const token = getAuthToken();
  const response = await fetch(
    "https://flask-inventory.onrender.com/transaction/sales/per_day",
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) {
    throw json({ message: "Sales Server Error" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function dailyExpensesLoader() {
  const token = getAuthToken();
  const response = await fetch(
    "https://flask-inventory.onrender.com/transaction/expenses/per_day",
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) {
    throw json({ message: "Daily Expenses Server Error" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function purchaseLoader() {
  const token = getAuthToken();
  const response = await fetch(
    "https://flask-inventory.onrender.com/transaction/purchase",
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) {
    throw json({ message: "Purchases Server Error" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function dailyPurchasesLoader() {
  const token = getAuthToken();
  const response = await fetch(
    "https://flask-inventory.onrender.com/transaction/purchases/per_day",
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) {
    throw json({ message: "Daily Purchases Server Error" }, { status: 500 });
  } else {
    const resData = await response.json();
    console.log(resData);
    return resData;
  }
}

async function countLoader() {
  const token = getAuthToken();
  const response = await fetch(
    "https://flask-inventory.onrender.com/supplier/count",
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  if (!response.ok) {
    throw json({ message: "Sales Server Error" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function inventoryValueLoader() {
  const token = getAuthToken();
  const response = await fetch(
    "https://flask-inventory.onrender.com/transaction/inventory-count",
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  if (!response.ok) {
    throw json({ message: "Inventory Server Error" }, { status: 500 });
  } else {
    const resData = await response.json();
    console.log(resData);

    return resData;
  }
}

async function monthlySalesLoader() {
  const token = getAuthToken();
  const response = await fetch(
    "https://flask-inventory.onrender.com/transaction/sales/month",
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  if (!response.ok) {
    throw json({ message: "Monthly sales Server Error" }, { status: 500 });
  } else {
    const resData = await response.json();
    console.log(resData);

    return resData;
  }
}

async function monthlyPurchasesLoader() {
  const token = getAuthToken();
  const response = await fetch(
    "https://flask-inventory.onrender.com/transaction/purchase/month",
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  if (!response.ok) {
    throw json({ message: "Monthly sales Server Error" }, { status: 500 });
  } else {
    const resData = await response.json();

    return resData;
  }
}

export async function dashboardLoader() {
  return defer({
    suppliers: await countLoader(),
    sales: await salesLoader(),
    purchases: await purchaseLoader(),
    dailySales: await dailySalesLoader(),
    dailyPurchases: await dailyPurchasesLoader(),
    dailyExpenses: await dailyExpensesLoader(),
    monthlySales: await monthlySalesLoader(),
    monthlyPurchases: await monthlyPurchasesLoader(),
    inventoryValue: await inventoryValueLoader(),
  });
}
