# Avalon Miner Cli Demo


## Quick Start

```
npm install
npm run dev
```

```
open http://localhost:3000/ping/versions
```


## Usage

1. check might available commands & parameters at `[CGMiner API](https://github.com/ckolivas/cgminer/blob/master/API-README)`
2. update your miner's internal ip at `src/index.ts`


### Get Miner Version

```
$ curl http://localhost:3000/ping/version | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   318  100   318    0     0  20642      0 --:--:-- --:--:-- --:--:-- 21200
{
  "STATUS": [
    {
      "STATUS": "S",
      "When": 1734427417,
      "Code": 22,
      "Msg": "CGMiner versions",
      "Description": "cgminer 4.11.1"
    }
  ],
  "VERSION": [
    {
      "CGMiner": "4.11.1",
      "API": "3.7",
      "PROD": "Avalonnano",
      "MODEL": "nano3",
      "HWTYPE": "PMMv1_X1",
      "SWTYPE": "MM318_X2",
      "VERSION": "24071801_42c628d",
      "HVERSION": "24071801_b906c52_6223725",
      "UPAPI": "2"
    }
  ],
  "id": 1
}
```

### Get Miner Devices

```

$ curl http://localhost:3000/ping/devdetails | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   234  100   234    0     0   2051      0 --:--:-- --:--:-- --:--:--  2052
{
  "STATUS": [
    {
      "STATUS": "S",
      "When": 1734427561,
      "Code": 69,
      "Msg": "Device Details",
      "Description": "cgminer 4.11.1"
    }
  ],
  "DEVDETAILS": [
    {
      "DEVDETAILS": 0,
      "Name": "AVANANO",
      "ID": 0,
      "Driver": "avalonnano",
      "Kernel": "",
      "Model": "",
      "Device Path": ""
    }
  ],
  "id": 1
}
```


### Get Pools

```
{
  "STATUS": [
    {
      "STATUS": "S",
      "When": 1734427682,
      "Code": 7,
      "Msg": "3 Pool(s)",
      "Description": "cgminer 4.11.1"
    }
  ],
  "POOLS": [
    {
      "POOL": 0,
      "URL": "stratum+tcp://btc.global.luxor.tech:700",
      "Status": "Alive",
      "Priority": 0,
      "Quota": 1,
      "Long Poll": "N",
      "Getworks": 9849,
      "Accepted": 5486,
      "Rejected": 23,
      "Works": 22719,
      "Discarded": 0,
      "Stale": 6,
      "Get Failures": 2,
      "Remote Failures": 0,
      "User": "avalon33.jasonhome",
      "Last Share Time": 1734427648,
      "Diff1 Shares": 91566080,
      "Proxy Type": "",
      "Proxy": "",
      "Difficulty Accepted": 90259456,
      "Difficulty Rejected": 376832,
      "Difficulty Stale": 98304,
      "Last Share Difficulty": 16384,
      "Work Difficulty": 16384,
      "Has Stratum": true,
      "Stratum Active": true,
      "Stratum URL": "btc.global.luxor.tech",
      "Stratum Difficulty": 16384,
      "Has Vmask": true,
      "Has GBT": false,
      "Best Share": 54075441,
      "Pool Rejected%": 0.4153,
      "Pool Stale%": 0.1083,
      "Bad Work": 216,
      "Current Block Height": 875141,
      "Current Block Version": 536870912
    },
    {
      "POOL": 1,
      "URL": "stratum+tcp://btc.global.luxor.tech:700",
      "Status": "Alive",
      "Priority": 1,
      "Quota": 1,
      "Long Poll": "N",
      "Getworks": 1,
      "Accepted": 0,
      "Rejected": 0,
      "Works": 0,
      "Discarded": 0,
      "Stale": 0,
      "Get Failures": 0,
      "Remote Failures": 0,
      "User": "avalon33.jasonhome",
      "Last Share Time": 0,
      "Diff1 Shares": 0,
      "Proxy Type": "",
      "Proxy": "",
      "Difficulty Accepted": 0,
      "Difficulty Rejected": 0,
      "Difficulty Stale": 0,
      "Last Share Difficulty": 0,
      "Work Difficulty": 0,
      "Has Stratum": true,
      "Stratum Active": false,
      "Stratum URL": "",
      "Stratum Difficulty": 0,
      "Has Vmask": true,
      "Has GBT": false,
      "Best Share": 0,
      "Pool Rejected%": 0,
      "Pool Stale%": 0,
      "Bad Work": 0,
      "Current Block Height": 0,
      "Current Block Version": 536870912
    },
    {
      "POOL": 2,
      "URL": "stratum+tcp://btc.global.luxor.tech:700",
      "Status": "Alive",
      "Priority": 2,
      "Quota": 1,
      "Long Poll": "N",
      "Getworks": 1,
      "Accepted": 0,
      "Rejected": 0,
      "Works": 0,
      "Discarded": 0,
      "Stale": 0,
      "Get Failures": 0,
      "Remote Failures": 0,
      "User": "avalon33.jasonhome",
      "Last Share Time": 0,
      "Diff1 Shares": 0,
      "Proxy Type": "",
      "Proxy": "",
      "Difficulty Accepted": 0,
      "Difficulty Rejected": 0,
      "Difficulty Stale": 0,
      "Last Share Difficulty": 0,
      "Work Difficulty": 0,
      "Has Stratum": true,
      "Stratum Active": false,
      "Stratum URL": "",
      "Stratum Difficulty": 0,
      "Has Vmask": true,
      "Has GBT": false,
      "Best Share": 0,
      "Pool Rejected%": 0,
      "Pool Stale%": 0,
      "Bad Work": 0,
      "Current Block Height": 0,
      "Current Block Version": 536870912
    }
  ],
  "id": 1
}
```

