"use client";
import { useActivity } from "@/context/ActivityContext";
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from 'recharts';

export default function StatsPage() {
  const { logs } = useActivity();

  const dataMap = logs.reduce((acc, log) => {
    acc[log.type] = (acc[log.type] || 0) + 1;
    return acc;
      }, {});

  const data = Object.keys(dataMap).map((key) => ({
    name: key,
    value: dataMap[key]
      }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="flex flex-col items-center min-h-96 p-5 bg-gray-50">
      <h1 className="text-2xl font-bold mb-5 text-gray-800">Friendship Analytics</h1>
      

      {data.length === 0 ? (
        <div className="bg-red-50 p-10 shadow-sm rounded-lg text-center text-gray-500 border-gray-300 text-3xl w-full md:w-[75%] lg:w-[65%]">
              No Data found!
            </div>
      ) :(

        <>
        <p className="text-lg font-semibold my-4 text-green-800">By Interaction Type</p>
        <div className="w-full max-w-[400px] aspect-square">
            
            <ResponsiveContainer width="100%" height="100%">
            <PieChart>
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius={50}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
       </div>

      
      <div className="mt-8 flex gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
            <p className="text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
        </>
      )}
    </div>
  );
}