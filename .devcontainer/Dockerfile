ARG PYTHON_VERSION=3.13

FROM quay.io/jupyter/minimal-notebook:2024-11-04

USER root
RUN apt update && apt upgrade -y

USER $NB_USER

# TODO: replace these with pip install -e .[dev]
#COPY requirements.txt .
#RUN pip install -r requirements.txt
#RUN --mount=type=bind,source=requirements.txt,target=requirements.txt pip install -r requirements.txt


#CMD ["jupyter-lab", "--notebook-dir=/mnt/notebook", "--allow-root", "--no-browser", "--ip=*", "--port=8080", "--NotebookApp.token=''", "--NotebookApp.password=''"]
#CMD ["jupyter-lab", "--no-browser", "--ip=*", "--port=8888", "--NotebookApp.token=''", "--NotebookApp.password=''"]