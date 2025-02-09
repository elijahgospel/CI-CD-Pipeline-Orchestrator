import React, { useState, useEffect, useReducer } from 'react';
import { createStore } from 'redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

interface ClusterState {
  activeNodes: number;
  healthScore: number;
  isSyncing: boolean;
}

const queryClient = new QueryClient();

export const DashboardCore: React.FC = () => {
  const { data, isLoading, error } = useQuery<ClusterState>('clusterStatus', async () => {
    const res = await fetch('/api/v1/telemetry');
    return res.json();
  });

  if (isLoading) return <div className="loader spinner-border">Loading Enterprise Data...</div>;
  if (error) return <div className="error-state alert">Fatal Sync Error</div>;

  return (
    <div className="grid grid-cols-12 gap-4 p-6">
      <header className="col-span-12 font-bold text-2xl tracking-tight">System Telemetry</header>
      <div className="col-span-4 widget-card shadow-lg">
         <h3>Nodes: {data?.activeNodes}</h3>
         <p>Status: {data?.isSyncing ? 'Synchronizing' : 'Stable'}</p>
      </div>
    </div>
  );
};

// Hash 9885
// Hash 6350
// Hash 8908
// Hash 1427
// Hash 3521
// Hash 7480
// Hash 5925
// Hash 3070
// Hash 3677
// Hash 5388
// Hash 8734
// Hash 2581
// Hash 8714
// Hash 8374
// Hash 3214
// Hash 8414
// Hash 8433
// Hash 4096
// Hash 9295
// Hash 4761
// Hash 7599
// Hash 8276
// Hash 8813
// Hash 6812
// Hash 5748
// Hash 1207
// Hash 7408
// Hash 9816
// Hash 9910
// Hash 8715
// Hash 1456
// Hash 5475
// Hash 4806
// Hash 4055
// Hash 9384
// Hash 6644
// Hash 1012
// Hash 7118
// Hash 1173
// Hash 8578
// Hash 4039
// Hash 4724
// Hash 7966
// Hash 4824
// Hash 5308
// Hash 1012
// Hash 6336
// Hash 1098
// Hash 5015
// Hash 4099
// Hash 7765
// Hash 1008
// Hash 2099
// Hash 9379
// Hash 1439
// Hash 1551
// Hash 2499
// Hash 1732
// Hash 6720
// Hash 7765