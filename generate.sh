#!/bin/bash

END=400

for i in $(seq 1 $END)
do time ng generate component load-testing/TestComponent$i
done