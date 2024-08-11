# Heat Waves predictor

## Pre-requisites

- [Python](https://www.python.org/downloads/) (review the needed version in `pyproject.toml`'s `[tool.poetry.dependencies]` section)
- [Poetry](https://python-poetry.org/docs/) (if already installed and configured, jump to the [pre-commit setup](#pre-commit-setup) section)

## Virtual Environment setup

The following steps are required to setup the virtual environment for the project. This will create
a `.venv/` folder at the project's root path.
```bash
# install poetry in python global interpreter
# - Any python version can be used to install Poetry globally via pip, but the virtual environment creation should be done using the same python version listed in pyproject.toml's [tool.poetry.dependencies] section
# - this step is OPTIONAL if you already have poetry install globally
pip3.11 install poetry

# initial poetry configuration (must be done only once)
# to create the .venv/ folder at project's root path when running `poetry env use [python_version]`
poetry config virtualenvs.in-project true

# create an empty virtual environment
# - python_version must match the one listed in pyproject.toml's [tool.poetry.dependencies] section
poetry env use 3.11

# activate virtual environment
source .venv/bin/activate

# install all dependencies listed on pyproject.toml
poetry install
```

## `pre-commit` setup
To enable `pre-commit` hooks, run the following command:
```bash
pre-commit install
```
Now the hook is going to run on every time you create a commit. If you want to run the hook manually, run the following command:
```bash
pre-commit run
```
this will run `pre-commit` only on the changes you made on the files that are going to be committed.
To trigger `pre-commit` on all files, run the following command:
```bash
pre-commit run --all-files
```
This step is needed to unseure CI checks pass on GitHub.

## KFP setup
To setup KFP, run the following commands:
```bash
# install kubectl to manage kubernetes cluster
brew install kubectl

# install kfp
./bin/kfp_install.sh

# forward kfp port
kubectl port-forward -n kubeflow svc/ml-pipeline-ui 8000:80
```
After installation, you can access the KFP UI at http://localhost:8080.

## KFP uninstall
```bash
# OPTIONAL: uninstall kfp
./bin/kfp_uninstall.sh
```
