#!/bin/bash

terraform -chdir=infrastructure/terraform output -json > terraform-outputs.json