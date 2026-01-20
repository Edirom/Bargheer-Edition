#########################
# multi stage Dockerfile
# 1. set up the build environment and build the expath-packages
# 2. run the eXist-db
#########################
FROM eclipse-temurin:25-jre AS builder
LABEL maintainer="Peter Stadler for the ViFE"

ENV EOL_BUILD_HOME="/opt/eol-build"
ENV DATA_BUILD_HOME="/opt/data-build"

RUN apt-get update \
    && apt-get install -y --no-install-recommends ant curl unzip

WORKDIR ${EOL_BUILD_HOME}

RUN curl -LO https://github.com/Edirom/Bargheer-EdiromOnline/archive/master.zip \
    && unzip master.zip \
    && cd Bargheer-EdiromOnline-master \
    && ant

WORKDIR ${DATA_BUILD_HOME}

COPY . .

RUN ant

#########################
# Now running the eXist-db
# and adding our freshly built xar-packages
#########################
FROM stadlerpeter/existdb:5

# add specific settings for this app 
# For more details about the options see  
# https://github.com/peterstadler/existdb-docker
ENV EXIST_ENV="production"
ENV EXIST_CONTEXT_PATH="/edition"
ENV EXIST_DEFAULT_APP_PATH="xmldb:exist:///db/apps/Bargheer-EdiromOnline"

# simply copy our xar packages
# to the eXist-db autodeploy folder
COPY --from=builder /opt/eol-build/Bargheer-EdiromOnline-master/build/*.xar ${EXIST_HOME}/autodeploy/
COPY --from=builder /opt/data-build/build/*.xar ${EXIST_HOME}/autodeploy/
