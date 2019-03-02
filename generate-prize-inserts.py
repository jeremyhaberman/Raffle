"""
Generates the insert commands for a list of prizes. Written with Python3.7—not sure if it's backwards compatible.

Example: > python3.7 generate-prize-inserts.py prize-list.txt prize-inserts.txt
"""

import sys


def load_prizes(filename):
    fp = open(filename)

    prizes = []

    for line in fp:
        prizes.append(line.strip())

    return prizes


def print_prizes(prizes):
    for i in range(len(prizes)):
        print(prizes[i])


def wrap(prizes):
    wrapped = []
    for i in range(len(prizes)):
        wrapped.append("Prizes.insert(new Prize({}, 2, \"{}\"));".format(i+1, prizes[i]))
    return wrapped


def process_prizes(filename):
    return wrap(load_prizes(filename))


def write_prizes(prizes, filename):
    out = open(filename, 'w')
    for line in prizes:
        out.write(line)
        out.write("\n")
    out.close()


def main(script, in_filename, out_filename):
    prizes = process_prizes(in_filename)
    write_prizes(prizes, out_filename)


if __name__ == '__main__':
    main(*sys.argv)

