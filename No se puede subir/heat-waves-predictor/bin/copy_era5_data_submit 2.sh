#!/bin/bash

# job name
#SBATCH --job-name=hw-ingestor

# output file
#SBATCH --output=logs/slurm_%j.log

# job queue
#SBATCH --partition=full

# mail report
#SBATCH --mail-type=ALL
#SBATCH --mail-user=msmendoza@uc.cl

# CPUs requests
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=1

sbatch bin/copy_era5_data.sh
