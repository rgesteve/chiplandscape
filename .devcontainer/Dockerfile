ARG PYTHON_VERSION=3.13

FROM quay.io/jupyter/minimal-notebook:2024-11-04

USER root
RUN apt update && apt upgrade -y

USER $NB_USER

#CMD ["jupyter-lab", "--notebook-dir=/mnt/notebook", "--allow-root", "--no-browser", "--ip=*", "--port=8080", "--NotebookApp.token=''", "--NotebookApp.password=''"]
CMD ["jupyter-lab", "--no-browser", "--ip=*", "--port=8888", "--NotebookApp.token=''", "--NotebookApp.password=''"]