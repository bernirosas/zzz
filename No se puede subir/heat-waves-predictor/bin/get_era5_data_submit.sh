#!/bin/bash

# submits multiple jobs to the cluster
for year in $(seq 1999 -1 1940)
do
    sbatch bin/get_era5_data.sh $year
done
