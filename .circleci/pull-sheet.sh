#!/bin/bash
set -eu

export GS_FORMAT='csv'

echo "Downloading as ${GS_FORMAT}"
curl -s -d /dev/null "https://docs.google.com/spreadsheets/d/${GS_DOCUMENT_ID}/export?exportFormat=${GS_FORMAT}" > ${GS_CSV_FILE}
echo
cat ${GS_CSV_FILE}
echo
