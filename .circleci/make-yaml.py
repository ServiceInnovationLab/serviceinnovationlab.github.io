#!/usr/bin/env python

# Might need to run `python3 -m pip install pyyaml` if you get a ModuleNotFoundError: No module named 'yaml'

import os
import csv
import yaml
import collections

csv_filename = os.environ['GS_CSV_FILE']
yaml_filename = os.environ['GS_YAML_FILE']

data = []


def represent_ordereddict(dumper, data):
    value = []

    for item_key, item_value in data.items():
        node_key = dumper.represent_data(item_key)
        node_value = dumper.represent_data(item_value)

        value.append((node_key, node_value))

    return yaml.nodes.MappingNode(u'tag:yaml.org,2002:map', value)


if __name__ == "__main__":
    yaml.add_representer(collections.OrderedDict, represent_ordereddict)
    yaml.explicit_start = True

    with open(csv_filename, "r") as csv_file:
        reader = csv.reader(csv_file, delimiter=",")
        for i, line in enumerate(reader):
            if i == 0:
                labels = line                
            else:
                hash = collections.OrderedDict()
                column = 0
                for label in labels:
                    value = line[column]
                    hash[label] = value
                    column += 1
                data.append(hash)

    with open(yaml_filename, 'w') as yaml_file:
        yaml.dump({'data': data}, yaml_file)
